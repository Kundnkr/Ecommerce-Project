let express = require('express');
let mongoose = require('mongoose');
let path = require('path');
let ejs = require('ejs');
let app = express();
app.set('view engine', 'ejs');
let userSchema = require('./userSchema');
let user = mongoose.model('Product', userSchema);
let currentPath = path.join(__dirname, 'views');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', async(req,res)=>{
    let datas = await user.find();
    res.render('index',{data:datas});
})

app.get('/product',(req,res)=>{
    res.sendFile(currentPath + '/addproduct.html');
})

app.get('/view/:id', async(req,res)=>{
    let result = await user.findOne({ _id: req.params.id });
    res.render('product', { element: result })
})

app.post('/add-product', async(req,res)=>{
    let details = req.body;
    let data = await user(details);
    let result = await data.save();
    console.log(result.cat, "product added successfully");
    res.redirect('/product');
})

app.listen('3000', ()=>{
    console.log("Server is running on " + "3000");
})