# 📝 Blog REST API

A simple and beginner-friendly **Blog REST API** built using **Node.js, Express.js, MongoDB, and Mongoose**.

This project demonstrates complete **CRUD operations**, RESTful API development, routing, middleware, error handling, and MongoDB database integration.

---

## 🚀 Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* REST API
* Postman
* JavaScript
* CORS
* dotenv
* Nodemon

---

## ✨ Features

* ✅ Create a new blog
* ✅ Get all blogs
* ✅ Get a single blog by ID
* ✅ Update a blog
* ✅ Delete a blog
* ✅ MongoDB database integration
* ✅ Mongoose schema and model
* ✅ Express routing
* ✅ Middleware
* ✅ Error handling
* ✅ 404 route handling
* ✅ Environment variables using `.env`
* ✅ RESTful API structure

---

## 📁 Project Structure

```text
blog-project/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── blogController.js
│
├── middleware/
│   ├── notFound.js
│   └── errorMiddleware.js
│
├── models/
│   └── Blog.js
│
├── routes/
│   └── blogRoutes.js
│
├── .env
├── .gitignore
├── server.js
├── package.json
└── package-lock.json
```

---

## 🔄 API Flow

```text
Client / Postman
       ↓
Express Server
       ↓
Middleware
       ↓
Routes
       ↓
Controller
       ↓
Mongoose
       ↓
MongoDB
       ↓
Response
```

---

## 📌 API Endpoints

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | `/`              | Check server status |
| POST   | `/api/blogs`     | Create a new blog   |
| GET    | `/api/blogs`     | Get all blogs       |
| GET    | `/api/blogs/:id` | Get single blog     |
| PUT    | `/api/blogs/:id` | Update blog         |
| DELETE | `/api/blogs/:id` | Delete blog         |

---

## 📥 Installation

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go to Project Folder

```bash
cd blog-project
```

### 3. Install Dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root folder:

```env
MONGO_URI=mongodb://127.0.0.1:27017/blogDB
PORT=5000
```

> ⚠️ **Important:** Do not upload the `.env` file to GitHub.

Make sure `.env` is included in your `.gitignore` file:

```text
node_modules/
.env
```

---

## ▶️ Run the Project

### Development Mode

```bash
npm run dev
```

### Normal Mode

```bash
npm start
```

The server will run on:

```text
http://localhost:5000
```

---

# 🧪 Testing with Postman

## 1. Create Blog

**POST**

```text
http://localhost:5000/api/blogs
```

Select:

```text
Body → raw → JSON
```

Use:

```json
{
  "title": "Learn Node.js",
  "author": "Manhar",
  "content": "Node.js is a JavaScript runtime used for backend development.",
  "category": "Programming"
}
```

---

## 2. Get All Blogs

**GET**

```text
http://localhost:5000/api/blogs
```

This API returns all blogs stored in MongoDB.

---

## 3. Get Single Blog

**GET**

```text
http://localhost:5000/api/blogs/BLOG_ID
```

Replace `BLOG_ID` with the actual MongoDB document ID.

Example:

```text
http://localhost:5000/api/blogs/68c123456789abcdef123456
```

---

## 4. Update Blog

**PUT**

```text
http://localhost:5000/api/blogs/BLOG_ID
```

Body:

```json
{
  "title": "Learn Node.js Full Course",
  "author": "Manhar",
  "content": "Node.js is useful for backend development.",
  "category": "Backend"
}
```

---

## 5. Delete Blog

**DELETE**

```text
http://localhost:5000/api/blogs/BLOG_ID
```

Replace `BLOG_ID` with the blog ID you want to delete.

---

# 🗄️ MongoDB

### Database

```text
blogDB
```

### Collection

```text
blogs
```

### Blog Document

Each blog document contains:

```text
_id
title
author
content
category
createdAt
updatedAt
```

---

# 🛡️ Middleware

This project uses middleware for:

* CORS
* JSON request parsing
* 404 route handling
* Centralized error handling

### Middleware Flow

```text
Request
   ↓
CORS Middleware
   ↓
JSON Middleware
   ↓
Routes
   ↓
Controller
   ↓
Error Middleware
   ↓
Response
```

---

# 🔧 CRUD Operations

### Create

```text
POST /api/blogs
```

### Read

```text
GET /api/blogs
GET /api/blogs/:id
```

### Update

```text
PUT /api/blogs/:id
```

### Delete

```text
DELETE /api/blogs/:id
```

---

# 🎯 Learning Objectives

Through this project, I learned:

* How to create a Node.js server
* How to use Express.js
* How REST APIs work
* How to connect MongoDB with Node.js
* How to create Mongoose models
* How to implement CRUD operations
* How Express middleware works
* How to handle API errors
* How to test APIs using Postman
* How to structure a backend project professionally

---

# 🔗 Project Links

## 💻 GitHub Repository

👉 **Source Code:**
https://github.com/manhar98/BLOG-PROJECTS-node.js.git

## 🎥 Project Demo Video

👉 **Watch the Project Demo:**



---

# 📺 Project Demonstration

The project demonstration video covers:

* Node.js server setup
* Express.js configuration
* MongoDB connection
* Mongoose model
* REST API routes
* CRUD operations
* Middleware
* Error handling
* Postman testing
* MongoDB data verification

---

# 👨‍💻 Author

## Manhar

### Project Type

Backend REST API / CRUD Project

### Built With

```text
Node.js + Express.js + MongoDB + Mongoose
```
