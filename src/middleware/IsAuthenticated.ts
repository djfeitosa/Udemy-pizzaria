import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
    sub: string;
}

export function IsAuthenticated(req: Request, res: Response, next: NextFunction) {
    //Receber o TOKEN
    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        //Validar o Token
        const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

        //recuperar o id do token e colocar dentro de uma variável dentro do req
        //verificar a pasta ./src/@type/Express
        req.user_id = sub;

        return next();
    } catch (error) {
        return res.status(401).end();
    }
}
