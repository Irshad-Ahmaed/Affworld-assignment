# Task Management App

## **Project Description**

This task management app allows users to manage their tasks efficiently. It includes features for user authentication, task management with drag-and-drop functionality, and a user feed. The app is designed with a clean and responsive UI using React and Tailwind CSS.

## **Features Implemented**

- **User Authentication:**
  - Registration
  - Login
  - Forgot Password
  - Google OAuth Login
  - Logout

- **Task Management:**
  - Create, update, and delete tasks
  - Drag and drop tasks between columns (Pending, Completed, Done)
  - Task details including title and description

- **Feed Section:**
  - Users can post content with photos and captions
  - Integrated with Cloudinary for storing and retrieving photos

## **Steps to Run the Project**

### **1. Backend Setup**

1. **Clone the Repository:**
   ```bash
   git clone [your-repo-url]
   cd [your-repo-folder]/backend
   npm install
   ```
2. **ENV Variables:**
    - MONGO_URI=[your-mongodb-uri]
    - JWT_SECRET=[your-jwt-secret]
    - EMAIL=[your-email]
    - EMAIL_PASSWORD=[your-email-password]
    - CLOUDINARY_CLOUD_NAME=[your-cloudinary-cloud-name]
    - CLOUDINARY_API_KEY=[your-cloudinary-api-key]
    - CLOUDINARY_API_SECRET=[your-cloudinary-api-secret]

3. **Run the Backend:**
    ```bash
    npm start

### **2. Frontend Setup:**

1. **ENV Variables:**
    - REACT_APP_BACKEND_URL=http://localhost:5000/api

2. **Commands:**
    ```bash
    cd ../frontend
    npm install
    npm start

### **Access the App**
Open your browser and navigate to `http://localhost:3000`. You can now interact with the app, register new users, manage tasks, and post content with photos.