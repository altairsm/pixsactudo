# My Node.js App

This project is a Node.js application designed to manage a hierarchical system of owners, clients, users, and diarists. It utilizes Express for the server framework and PostgreSQL for the database.

## Project Structure

```
my-nodejs-app
├── src
│   ├── controllers          # Contains controllers for handling requests
│   ├── models               # Contains models for database schemas
│   ├── routes               # Contains route definitions
│   ├── services             # Contains business logic
│   ├── app.ts               # Entry point of the application
│   └── database.ts          # Database connection logic
├── package.json             # NPM configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Features

- **Owner Management**: Create and manage the owner's account.
- **Client Management**: Add and manage client accounts.
- **User Management**: Add and manage user accounts for clients.
- **Diarist Management**: Add and manage diarist accounts for users.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd my-nodejs-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Configure the database**:
   Update the database connection settings in `src/database.ts` to match your PostgreSQL configuration.

4. **Run the application**:
   ```
   npm start
   ```

## Usage

- Access the application through the designated endpoint (e.g., `http://localhost:3000`).
- Follow the prompts to create accounts for owners, clients, users, and diarists.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.