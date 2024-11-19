const Book = require('../model/book.model.js');

module.exports = getBook = async(req,res)=>{
    try{
        const book = await Book.find();
        res.status(200).json(book);
    }catch(error){
        console.log("Error",error);
        res.status(500).json(error);
    }
}