# ENAYA - Comprehensive Healthcare Web Application

ENAYA is a state-of-the-art healthcare platform designed to revolutionize the medicine ordering process, making it efficient, user-friendly, and accessible. Built using the powerful MERN stack, ENAYA integrates advanced technologies to deliver a seamless experience for users seeking to manage prescriptions, find pharmacies, and interact with healthcare providers.

---

## Key Features and Functionalities

### **Prescription OCR**
- Empowers users to upload prescriptions and leverages Optical Character Recognition (OCR) to identify medicines automatically, minimizing manual input and errors.

### **Pharmacy Locator**
- Implements geolocation technology to provide users with a list of nearby pharmacies, ensuring accessibility and convenience.

### **Real-Time Communication**
- Offers a robust live chat feature that connects users with healthcare professionals, enabling instant consultation and support.

### **Order Management System**
- Provides a comprehensive system for users to track their orders, receive real-time updates, and manage delivery or pickup options.

### **Secure User Authentication**
- Ensures the safety of user data with secure sign-up, sign-in, and encrypted session management processes.

### **Intuitive Dashboard**
- Displays a well-organized interface with prescription history, active orders, pharmacy suggestions, and important notifications.

---

## System Architecture and Workflow

1. **User Registration and Login**:
   - Users create an account and securely log in.
   - Role-based access ensures appropriate features for patients and administrators.

2. **Prescription Upload and Analysis**:
   - Users upload their prescriptions, which are scanned using OCR technology to identify medicines.

3. **Pharmacy Search and Interaction**:
   - Users search for pharmacies near their location and check medicine availability.

4. **Order Placement and Management**:
   - Orders are placed through an interactive interface, allowing users to manage order statuses and delivery preferences.

5. **Customer Support**:
   - Real-time live chat provides instant answers to queries and guidance for prescription and order issues.

---

## Technology Stack

- **Frontend**: React.js, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB for robust and scalable data management
- **Additional Technologies**:
  - Tesseract.js for Optical Character Recognition (OCR)
  - JWT for secure authentication
  - Axios for API communication

---

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Mariam1341/E-Pharmacy_MERN.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd E-Pharmacy_MERN
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   cd client
   npm install
   cd ..
   ```

4. **Run the Application**:
   - **Backend**:
     ```bash
     npm run server
     ```
   - **Frontend**:
     ```bash
     cd client
     npm start
     ```

5. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.

---

## Application Usage

- **Upload Prescriptions**: Upload images of prescriptions to automatically extract medicine details.
- **Pharmacy Finder**: Locate and interact with pharmacies near your location.
- **Order Tracking**: Manage order statuses and get notified of updates.
- **Live Support**: Communicate with healthcare providers in real time for any assistance.

---

## Screenshots and Visuals
(Add detailed screenshots showcasing the dashboard, prescription upload workflow, pharmacy search results, and live chat interface.)

---

## Roadmap and Future Enhancements

- **Healthcare Database Integration**: Real-time synchronization with pharmacy inventories for instant updates on medicine availability.
- **Mobile Application**: Develop a dedicated mobile app for better accessibility and user experience.
- **AI Recommendations**: Implement AI-driven suggestions for alternative medicines based on user prescriptions.
- **Multilingual Support**: Expand accessibility by adding support for multiple languages.
- **Enhanced Reporting**: Introduce detailed analytics and reports for administrators to monitor application performance and user activity.

---

**Author**: Mariam Mohammed Abd El-Twab  
**GitHub Repository**: [ENAYA](https://github.com/Mariam1341/E-Pharmacy_MERN)


-demo: https://astounding-selkie-364224.netlify.app/

