# Elegance Clinic Web Application

A modern, responsive full-stack web application designed for a clinic to manage appointments, showcase services, and enhance customer engagement.

---

## Overview

The Elegance Clinic Web Application is a full-stack solution built to streamline appointment booking, service management, and customer interaction for a clinic. It features a user-friendly interface for clients to book appointments and an admin dashboard for managing appointments. The application is built using modern web technologies to ensure scalability, responsiveness, and performance.

---

## Key Features

- **Appointment Booking System**: Allows users to book appointments seamlessly with details like name, email, phone, service type, date, and time.
- **Admin Dashboard**: Enables clinic staff to view, edit, and delete appointments.
- **Dynamic Service Pages**: Dedicated pages for dental, skin, and hair care treatments.
- **Interactive UI**: A responsive and visually appealing design for both desktop and mobile users.
- **Secure Backend**: Built with Next.js API routes and MongoDB for secure data storage and management.

---

## Technologies Used

- **Frontend**: 
  - **Next.js**: For server-side rendering and routing.
  - **React**: For building reusable UI components.
  - **Tailwind CSS**: For responsive and modern styling.
  - **TypeScript**: For type safety and better developer experience.

  
- **Backend**:
  - **Next.js API Routes**: For handling server-side logic.
  - **MongoDB**: For database storage and management.
  
---

## Key Contributions

- Designed and implemented a secure and scalable appointment booking system.
- Developed an admin dashboard for managing appointments with CRUD operations.
- Built reusable and responsive components for scalability and maintainability.
- Optimized performance for fast load times and ensured cross-browser compatibility.

---

## Step-by-Step Guide to Test CRUD Operations

### Admin Login Credentials

| Field     | Value   |
|-----------|---------|
| Username  | doctor  |
| Password  | doctor  |

### 1. Create (POST)
- Navigate to the Appointment Booking Page (/appointment).
- Fill out the form with details like name, email, phone, service type, date, and time.
- Submit the form to create a new appointment.
- Verify the success message: Appointment Booked Successfully!.

### 2. Read (GET)
- Login as Admin
- Navigate to the Admin Dashboard (/admin/appointments).
- View the list of all appointments fetched from the database.

### 3. Update (PUT)
- Login as Admin
- In the Admin Dashboard, click the Edit button for an appointment.
- Update the details in the form and submit.
- Verify that the updated details are reflected in the list.
### 4. Delete (DELETE)
- Login as Admin
- In the Admin Dashboard, click the Delete button for an appointment.
- Confirm the deletion.
- Verify that the appointment is removed from the list.
