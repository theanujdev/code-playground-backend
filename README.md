# Code Playground (Backend)

![Code Playground Demo](https://raw.githubusercontent.com/theanujdev/code-playground-frontend/master/img/code-playground.gif)

## Overview

This project provides a real-time cloud-based code sync and editing and website developing platform where you can create any code file. It will provide linting in editor and a basic terminal. Edit HTML, CSS and JS and preview your website in built-in web-renderer.

## Tech Stack

**Client:** React, Typescript, Monoco-editor, Socket.io-client, Xtermjs, React reflex

**Server:** Node, Express, Typescript, Mongoose, Cookie-parser, Socketio

## Features

- Multiple resizable windows
- Featured code editor
- Create, update, delete files
- Realtime cloud sync of code
- Preview webpage
- Built-in terminal with syntax-highlighting
- Flexible and auto resizable components and clean user interface

## Run Locally

- Clone the project

```bash
git clone https://github.com/theanujdev/code-playground-backend
```

- Go to the project directory

```bash
cd code-playground-backend
```

- Install dependencies

```bash
npm install
```

- Create a new file `.env`. Copy all the content from `.env.example` and paste it into `.env`. Change the following environment variables in your `.env` file

  `DB_URL`, `APP_PORT`, `COOKIE_SECRET`, `WEB_URL`

- Start the server

```bash
npm run dev
```

> **Note:** Make sure to run **MongoDB** server in the background.

You need to run [Code Playground Frontend](https://github.com/theanujdev/code-playground-frontend) to use it.

## Optimizations

Code is refactored and project structure is optimized for scalability. Routes, controllers, models, middlewares are all separated. Few utility classes and functions like _debounce_ have also been used.

## Screenshots

![App Screenshot](https://raw.githubusercontent.com/theanujdev/code-playground-frontend/master/img/code-playground.png)

## Feedback

If you have any feedback, please reach out at [@theanujdev](https://twitter.com/theanujdev)

## Authors

- [@theanujdev](https://www.github.com/theanujdev)

## License

[MIT](https://choosealicense.com/licenses/mit/)
