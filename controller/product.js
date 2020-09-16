import  connection from '../models/connection.js';

const getAllProduct = (req, res,next) => {
    let query = `SELECT * FROM product`;

    connection.query(query, (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        res.status(200).json(results);
      });
}

const getProductByName = (req, res, next) =>{  
  let query = `SELECT * FROM product WHERE name like ? ` ;
  let nameToSearch = '%'.concat(req.query.name.concat('%'));
  connection.query(query,[nameToSearch], (error, results, fields) => {
    if (error) {
      return console.error(error.message);
    }
    res.status(200).json(results);
  });
}
const getProductByCategory = (req, res, next) => {
    let category = req.params.category;
    let query = `SELECT product.name
                FROM product
                INNER JOIN category ON (product.category = category.id)
                WHERE category.id = ?`;
    connection.query(query,[category], (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        res.status(200).json(results);
      });
}

export default {
    getAllProduct,
    getProductByCategory,
    getProductByName,
};