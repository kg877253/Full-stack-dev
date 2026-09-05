const express = require('express');
const users = require('./MOCK_DATA.json')
const app = express()
const port = 3000

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
    return res.json(users)
})

app.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id) //Dynamically get the id from the URL
    const user = users.find(user => user.id === id)

    return res.json(user)
}).patch((req, res) => {
    //Edit user
    return res.json({ status: 'pending update' })
}).delete((req, res) => {
    //Delete user
    return res.json({ status: 'pending deletion' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})