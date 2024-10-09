# Tick Pro - Luxury Wristwatch Store

Tick Pro is an e-commerce platform where users can browse, view details, and purchase luxury wristwatches. The platform also includes a shopping cart, shipping, and payment integration with Paystack. This project is built using React and Vite, with Firebase for backend data and GitHub Pages for deployment.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Browse Products**: View a list of luxury wristwatches, along with product images, ratings, and descriptions.
- **Product Detail Page**: Detailed view of each product, including a product image gallery similar to the Chrono24 site.
- **Shopping Cart**: Users can add products to the cart, view, update quantities, and remove items.
- **Shipment Form**: Users fill out shipping details, select a shipping option, and see a dynamic order summary.
- **Paystack Integration**: Payments are processed securely via Paystack.
- **Firebase Integration**: All product and cart data is managed through Firebase.
- **Responsive Design**: Optimized for both desktop and mobile screens.

## Installation

### Prerequisites

- Node.js (v16.x or higher)
- npm or yarn
- Git
- Firebase Account (for Firebase integration)
- Paystack Account (for payment integration)

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Emmanuelchisom89/tick-pro.git
   ```

## Technologies Used

- Frontend: React, Vite
- Routing: React Router
- Icons: FontAwesome, React Icons
- State Management: React Context API, useReducer
- Backend: Firebase Firestore (for product and cart data)
- Authentication: Firebase (Optional if user login is implemented)
- Payments: Paystack API Integration
- Deployment: GitHub Pages
- Version Control: Git and GitHub

## Deployment

### Firebase Setup

Make sure you have set up your Firebase project and replaced the Firebase config in firebaseConfig.js with your Firebase project credentials.

### Paystack Setup

You'll need a Paystack account and API keys. Replace the test keys with your own Paystack keys in the appropriate files when integrating payments.

### GitHub Pages

The project is configured for deployment on GitHub Pages. After running npm run deploy, visit your repository's Settings > Pages to configure the GitHub Pages branch to gh-pages.
