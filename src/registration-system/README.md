# Registration System

This project is a registration management system that handles a hierarchy of registrations including master owners, clients, users, and cleaners. It utilizes a PostgreSQL database for data storage and is containerized using Docker.

## Project Structure

```
registration-system
├── src
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── database
│   └── app.ts
├── docker-compose.yml
├── Dockerfile
├── package.json
├── tsconfig.json
└── README.md
```

## Features

- **Master Owner Registration**: Manage master owner registrations with fields for name, email, CPF, CNPJ, company name, PIX key, and master access password.
- **Client Registration**: Manage client registrations with similar fields as master owners.
- **User Registration**: Manage user registrations for clients with fields for name, email, CPF, and access password.
- **Cleaner Registration**: Manage cleaner registrations with fields for name, phone, CPF, and PIX key.

## Setup Instructions

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd registration-system
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Set up the PostgreSQL database**:
   Ensure you have PostgreSQL installed and running. Create a database for the application.

4. **Run migrations**:
   Execute the migration script to create the necessary tables in the database.

5. **Run the application**:
   You can run the application using Docker:
   ```
   docker-compose up
   ```

## Usage

- Access the API endpoints for managing registrations through the defined routes.
- Refer to the individual controller files for specific methods and their usage.

## Docker

This project includes a Docker setup for easy deployment. The `docker-compose.yml` file defines the services required, including the PostgreSQL database.

## License

This project is licensed under the MIT License.