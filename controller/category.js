import  connection from '../models/connection.js';

const getAllCategory = (req, res,next) => {
    let query = `SELECT * FROM category`;

    connection.query(query, (error, results, fields) => {
        if (error) {
          return console.error(error.message);
        }
        res.status(200).json(results);
      });
}

export default {
    getAllCategory,
};