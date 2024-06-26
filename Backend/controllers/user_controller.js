const UserModel = require("../models/user_model");

class User {
  static getAllUsers = async (req, res) => {
    try {
      const users = await UserModel.find();
      res.status(200).send({ success: true, users });
    } catch (e) {
      res.send({ success: false, msg: e.message });
    }
  };
  static getSingleUser = async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id);

      if (!user) {
        return res.send({
          success: false,
          msg: "User with that id not founds",
        });
      }

      res.status(200).json({
        success: true,
        user,
      });
    } catch (e) {
      res.send({ success: false, msg: e.message });
    }
  };
  static registerUser = async (req, res) => {
    try {
      const { userName, email, password,phone, role } = req.body;
      const checkUser = await UserModel.findOne({ userName });
      if (checkUser) {
        return res.send({
          success: false,
          msg: "User with That username Already Exists",
        });
      }

      const user = await UserModel.create({
        userName,
        email,
        password,
        phone,
        role
      });
      res.send({ success: true, user, msg: "user register successfully" });
    } catch (e) {
      res.send({ success: false, err: e.message });
    }
  };
  static loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        return res.send({
          success: false,
          msg: "Please enter email & password",
        });
      const user = await UserModel.findOne({ email });
      if (!user)
        return res.send({
          success: false,
          msg: "Invalid email or Password",
        });
      const isPasswordMatched = await user.comparePassword(password);
      if (!isPasswordMatched)
        return res.send({
          success: false,
          msg: "Invalid email or Password",
        });
      const token = await user.getJwtToken();
      res.send({
        success: true,
        msg: "logged in",
        data: { user, token },
      });
    } catch (e) {
      res.send({ success: false, err: e.message });
    }
  };
  static updatePassword = async (req, res) => {
    try {
      const user = await UserModel.findById(req.user.id);

      // Check previous user password
      const isMatched = await user.comparePassword(req.body.oldPassword);
      if (!isMatched) {
        return res.send({ success: false, msg: "Old password is incorrect" });
      }
      user.password = req.body.newPassword;
      await user.save();

      const token = await user.getJwtToken();
      res.send({
        success: true,
        msg: "password updated successfully",
        data: { user, token },
      });
    } catch (e) {
      res.send({ success: false, msg: e.message });
    }
  };
  static updateProfile = async (req, res) => {
    try {
      const newUserData = {
        userName: req.body.userName,
        email: req.body.email,
        avatar: req.body.avatar,
      };

      const user = await UserModel.findByIdAndUpdate(req.user.id, newUserData, {
        new: true,
        useFindAndModify: false,
      });

      res.status(200).json({
        success: true,
        user,
      });
    } catch (e) {
      res.send({ success: false, err: e.message });
    }
  };
  static logout = async (req, res) => {
    try {
      req.user.tokens.splice((tok) => tok.token == req.token);
      await req.user.save();
      res.send({
        success: true,
        msg: "logged out",
        data: req.user,
      });
    } catch (e) {
      res.send({ success: false, msg: e.message });
    }
  };
  static updateUserRole = async (req, res) => {
    try {
      const newUserData = {
        role: req.body.role,
      };
      const user = await UserModel.findByIdAndUpdate(
        req.params.id,
        newUserData,
        {
          new: true,
          useFindAndModify: false,
        }
      );

      res.status(200).json({
        success: true,
        msg: "User Updated successfully",
        user,
      });
    } catch (e) {
      res.send({ success: false, err: e.message });
    }
  };
  static deleteUser = async (req, res) => {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.send({
        success: false,
        msg: `User with id: ${req.params.id} not found`,
      });
    }
    await user.remove();
    res.status(200).json({
      success: true,
      msg: "User Deleted Successfully",
    });
  };
  static getMe = async (req, res) => {
    try {
      const user = await UserModel.findById(req.user);

      if (!user) {
        return res.send({ msg: "User with that id not found" });
      }

      res.status(200).json({
        success: true,
        user,
      });
    } catch (e) {
      res.send({ success: false, err: e.message });
    }
  };
}

module.exports = User;
