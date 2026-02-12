~ Blog Application (Node.js + Express)

A full-stack Blog Application built using Node.js, Express, MongoDB, EJS, Passport.js, and JWT Authentication.
This project allows users to register, login, create posts, edit posts, and delete posts securely.  


~ Features

1. User Registration & Login
2. Authentication using Passport.js
3. JWT Token Support
4. Password Hashing with bcrypt
5. Create Post
6. Edit Post
7. Delete Post
8. Protected Routes (Only logged-in users can create/edit/delete)
9. EJS Templating
10. MongoDB Database Integration


~ Technologies Used

1. Node.js
2. Express.js
3. MongoDB & Mongoose
4. EJS
5. Passport.js
6. JWT (JSON Web Token)
7. Bcrypt
8. Cookie-parser


~ Authentication Flow

1. User registers with username & password
2. Password is hashed using bcrypt
3. User logs in
4. Passport authenticates user
5. JWT token is generated
6. Protected routes require authentication


~ Installation & Setup
1. Clone the Repository  
git clone https://github.com/nure10/Blog-App.git   
cd Blog-App

2. Install Dependencies  
npm install

3. Setup Environment Variables  
Create a .env file:   
PORT=3000   
MONGO_URL=your_mongodb_connection_string   
SECRET_KEY=your_secret_key

4. Run the Application  
npm start

5. Open in browser:  
http://localhost:3000


~ What I Have Practiced In This Project

1. Backend architecture design
2. Authentication & Authorization
3. RESTful routing
4. CRUD operations
5. Secure password handling
6. Working with MongoDB
7. MVC structure


~ Author

Nure Jannat Borsha   
B.Sc in CSE  
Backend & Web Development Enthusiast





