# Task 5: User Management RESTful API

A robust, enterprise-structured RESTful CRUD API engineered with Node.js, Express.js, and MongoDB Atlas (via Mongoose ODM). The project provides complete user resource lifecycle management, strict schema enforcement, query-driven data filtering, granular HTTP status codes, pre-route validation, and centralized exception handling.

---

## 1. Project Overview & Objectives

The primary objective of this project is to build a production-compliant backend service that manages user profiles in a cloud-hosted MongoDB database. 

### Core Capabilities:
- **Full CRUD Lifecycle**: Seamless creation, retrieval, mutation, and deletion of user records.
- **RESTful Best Practices**: Correct semantic verb mapping (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) with exact status code compliance (`200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`).
- **Dynamic Data Filtering**: Server-side query parameter processing allowing targeted user extraction by properties such as `role` and `age`.
- **Defensive Error Handling**: Proactive interceptors that trap invalid MongoDB `ObjectId` strings before queries execute, preventing unhandled engine cast exceptions.
- **Graceful Resource Teardown**: Interception of system termination signals (`SIGINT`, `SIGTERM`) to cleanly terminate active database sockets and server listeners.

---

## 2. System Architecture & Folder Structure

The project adheres to the **Controller-Service-Model** pattern, cleanly decoupling network routing, input validation, business logic, and database persistence.

```text
Task5-users-api/
├── config/
│   └── db.js                 # MongoDB Atlas connection manager & connection lifecycle
├── controllers/
│   └── userController.js     # User business logic, DB queries, and response dispatching
├── middlewares/
│   ├── asyncHandler.js       # Higher-order async function wrapper to forward exceptions
│   ├── errorMiddleware.js    # Centralized global error handling & 404 route catcher
│   └── validateObjectId.js   # Middleware verifying 24-character hexadecimal ObjectIDs
├── models/
│   └── userModel.js          # Mongoose schema, validation rules, and indexes
├── routes/
│   └── userRoutes.js         # Express router mapping API endpoints to controller handlers
├── .env                      # Local environment configuration (Strictly Git-ignored)
├── .env.example              # Sample environment template for onboarding
├── .gitignore                # Exclusion list for Git tracking (node_modules, .env)
├── package.json              # Project dependencies, scripts, and metadata
├── package-lock.json         # Dependency tree lockfile
├── README.md                 # Complete project documentation
└── server.js                 # Express bootstrap, middleware stack, and server listener
