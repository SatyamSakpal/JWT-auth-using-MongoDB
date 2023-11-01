# JWT-auth-using-MongoDB
This project demonstrates the implementation of JWT (JSON Web Tokens) authentication using MongoDB as the database.

## Overview

This project provides a simple demonstration of how to implement user authentication using JSON Web Tokens for securing endpoints. It uses MongoDB to store user credentials and validate authentication requests.

## Setup

### Prerequisites

Make sure you have the following installed:
- Node.js
- MongoDB

### Installation

1. Clone this repository.

2. Install the dependencies:

   ```bash
   npm install
3. Create a .env file in the project root and initialize the following environment variables:

   ```text
    DBURL=your_mongodb_connection_url
    SECRECT_ACCESS_KEY=your_random_secret_string
   ```
   
    Replace **your_mongodb_connection_url** with the URL to connect to your MongoDB instance and **your_random_secret_string** with a random secret key that you generate.

## Issues
If you encounter any problems or have questions, please open an [issue](https://github.com/SatyamSakpal/JWT-auth-using-MongoDB/issues).
