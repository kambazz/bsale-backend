import Express from 'express';
import pkg from 'body-parser';
import productRoutes from './routes/product.js'
import categoryRoutes from './routes/category.js';

let app = Express();

const { urlencoded, json } = pkg;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });


app.use(urlencoded({ extended: true , defaultCharset: 'utf-8' }));
app.use(json());

app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);
export default app;