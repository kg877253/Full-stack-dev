const express = require('express');
const fs = require('fs')
const users = require('./MOCK_DATA.json')
const app = express()
const port = 3000

//Middleware

app.use(express.urlencoded({ extended: false })) //Parse URL-encoded bodies (as sent by HTML forms)

//ROUTES
app.get('/users', (req, res) => {
    const html = `
    <h1> Users </h1>
    <ul>
        ${users.map(user => { return `<li>${user.first_name}</li>` }).join('')}
    </ul>`
    return res.send(html)
})

//REST API
app.get('/api/users', (req, res) => {

    res.setHeader('X-myname', 'Kartik') //Add a custom header to the response
    //Always add X in front of the custom header name
    console.log(req.headers)
    return res.json(users)
})

app.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id) //Dynamically get the id from the URL
    const user = users.find(user => user.id === id)

    return res.json(user)
}).patch( ( req , res ) => {
    //Edit user
    const id = Number(req.params.id)
    if (!users) {
        return res.json({ message: "not found" })
    }
    else {
        const id = Number(req.params.id)
        const userindex = users.findIndex(user => user.id === id)

        if (userindex === -1) {
            return res.json({ message: "not found" })}
        else {
            users[userindex] = { ...users[userindex], ...req.body }
            fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users))
            return res.json({ status: 'successfully updated', id: users[userindex].id })
        }
    }
}).delete((req, res) => {
    //Delete user
    const id = Number(req.params.id)
    const userindex = users.findIndex(user => user.id === id)
    if (userindex === -1) {
        return res.json({ message: "not found" })
    }
    else {
        users.splice(userindex, 1)
        fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users))
        return res.json({ status: 'successfully deleted', id: id })
    }
})

app.post('/api/users', (req, res) => {
    //Create a new user
    const bd = req.body
    users.push({ id: users.length + 1, ...bd })
    fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users))
    
    return res.json({ status: 'successfully created', id: users.length })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})