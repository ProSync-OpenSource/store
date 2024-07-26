import path from "path";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ProSync API",
      description: "Descrição detalhada da API",
      version: "1.0.0",
      contact: {
        name: "ProSync Dev",
        email: "prosync@gmail.com",
      },
    },
  },
  tags: [
    {
      name: "Default",
      description: "Operations related to the default routes",
    },
  ],
  apis: [path.join(__dirname, "..", "routes", "*.ts")],
};

export default swaggerOptions;
