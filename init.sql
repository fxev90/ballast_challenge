-- Create the library database
CREATE DATABASE IF NOT EXISTS library;


-- Create the library_test database
CREATE DATABASE IF NOT EXISTS library_test;

-- Create user
CREATE USER 'dev'@'%' IDENTIFIED BY '1234';

-- Grant all privileges to the user for all databases
GRANT ALL PRIVILEGES ON *.* TO 'dev'@'%';

-- Apply the changes
FLUSH PRIVILEGES;


-- Flush privileges to apply the changes
FLUSH PRIVILEGES;