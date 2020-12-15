var express = require("express"),
  bodyParser = require("body-parser"),
  swaggerJsdoc = require("swagger-jsdoc"),
  swaggerUi = require("swagger-ui-express");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Vamsi Express API with Swagger",
        version: "q.0.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Vamsi0750",
          email: "vamsikrishnanagisetty0750@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000/books",
        },
      ],
    },
    apis: ["./routes/books.js"],
  };
  
  const specs = swaggerJsdoc(options);
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
    );
app.use(bodyParser.json());

app.use("/books", require("./routes/books"));

const PORT = process.env.PORT || 3000;

app.listen(PORT);

console.debug("Server listening on port: " + PORT);