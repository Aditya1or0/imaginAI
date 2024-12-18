# ImaginAI - Full Stack Text-to-Image Generator AI SaaS App

Welcome to **ImaginAI**, a cutting-edge Full Stack Text-to-Image Generator AI SaaS Application built with **React JS** and the **MERN** stack (MongoDB, Express, React, Node.js). This app allows users to generate images by entering text prompts, utilizing a powerful **Clipdrop API** for image creation. Additionally, users can purchase credits to generate more images through an integrated **online payment gateway**.

---

## Features

- **User Authentication**: Sign up and log in with MongoDB user authentication.
- **Text-to-Image Generation**: Generate AI-powered images by inputting descriptive text.
- **Credit System**: Users have a credit system to generate images. Credits can be topped up via an integrated online payment gateway.
- **Responsive UI**: Built with **React JS** and styled using **Tailwind CSS** for a modern and responsive design.
- **Clipdrop API Integration**: AI-based image generation through Clipdrop's image generation API.
- **MERN Stack**: Full-stack app built using **MongoDB**, **Express**, **React**, and **Node.js**.

---

## Tech Stack

- **Frontend**: 
  - React.js
  - Tailwind CSS
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB
- **AI Integration**:
  - Clipdrop API
- **Payment Gateway**:
  - Integrated online payment solution (Razorpay) for credit purchase.

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Aditya1or0/imaginAI.git
cd imaginAI
```

### 2. Backend Setup (Node.js & Express)

#### Install Dependencies
Navigate to the `server` directory and install the necessary dependencies:

```bash
cd server
npm install
```

#### Environment Variables
Create a `.env` file in the backend directory and add the following variables:

```plaintext
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CLIPDROP_API_KEY=your_clipdrop_api_key
PAYMENT_API_KEY=your_payment_gateway_api_key
```

#### Start the Server
Once dependencies are installed and environment variables are set, you can start the backend server:

```bash
npm start
```

### 3. Frontend Setup (React.js & Tailwind CSS)

#### Install Dependencies
Navigate to the `client` directory and install the necessary dependencies:

```bash
cd client
npm install
```

#### Start the React Development Server
To start the frontend development server, run the following command:

```bash
npm start
```

This will launch the React application at `http://localhost:4000`.

---

## Usage

### 1. User Authentication
- **Sign Up**: Create a new user account with email and password.
- **Login**: Login to your account to access the full features of the app.
  
### 2. Image Generation
- Enter a detailed description of the image you want to generate.
- Use your available credits to generate the image.
  
### 3. Credit System
- Users receive credits upon sign-up or can purchase more credits via the integrated payment gateway.
- You can top up credits to generate additional images.

### 4. Payment Gateway
- A fully integrated Razorpay payment system allows users to purchase more credits.
- Users can securely top up their credits using Razorpay's online payment gateway.

---

## API Endpoints

### 1. Authentication

- **POST** `/api/user/register`: Create a new user account.
- **POST** `/api/user/login`: Login to an existing account.

### 2. Image Generation

- **POST** `/api/image/generate`: Generate an image by providing a text description.
  
### 3. Credit Management

- **GET** `/api/credits`: Check current credit balance.
- **POST** `/api/credits/purchase`: Purchase additional credits via the payment gateway.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contributing

Feel free to fork this project and submit pull requests. Contributions are welcome!

---

## Contact

For any inquiries or support, you can reach out to **Aditya1or0** on GitHub.

---

Enjoy using **ImaginAI** and explore the limitless possibilities of generating AI-powered images!
