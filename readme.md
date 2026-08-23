# 🎌 Anime Merchandise E-commerce

A modern, full-stack **Anime Merchandise E-commerce Platform** built using the **MERN Stack**. The application provides a complete shopping experience with user authentication, anime merchandise browsing, product details, wishlist, cart management, and a responsive modern interface.

The project was initially developed using HTML, CSS, JavaScript, and Firebase and has been migrated to a production-oriented **React + Node.js + Express + MongoDB** architecture.

---

## 🚀 Live Demo

🌐 **Live Website:**
https://animestore-465160wx7-st689801-6062s-projects.vercel.app/

💻 **GitHub:**
https://github.com/Mrshubham21

---

## ✨ Features

### 🏠 Home

* Modern anime-themed landing page
* Featured merchandise
* Anime-themed sections and content
* Smooth navigation
* Responsive design
* Explore merchandise functionality

### 🛍️ Anime Merchandise

* Browse available anime products
* Product cards with images, prices, ratings and availability
* Product details page
* Anime and character information
* Product size selection
* Quantity selection

### 🔮 Upcoming

* Discover upcoming anime merchandise
* Preview future products
* Anime-themed upcoming releases

### ❤️ Wishlist

* Add products to wishlist
* Remove products from wishlist
* Wishlist state for authenticated users
* Easy navigation between wishlist and products

### 🛒 Shopping Cart

* Add products to cart
* Select product size
* Increase/decrease quantity
* Remove products
* Clear cart
* Persistent cart for authenticated users
* Dynamic cart item count

### 🔐 Authentication

* User registration
* User login
* JWT-based authentication
* Password hashing with bcrypt
* Protected routes
* Persistent login sessions

### 👤 User Features

* User profile
* Authenticated shopping experience
* Protected user-specific data

---

# 🖼️ Screenshots

## 🏠 Home

![Home Page](screenshots/home.png)

---

## 🛍️ Anime Merchandise / Products

![Products Page](screenshots/products.png)

---

## 🔮 Upcoming

![Upcoming Page](screenshots/upcoming.png)

---

## ❤️ Wishlist

![Wishlist Page](screenshots/wishlist.png)

---

## 🛒 Cart

![Cart Page](screenshots/cart.png)

---

# 🛠️ Tech Stack

## Frontend

* ⚛️ React
* ⚡ Vite
* 🎨 Tailwind CSS
* 🧭 React Router
* 📡 Axios
* 🔄 Context API
* 🎯 Lucide React

## Backend

* 🟢 Node.js
* 🚂 Express.js
* 🔗 REST APIs
* 🔐 JWT Authentication
* 🔒 bcrypt

## Database

* 🍃 MongoDB Atlas
* 🧩 Mongoose

## Development Tools

* Visual Studio Code
* Postman
* Git
* GitHub

---

# 🏗️ Project Architecture

```text
                ┌─────────────────────┐
                │      React + Vite   │
                │      Frontend       │
                └──────────┬──────────┘
                           │
                           │ Axios / REST API
                           ▼
                ┌─────────────────────┐
                │   Node.js + Express  │
                │      Backend         │
                └──────────┬──────────┘
                           │
              ┌────────────┴────────────┐
              │                         │
              ▼                         ▼
       ┌──────────────┐         ┌──────────────┐
       │ JWT + bcrypt │         │  Mongoose    │
       │ Authentication│         │              │
       └──────────────┘         └──────┬───────┘
                                       │
                                       ▼
                              ┌─────────────────┐
                              │  MongoDB Atlas  │
                              └─────────────────┘
```

---

# 📁 Project Structure

```text
anime-merchandise/
│
├── client/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   ├── ProductCard/
│   │   │   ├── Cart/
│   │   │   └── ...
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   ├── CartContext.jsx
│   │   │   ├── ProductContext.jsx
│   │   │   └── WishlistContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── Upcoming.jsx
│   │   │   ├── Wishlist.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Profile.jsx
│   │   │
│   │   ├── services/
│   │   │   ├── authService.js
│   │   │   ├── productService.js
│   │   │   ├── cartService.js
│   │   │   └── wishlistService.js
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── cartController.js
│   │   └── ...
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Cart.js
│   │   └── ...
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── cartRoutes.js
│   │   └── ...
│   │
│   ├── utils/
│   │
│   ├── app.js
│   └── server.js
│
└── README.md
```

---

# 🔐 Authentication Flow

The application uses **JWT-based authentication**.

### Registration

```text
User
  ↓
Register Form
  ↓
POST /api/auth/register
  ↓
Password hashed using bcrypt
  ↓
User stored in MongoDB
```

### Login

```text
User
  ↓
Login Form
  ↓
POST /api/auth/login
  ↓
Credentials verified
  ↓
JWT generated
  ↓
Token stored on client
  ↓
Authenticated requests
```

Protected API requests use:

```text
Authorization: Bearer <JWT_TOKEN>
```

---

# 🛒 Cart System

The cart is connected to the authenticated user.

Supported operations include:

```text
GET     /api/cart
POST    /api/cart
PUT     /api/cart/:productId
DELETE  /api/cart/:productId
DELETE  /api/cart/clear
```

The system supports:

* Adding products
* Quantity updates
* Size selection
* Removing individual products
* Clearing the cart
* User-specific cart persistence

---

# 📦 Product API

The backend provides REST APIs for product management and retrieval.

Example endpoints:

```text
GET /api/products
GET /api/products/featured
GET /api/products/:id
```

Product information includes:

* Product name
* Description
* Price
* Original price
* Discount
* Category
* Anime
* Character
* Brand
* Images
* Sizes
* Rating
* Stock
* Featured status
* New product status

---

# ❤️ Wishlist

The wishlist system allows authenticated users to save products for later.

Users can:

```text
Add Product → Wishlist
Remove Product → Wishlist
View Saved Products
```

Wishlist state is managed on the frontend using **React Context API** and connected to the backend.

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/Mrshubham21/YOUR-REPOSITORY.git
```

```bash
cd YOUR-REPOSITORY
```

---

## 2. Install Frontend Dependencies

```bash
cd client
npm install
```

---

## 3. Install Backend Dependencies

Open another terminal:

```bash
cd server
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `server` directory.

```env
PORT=5000

MONGO_URI=your_mongodb_atlas_connection_string

JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
```

Never commit your `.env` file to GitHub.

Add it to `.gitignore`:

```text
.env
node_modules/
```

---

# ▶️ Running the Project

### Start Backend

```bash
cd server
npm run dev
```

Backend will run on:

```text
http://localhost:5000
```

### Start Frontend

Open another terminal:

```bash
cd client
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

# 🔄 Application Flow

```text
                    User
                     │
                     ▼
              React Frontend
                     │
        ┌────────────┼────────────┐
        ▼            ▼            ▼
     Products      Wishlist      Cart
        │            │            │
        └────────────┼────────────┘
                     ▼
               Axios / REST API
                     │
                     ▼
            Express.js Backend
                     │
              JWT Middleware
                     │
                     ▼
               MongoDB Atlas
```

---

# 📈 Future Improvements

Planned improvements include:

* 💳 Payment gateway integration
* 📦 Order management
* 🚚 Order tracking
* ☁️ Cloudinary image management
* 🔎 Advanced product search
* 🏷️ Category and anime filters
* ⭐ Product reviews and ratings
* 📊 Admin analytics dashboard
* 📧 Email notifications
* 📱 Improved mobile experience
* 🚀 Production deployment optimization

---

# 🎯 Learning Outcomes

Through this project, I worked with:

* Full-stack MERN application architecture
* REST API development
* MongoDB database design
* Mongoose models and relationships
* JWT authentication
* Password hashing with bcrypt
* Protected API routes
* React Context API
* Axios API integration
* State management
* Cart and wishlist systems
* Responsive UI development
* Frontend-backend integration
* Git and GitHub workflow

---

### Connect With Me

* 💻 GitHub: https://github.com/Mrshubham21
* 💼 LinkedIn: Add your LinkedIn URL here

---

# ⭐ Show Your Support

If you like this project, consider giving it a ⭐ on GitHub!

---

## 📜 License

This project is developed for educational and portfolio purposes.

```
```
