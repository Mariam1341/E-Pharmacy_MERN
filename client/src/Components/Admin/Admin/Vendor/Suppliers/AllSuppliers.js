import React, { useState } from "react";
import AddNewSuplier from "./AddNewSuplier";

const AllSuppliers = () => {
  const orders = [
    {
      id: "0",
      photo: "https://i.imgur.com/FHMKqK5.png",
      name: "Dr. Sherine Helmy",
      email: "pharco@pharco.com.eg",
      address: "10th of Ramadan City, Sharqia ",
      phone: "+20 (3)4701003",
      status: "Active",
      price: "6952.53",
      date: "Apr 17, 2024",
      company: "Pharco Pharmaceuticals",
    },
    {
      photo: "https://i.imgur.com/hz6bZkb.png",
      id: "1",
      name: "Mohamed Saeed",
      address: " El Obour city, Qalyubia",
      email: "mSabry@gmail.com",
      phone: "+2 (02) 4614 0100",
      status: "Active",
      price: "8527.58",
      date: "Apr 1, 2024",
      company: "Amoun Pharmaceutical",
    },
    {
      photo: "https://i.imgur.com/1As0akH.png1",

      id: "2",
      name: "Dr.Ahmed Kassem",
      address: "Tenth of Ramadan City",
      email: "salmaAhmed@gmail.com",
      phone: "+20554499199",
      status: "Active",
      date: "Mar 23, 2024",
      price: "2698.50",
      company: "EIPICO",
    },
    {
      id: "3",
      photo: "https://i.imgur.com/UYCE7Rr.png",
      name: "Dr.Ayman Saber",
      email: "memphis@memphis.com.eg",
      address: "8 El Sawah St., El Ameeriyah, Cairo",
      phone: "+20 2 22823528",
      status: "Active",
      date: "Mar 15, 2024",
      price: "9852.64",
      company: "MPCI",
    },
    {
      id: "4",
      photo:
        "https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg",
      name: "Dr.Ibrahim Farrag",
      address: "28 Farid St. Behined Meridien Heliopolis",
      email: "dp@dp.com.eg",
      phone: "+20 1111000656",
      status: "Deactive",
      date: "Mar 5, 2024",
      price: "1736.90",
      company: "Delta Pharma",
    },
    // {
    //   id: '0',
    //   photo: 'https://i.imgur.com/1As0akH.png1',
    //   name: 'Alex Shatov',
    //   company: 'Square',
    //   address: 'Mripur-1',
    //   price: '6952.53',
    //   status: 'Active',
    // },
    // {
    //   id: '1',
    //   photo: 'https://i.imgur.com/UYCE7Rr.png',
    //   name: 'Philip Harbach',
    //   address: 'Dhonmondi',
    //   company: 'Acme',

    //   status: 'Active',
    // },
    // {
    //   id: '2',
    //   photo: 'https://i.imgur.com/FHMKqK5.png',
    //   name: 'Mirko Fisuk',
    //   address: 'Uttara-6',
    //   company: 'Beximco',
    //   price: '2698.50',
    //   status: 'Active',
    // },
    // {
    //   id: '3',
    //   photo: 'https://i.imgur.com/hz6bZkb.png',
    //   name: 'Olga Semklo',
    //   company: 'ACI',
    //   address: 'Gulshan-1',
    //   price: '9852.64',
    //   status: 'Active',
    // },
    // {
    //   id: '4',
    //   photo: 'https://i.imgur.com/udG6SOt.png',
    //   name: 'Burak Long',
    //   address: 'Mirpur-12',
    //   company: 'Uniliver',
    //   price: '1736.90',
    //   status: 'Deactive',
    // },
  ];

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const [editModal, setEditModal] = useState(false);
  const [viewProduct, setViewProduct] = useState();
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-8 max-w-full sm:max-w-5xl">
        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
          <button
            className="flex-shrink-0 px-4 py-2 text-base font-medium tracking-wide text-white bg-teal-500 rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-teal-200"
            onClick={() => setEditModal(true)}
          >
            Add a new Suppliers
          </button>
          <div className="text-end">
            <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-filter'
                  className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  placeholder="Suplier Name"
                />
              </div>
              <button
                className="flex-shrink-0 px-4 py-2 text-base font-medium tracking-wide text-white bg-teal-500 rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-teal-200"
                type="submit"
              >
                Filter
              </button>
            </form>
          </div>
        </div>

        {/* view all orders */}
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-3xl rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal font-sans tracking-wide">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-semibold"
                  >
                    Suppliers Info
                  </th>
                  <th
                    scope="col"
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                  >
                    Company
                  </th>
                  <th
                    scope="col"
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-semibold"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-10 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                  >
                    Address
                  </th>

                  {/* <th
                    scope="col"
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-center text-sm uppercase font-semibold"
                  >
                    Eamil
                  </th> */}
                  
                  <th
                    scope="col"
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-left pl-12 text-sm uppercase font-semibold"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-5 pb-3 pt-4 bg-teal-100 border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                  >
                    Action
                  </th>
                </tr>
              </thead>

              {/* all Orders data row */}
              {orders.map((order) => {
                return (
                  <tbody key={order._id}>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white font-body font-medium text-sm">
                        <div className="flex items-center w-24 sm:w-full">
                          <div className="flex-shrink-0">
                            <a href="/" className="block relative">
                              <img
                                alt="User Avatar"
                                src={order.photo}
                                className="mx-auto object-cover rounded-full h-10 w-10"
                              />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {order.name.substr(0, 19)}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {order.company}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-center text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {order.phone}
                        </p>
                      </td>
                      {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {order.email}
                        </p>
                      </td> */}
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {order.address}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                        <span
                          className={`relative inline-block px-3 py-1 w-28 text-center font-semibold leading-tight ${
                            order.status === "Active"
                              ? "text-green-800"
                              : order.status === "Deactive"
                              ? "text-red-500"
                              : "text-blue-800"
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`absolute inset-0 opacity-50 rounded-full ${
                              order.status === "Active"
                                ? "bg-green-200"
                                : order.status === "Deactive"
                                ? "bg-red-200"
                                : "bg-blue-300"
                            }`}
                          ></span>
                          <span className="relative">{order.status}</span>
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <button
                          className="flex align-center justify-center font-body font-semibold text-teal-600 hover:text-teal-900"
                          onClick={() => setEditModal(true)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>{" "}
                          Edit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>

            {/* Pagination */}
            <div className="px-5 bg-white py-5 flex flex-col xs:flex-row items-center xs:justify-between">
              <div className="flex items-center">
                <button
                  type="button"
                  className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border-t border-b text-base text-teal-500 bg-white hover:bg-teal-100 "
                >
                  1
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-teal-50"
                >
                  2
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-teal-50"
                >
                  3
                </button>
                <button
                  type="button"
                  className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-teal-50"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Edit Modal Component */}
      {editModal ? (
        <AddNewSuplier setEditModal={setEditModal} viewProduct={viewProduct} />
      ) : null}
    </section>
  );
};

export default AllSuppliers;
