import { Router } from "express";

const ROUTER: Router = Router();

ROUTER.get("/", (_, res) => res.send("Welcome to ProSync Store"));

export default ROUTER;
