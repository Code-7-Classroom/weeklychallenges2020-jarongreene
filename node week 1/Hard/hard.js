let express = require('express')

let app = express()

let data = require('./Employees.json')

app.get('test', function(req, res){
    res.send("hello world")
})

app.get('/Employees', (req, res) => {
    if(!data){
        res.status(404).send(`Couldn't find the employees`)
    }
    res.send(data)
})

app.get('/Employees/:id', (req, res) => {
    const sData = data.employees.find(function(employees){
        return parseInt(req.params.id) === employees.id
    })
    if(!sData){
        res.status(404).send(`Couldn't find the employee id`)
    }
    res.send(sData)
});
const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`server running on port ${port}`)
})