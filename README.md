# Express + TypeScript + GraphQL Example

This is an example project that demonstrates how to build a GraphQL server using Express and TypeScript.

## Structure

```
project/
  ├── src/
  │   ├── controllers/
  │   │   └── graphql.controller.ts
  │   ├── models/
  │   │   └── user.ts
  │   ├── resolvers/
  │   │   └── user.resolver.ts
  │   ├── schemas/
  │   │   └── user.graphql
  │   ├── app.ts
  │   └── server.ts
  ├── package.json
  └── tsconfig.json
```

The project structure is organized as follows:

- `src/controllers/`: Contains the GraphQL controller responsible for handling incoming GraphQL requests.
- `src/models/`: Defines the data models used in the application. In this example, there is a `user.ts` file defining the User model.
- `src/resolvers/`: Contains the GraphQL resolvers that implement the server's API operations. In this example, there is a `user.resolver.ts` file that defines the UserResolver.
- `src/schemas/`: Contains the GraphQL schema definition files. In this example, there is a `user.graphql` file defining the User schema.
- `src/app.ts`: Configures the Express application and sets up the GraphQL middleware.
- `src/server.ts`: Starts the Express server and listens for incoming requests.
- `package.json`: Contains project dependencies and scripts for building and running the application.
- `tsconfig.json`: TypeScript configuration file.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository and navigate to the project directory.
2. Run `npm install` to install the project dependencies.
3. Run `npm run dev` to start the development server with automatic TypeScript compilation.
4. The server will be running at `http://localhost:3000`.

## Usage

Once the server is running, you can send GraphQL queries using tools like Postman or GraphQL clients.

To test the example, you can use the following query:

```graphql
query {
  users {
    id
    name
    email
  }
}
```

This query fetches a list of users and returns their `id`, `name`, and `email` fields.

Make a POST request to `http://localhost:3000/graphql` with the above query in the request body to execute the query and get the results.

Feel free to modify the code and experiment with additional queries, mutations, or schema definitions to fit your needs.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

That's it! You now have an Express + TypeScript + GraphQL example project up and running. Happy coding!
