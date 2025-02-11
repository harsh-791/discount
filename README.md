# discount

This is a Full Stack E-Commerce Website built with **Next.js 14**, **Tailwind CSS**, **Firebase**, **Stripe**, and **Algolia**.

## Features

- User authentication with Firebase
- Product browsing and searching with Algolia
- Shopping cart functionality
- Secure payment processing with Stripe
- Admin panel for managing products, orders, and users

## Technologies Used

- **Frontend**: Next.js 14, Tailwind CSS
- **Backend**: Firebase (Firestore, Authentication)
- **Payment**: Stripe
- **Search**: Algolia

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Create a `.env.local` file in the root directory and add the following:

   ```plaintext
   NEXT_PUBLIC_FIREBASE_API_KEY=""
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=""
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=""
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=""
   NEXT_PUBLIC_FIREBASE_APP_ID=""
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=""
   
   NEXT_PUBLIC_DOMAIN=""
   
   NEXT_PUBLIC_ALGOLIA_APP_ID=""
   NEXT_PUBLIC_ALGOLIA_APP_KEY=""
   
   NEXT_PUBLIC_FIREBASE_SERVICE_ACCOUNT_KEYS='{}'
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Demo

You can explore the demo of the e-commerce website at [this link](https://discount-store.vercel.app/). 

To access the Admin Panel, use the following credentials:

- **Email**: admin@gmail.com
- **Password**: demoUser

(Note: This demo admin account has read and write permissions disabled for security purposes.)
