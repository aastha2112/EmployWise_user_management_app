# EmployWise User Management App

## 🚀 Project Overview

This is a **React-based User Management Application** that integrates with the **Reqres API** to perform authentication, user listing, editing, and deletion. The app follows a structured UI with **Redux for state management** and **React Router** for navigation.

## 🌟 Features

### Level 1: Authentication

- Users can log in using **email** and **password**.
- Validates credentials against the **Reqres API**.
- Stores the authentication token in **local storage**.
- Redirects to the Users List page after successful login.

### Level 2: Users List

- Fetches users from **`GET /api/users?page=1`**.
- Displays users in a **responsive grid layout**.
- Shows **first name, last name, and avatar**.
- Implements **pagination** for navigating multiple pages.

### Level 3: User Management

- **Edit User:**
  - Clicking **Edit** opens a modal with a pre-filled form.
  - Updates user details using **`PUT /api/users/{id}`**.
  - Provides **success/error notifications**.
- **Delete User:**
  - Clicking **Delete** removes the user from the list.
  - Calls **`DELETE /api/users/{id}`** endpoint.
  - Shows a confirmation prompt before deletion.

### Bonus Features 🎯

- **Search & Filter Users** dynamically.
- **React Router** for seamless navigation.
- **Toast notifications** for success/error messages.
- **Mobile-friendly UI with Tailwind CSS**.
- **Deployed on [Live Demo](#)** (Add link when deployed).

---

## 🛠️ Tech Stack

- **Frontend:** React, Redux, React Router, Axios, Tailwind CSS
- **State Management:** Redux (optional, can use Context API)
- **API Requests:** Axios
- **UI Framework:** Tailwind CSS
- **Hosting:** Netlify / Vercel / GitHub Pages

## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/your-username/employwise-user-management.git
cd employwise-user-management
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Start the Development Server

```sh
npm run dev
```

Runs the app in development mode. Open **http://localhost:5173/** to view it in the browser.

### 4️⃣ Build for Production

```sh
npm run build
```

Generates an optimized production-ready build.

---

## 🔑 Authentication Credentials

To log in, use the following credentials:

```sh
Email: eve.holt@reqres.in
Password: cityslicka
```

---

## 📜 API Endpoints Used

### Authentication

- **POST** `/api/login` → Authenticate user and get a token.

### Users List

- **GET** `/api/users?page=1` → Fetch paginated list of users.

### User Management

- **PUT** `/api/users/{id}` → Update user details.
- **DELETE** `/api/users/{id}` → Remove a user.

---

## 🚀 Deployment (If Hosted)

The project is deployed at: **[Live Demo](#)** (Replace with actual link)

---

## 🤝 Contribution

Feel free to contribute! Fork the repo, create a new branch, and submit a pull request.

---

## 📝 License

This project is open-source and available under the **MIT License**.

---
