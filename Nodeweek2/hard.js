let express = require('express')

let app = express()

let data = require('./employees.json')

const bodyParser = require('body-parser') 

app.use(bodyParser.urlencoded({extended: true}))


app.use(express.json())
app.post('/employees', (req, res) => {
    const employee = {
        name: req.query.name,
        id: data.employees.length + 1,
        salary: req.query.salary,
        jobtitle: req.query.jobtitle,
    }
    data.employees.push(employees)
    res.send(employee)
})
app.get('/employees', (req, res) => {
    if(!data){
        res.status(404).send(`Couldn't find the employees`)
    }
    res.send(data)
})

app.get('/employees/:id', (req, res) => {
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