-- This SQL file is used to create the initial database schema and seed data for the application.
-- It includes the creation of a users table with some sample data.
-- This file is executed when the database is initialized.
-- Drop the table if it exists

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
