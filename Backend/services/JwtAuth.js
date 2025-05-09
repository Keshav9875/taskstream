import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET_KEY;
console.log("JWT_SECRET_KEY", SECRET_KEY);

export const generateJWTToken = ({ _id, name, email }) => {
   return jwt.sign({ _id, name, email }, SECRET_KEY, { expiresIn: "1d" });
};

export const verifyJWTToken = (token) => {
   return jwt.verify(token, SECRET_KEY);
};
