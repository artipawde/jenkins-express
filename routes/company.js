
const express = require('express')
const db = require('./db')
const utils = require('../utils')

const router = express.Router()

router.get('/',(request,response)=>{
    const connection = db.connect()
    const statement = `select id, title, email, phone from company`
    connection.query(statement, (error, data) => {
        connection.end();
        response.send(utils.createResult(error,data))
    });
})


router.post('/',(request,response)=>{
    const {name,address,email} = request.body
    const connection = db.connect()
    const statement = `insert into company (title,email, phone) values ('${title}','${email}',${phone})`
    connection.query(statement, (error, data) => {
        connection.end();
        response.send(utils.createResult(error, data))
    });
});



router.put('/:id',(request,response)=>{
    const id = request.params.id
    const {name,address,email} = request.body
    const connection = db.connect()
    const statement = `update company set title='${title}', email='${email}', phone=${phone} where id = ${id}`
    connection.query(statement, (error, data) => {
        connection.end();
        response.send(utils.createResult(error, data))
    });
});


router.put('/:id',(request,response)=>{
    const id = request.params.id
    const {name,address,email} = request.body
    const connection = db.connect()
    const statement = `delete from company where id = ${id}`
    connection.query(statement, (error, data) => {
        connection.end();
        response.send(utils.createResult(error, data))
    });
});





module.exports = router