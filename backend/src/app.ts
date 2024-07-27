import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import WelcomeRouter from "./routes/welcome.route";
import { config } from "./config/config";
import swaggerOptions from "./docs/swagger-specs";

dotenv.config();

export const app: Express = express();

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app
  .use(express.json())
  .use(cookieParser())
  .use(
    cors({
      origin: config.origins,
      credentials: true,
    })
  )
  .use(WelcomeRouter);
