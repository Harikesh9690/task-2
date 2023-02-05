const customerModel = require('../models/customerModel')


const customer = async function (req, res) {
    try {


        let data = req.body

        let customerData = await customerModel.create(data)

        return res.status(201).send({ status: true, data: customerData })
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}


const getData = async function (req, res) {
    try {

        let customerData = await customerModel.find({status: 'ACTIVE'})

        return res.status(200).send({ status: true, data: customerData })
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}

const deleteCustmer = async function(req, res){
        try {
            let CoustmerID = req.params
            let customerData = await customerModel.findByIdAndUpdate({_id: CoustmerID},{$set: {status: "INACTIVE"}})
            return res.status(200).send({ status: true, msg: "deleted succesfully"})
        } catch (err) {
            return res.status(500).send({ status: false, msg: err.message })
        }
}


module.exports = {customer, getData, deleteCustmer}