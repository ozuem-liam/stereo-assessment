<h1 align="center">Stereo Assessment Test Backend</h1>

Set the environment variables:
(You can see all enviroment key at **src/config/config**)

```bash
cp .env.example .env
```

## Feature

-   **MySQL database**: [MySql](https://www.mysql.com/) object data modeling using [Typeorm](https://typeorm.io/)
-   **Environment variables**: using [dotenv](https://github.com/motdotla/dotenv)

## Commands

Running locally with docker:

```bash
docker pull liamoz/stereo-assessment:0.0.1.RELEASE
```

Running locally:

```bash
yarn start:dev
```

building:

```bash
yarn build
```

Running production (build before use):

```bash
yarn start:prod
```

## Enviroment Variable

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
APP_PORT=3000

# Database config

# If you want to use database URI with DB_URI
MYSQL_URI=http://localhost:3306/

# Cloudinary
CLOUDINARY_CLOUD_NAME=somecloud
CLOUDINARY_API_KEY=coudapikey
CLOUDINARY_API_SECRET=cloudapisecret
```

## Project Structure

This project don't have **controllers** and **services** folders because we want to minimalized. If you want them, you can create it

```bash
src\
 |--config\         # Environment variables and configuration related things
 |--middlewares\    # Custom express middlewares
 |--models\         # Exceptions models (data layer)
 |--interceptors\   # Interceptors classes
 |--pipes\          # Pipes classes
 |--translation\    # Translation classes
 |--typeorm\        # Entities
 |--utils\          # Utility classes and functions
 |--main.js        # App entry point
```