const express = require('express')
const app = express()
const port = 5000


//Cors Command
var cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!as')
})

// Declare a list of users
const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01788888888' },
    { id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01788888888' },
]

// Send the array of user to response
//Query search result ( /users?search=mita)
app.get('/users', (req, res) => {
    const search = req.query.search
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }


})




// Send individual Id from params
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
})

//App Method // to Post or add data from Client End
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the Wall', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


//Declare Sub Directory and send response to the directory
app.get('/fruits', (req, res) => {
    res.send('All types of Fruits Available')
})

app.get('/fruits/mangoes', (req, res) => {
    res.send('Bahari Mangoes')
})

app.get('/fruits/mangoes/fazlis', (req, res) => {
    res.send('Kacha Paka Tok Jhal Fazli Available')
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})