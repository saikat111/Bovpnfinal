
# Project Name

Bovpn

## Table of Contents

- [Project Overview](#project-overview)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview


---

## Technologies

- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **Passport.js**: Authentication middleware for Node.js
- **Google OAuth 2.0**: Authentication service provided by Google
- **JWT (JSON Web Tokens)**: For secure API authentication
- **MongoDB**: NoSQL database for storing user data
- **Swagger UI**: For API documentation

---

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-name/your-project-name.git
   cd your-project-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. Run the application:
   ```bash
   npm start
   ```

5. The app will be running on `http://localhost:5000`.

---

## Usage

Once the application is running:

- You can register a user by sending a POST request to `/users/register`.
- You can log in with Google by navigating to `/users/google` and authorizing via Google OAuth.
- After successful login, the user is redirected to `/users/google/callback`.
- You can fetch user data by sending a GET request to `/users/user` with a valid JWT in the `Authorization` header.

---

## API Documentation

You can view the API documentation in Swagger UI at the following URL:
`http://localhost:5000/api-docs`.

The Swagger documentation includes all available routes, their parameters, and the expected responses.

---

## Routes

### 1. **POST /users/register**

- **Description**: Registers a new user.
- **Body**:
  ```json
  {
    "username": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- **Response**:
  ```json
  {
    "user": {
      "username": "John Doe",
      "email": "john@example.com",
      "subscriptionStatus": "free"
    }
  }
  ```

### 2. **GET /users/google**

- **Description**: Initiates the Google OAuth login flow.
- **Response**: Redirects to Google OAuth.

### 3. **GET /users/google/callback**

- **Description**: Handles the Google OAuth callback.
- **Response**:
  ```json
  {
    "user": {
      "username": "John Doe",
      "email": "john@example.com",
      "subscriptionStatus": "free"
    },
    "token": "your_jwt_token"
  }
  ```

### 4. **GET /users/user**

- **Description**: Fetches user data (requires a valid JWT token).
- **Headers**:
  ```json
  {
    "Authorization": "Bearer your_jwt_token"
  }
  ```

- **Response**:
  ```json
  {
    "user": {
      "username": "John Doe",
      "email": "john@example.com",
      "subscriptionStatus": "free"
    }
  }
  ```

---

## Contributing

Contributions are welcome! If you find any bugs or want to add new features, feel free to open an issue or submit a pull request.

### Steps to contribute:

1. Fork the repository
2. Create a new branch for your feature/bugfix
3. Make your changes
4. Commit and push your changes
5. Open a pull request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

