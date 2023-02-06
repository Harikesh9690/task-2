const express= require('express')
const route=express.Router()
const {customer, getData, deleteCustmer} = require('../controllers/customerController')

 route.post('/CreateCoustmer', customer)
 route.get('/CoustmerList', getData)
 route.delete('/CreateCoustmer/:custmerID', customer)

route.post('/createCard', )

module.exports=route;