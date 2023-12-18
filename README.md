# Ballast Lane Test Repository
# Francisco Escalante
This repository contains the code for the Ballast Lane Test, which is divided into two main parts:

- A backend application built with Laravel
- A frontend application built with React

The project also utilizes Docker for managing a Mysql database and a container for the Laravel app.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Clone the Repository](#clone-the-repository)
- [Environment Setup](#environment-setup)
- [Run PostgreSQL and MeiliSearch with Docker](#run-postgresql-and-meilisearch-with-docker)
- [Running the Laravel application](#running-the-laravel-application)
- [Running the React Application](#running-the-react-application)

## Prerequisites

- Node.js (v18.x or later)
- Docker (v24.0.6 or later)
- NPM package manager

## Getting Started

### Clone the Repository

```bash
git clone git@github.com:fxev90/ballast_challenge.git
cd ballast_challenge
```

### Environment Setup

Copy the `.env.example` file and rename it to `.env`. Update the `.env` file with your actual environment variables.

```bash
cp .env.example .env
```

### Run  Docker to build laravel app container

In the root directory of the repository, run the following command:
```bash
docker-compose build
```

```bash
docker-compose up
```

## Running the laravel Application

### Navigate to the laravel Folder
### Execute from docker

```bash
docker-compose exec laravel_api /bin/bash
```

```bash
cd library_api
```

### Environment Setup for Laravel

Copy the `.env.example` file and rename it to `.env`. Update the `.env` file with your actual environment variables.

```bash
cp .env.example .env
```

### Install Dependencies

```bash
compser install
```

### Install Run migrations
```bash
php artisan migrate --seed
```

### To Run some basic test
```bash
php artisan test
```
Add this information to your host file
127.0.0.1      laravel_api.test
### Common location for host file
Windows:

Path: C:\Windows\System32\drivers\etc\hosts
Linux and macOS:

Path: /etc/hosts

```bash
sudo nano /etc/hosts
```
## Running the React Application

### Navigate to the React Folder
### This application run outside the container
Go to the root folder of the repo then 
```bash
cd ../library_client
```

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
npm run dev
```

The application will start running on [http://localhost:3000/]

### DEMO Credentials
Librarian
user=admin@example.com
Password=123456789

Member
user=user@example.com
password=123456789

### Mysql config

is being set from init.sql file
