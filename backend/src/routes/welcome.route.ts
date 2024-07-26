import { Router } from "express";

const welcomeRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Default
 *   description: Operations related to the default routes
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome message
 *     tags: [Default]
 *     responses:
 *       200:
 *         description: Retorna uma mensagem de boas-vindas
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */

welcomeRouter.get("/", (req, res) => {
  res.send("Welcome ProSync Store API");
});

const router = Router();
const BASE_URL = process.env.NODE_BASE_URL || "/api/v1";

router.use(`${BASE_URL}`, welcomeRouter);

export default router;
