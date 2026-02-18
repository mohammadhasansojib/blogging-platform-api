# Blogging Platform API

This is a simple crud API build using Typescript, Node JS, Express JS and MongoDB Database. Here does not have any auth feature.

## Contents

[How to run](#how-to-run)

[API endpoints](#api-endpoints)

[Project Structure](#project-structure)

[Tech Stack](#tech-stack)

## How to run

Go to terminal and run:

```
git clone https://github.com/mohammadhasansojib/blogging-platform-api.git
```

Then go to the the folder by running:

```
cd blogging-platform-api
```

install dependencies:

```
npm install
```

and run the following command to run the server:

```
npm start
```

## API endpoints

- get all the posts - GET /api/posts
- get posts by filtering using specific keyword search - GET /api/posts?term=search_text
- get a single post - GET /api/posts/:id
- create a post - POST /api/posts
    - content to pass in body

      ```TS
      {
          title: {
              type: String,
              required: true
          },
          content: {
              type: String,
              required: true
          },
          category: {
              type: String,
              enum: ["Technology", "Sport", "Politics"],
              required: true
          },
          tags: {
              type: String,
              enum: ["Tech", "Programming", "Sport", "Politics"],
              required: true
          },
      }
      ```
- update a post - PUT /api/posts/:id
    - any one field or multiple field can be passed to update
- delete a post - DELETE /api/posts/:id

## Project Structure

```
blogging-platform-api/
    ├── src/
    │   ├── controllers/
    │   │   └── controllers.ts
    │   ├── db/
    │   │   └── database.ts
    │   ├── routes/
    │   │   └── routes.ts
    │   └── server.ts
    ├── .env
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    ├── Readme.md
    └── tsconfig.json

```

## Tech Stack

- Typescript
- Node JS
- Express JS
- MongoDB