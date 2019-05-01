const mongoose = require('mongoose')
var Schema = mongoose.Schema;

  var companySchema = new Schema({
    name:  String,
    logo: String,
    address: String,
    city: String,
    telephone: String,
    
    driver: {
        name:  String,
        age: String,
        image: String
    },
    car: {
        name:  String,
        model: String,
        year: String, 
        image: String
    }
  },{timestamps: true});

  const Company = mongoose.model('Company', companySchema)
module.exports = Company;