import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import dotenv from "../dotenv";

class AdminController {
    static async adminLogin(req: Request, res: Response) {
        try {
            const { username, password } = req.body;
            if (username !== dotenv.ADMIN_USERNAME || password !== dotenv.ADMIN_PASSWORD) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }
            return res.status(200).json({ 
                message: 'Login successful',
                data: {
                    token: await jwt.sign({ username, role: 'admin' }, dotenv.JWT_SECRET),
                }
             });
        } catch (error) {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default AdminController;