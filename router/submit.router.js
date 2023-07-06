const express = require('express')

const submitRouter = express.Router()

submitRouter.post('/submit', (req, res) => {
    const data = req.body;
    res.send(
        `<h1>Name - ${req.body.name}</h1>
         <br>
         <h1>Age - ${req.body.age}</h1>
        `
    )
})

module.exports = submitRouter;