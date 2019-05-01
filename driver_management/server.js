const express=require('express')
const app= express()
const Company = require('./models/company')




const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/company', {useNewUrlParser: true})
.then(()=>{
    console.log("mongodb is runing")
}
)
app.use(express.urlencoded({ extended: false}))
app.set('view engine', 'ejs');



//COMPANY NEW 
app.get('/company/new',(req,res)=>{

    res.render('new')
})
//COMPANY INDEX
app.get('/company',(req,res)=>{
    res.send("Run at Port 5003")
})

app.post('/company',(req, res)=>{
   let data = {
        name:  req.body.name,
        logo: req.body.logo,
        address: req.body.address,
        city: req.body.city,
        telephone: req.body.telephone,
        driver: {
            name: req.body.drivername,
            age: req.body.driverage,
            image: req.body.driverimage
        },
        car: {
            name:  req.body.carname,
            model: req.body.carmodel,
            year: req.body.caryear, 
            image: req.body.carimage
        }
      }

      let company = new Company(data)
      company.save()
      .then(()=>{
          res.redirect('./company')
      })
})




app.listen(5003,()=>{
    console.log("Run at Port 5003")

})