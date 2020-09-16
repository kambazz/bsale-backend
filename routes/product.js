import Express from 'express';
import productController from '../controller/product.js';

const router = new Express.Router();

router.get(`/prueba`, productController.getAllProduct)
router.get(`/name/:name?`,productController.getProductByName)
router.get(`/category/:category`,productController.getProductByCategory)

export default router;