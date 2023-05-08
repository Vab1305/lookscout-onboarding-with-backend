import express from 'express';
import { UserSignup,getProds } from '../controller/controller.js';
const router = express.Router();

router.post('/signup',UserSignup);
router.get('/products',getProds);

export default router; 