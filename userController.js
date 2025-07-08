const AutherModel = require("../models/autherModel");
const BookModel = require("../models/bookModel");

const userSave = async (req, res) => {
  const { authername, address, bookname, price } = req.body;

  const Auther = await AutherModel.create({
    authername: authername,
    address: address,
  });

 const Book = await BookModel.create({
    bookname:bookname,
    price:price,
    autherid:Auther._id
 })

 await AutherModel.findByIdAndUpdate(Auther._id, {$push: { books: Book._id}})
 res.send("okya")
};

const userDisplay = async (req, res) => {
   const Auther = await AutherModel.find().populate("books");
   console.log(Auther);
   res.send(Auther)
   
};
const userDisplay2 = async (req, res) => {
   const Book = await BookModel.find().populate("autherid");
   console.log(Book);
   res.send(Book)
   
};
const addBook =async (req, res)=>{
   const {authid, booktitle, bookprice } = req.body;
   const Book = await BookModel.create({
       bookname:booktitle,
       price:bookprice,
       autherid:authid
   })
  
   await AutherModel.findByIdAndUpdate(authid, {$push:{books:Book._id}})
   res.send("new book added")

}

module.exports = {
  userSave,
  userDisplay,
  userDisplay2,
  addBook
};
