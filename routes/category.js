import Express from 'express';
import categoryController from '../controller/category.js'

const router = new Express.Router();


router.get(`/`, categoryController.getAllCategory)

export default router;