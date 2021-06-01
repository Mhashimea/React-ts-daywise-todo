
import { NextFunction } from 'express';
import jwt from "jsonwebtoken";
import { JWTSECERET } from './constants';
import { errorResponse } from './response';

export default async (req, res, next: NextFunction) => {
  console.log(req)
  let token = req.headers["x-acces-token"] || req.headers["authorization"];
  console.log(token)
  if (token) {
    jwt.verify(token, JWTSECERET, (err, decoded) => {
      if (err) {
        res.setHeader("Content-Type", "text/plain");
        errorResponse(res, "Token is not valid")
      } else {
        req.decoded = decoded;
        next()
      }
    });
  } else errorResponse(res, "Auth token is not supplied")
}