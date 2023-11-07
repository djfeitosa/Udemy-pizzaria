import express, { Request, Response, NextFunction } from "express";
import "express-async-errors"; //tem que ficar aqui na segunda linha (yarn add express-async-errors)
import cors from "cors"; //yarn add cors depois yarn add @types/cors -D

import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);
app.use(cors());

//Aqui fica o middleware global para tratamento de erro
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    //se for uma instancia de um console.error;
    return res.status(400).json({
      error: err.message,
    });
  }
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(3333, () => console.log("Servidor Online!!!"));
