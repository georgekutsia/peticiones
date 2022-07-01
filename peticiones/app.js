const express = require("express")
const app = express()


app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use(express.urlencoded()); 

app.use(express.static(`${__dirname}/public`));

require('./config/hbs.config');

const petition = [] 


app.get('/', (req,res,next) => {
    res.render('list')
})

app.post('/list', (req,res,next) => {
   petition.push(req.body.list)
   console.log(petition)
   res.redirect('/')
})

console.log(petition)
app.get('/list/:index', (req,res,next) =>{
    const what = petition[Number(req.params.index)]
    res.send(what)
})


app.listen(3000, () => console.log("bulala") )