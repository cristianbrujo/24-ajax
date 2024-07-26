const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/suma', (req, res) => {
    var sumando1 = Number(req.query.sumando1)
    var sumando2 = Number(req.query.sumando2)
    var suma = sumando1 + sumando2
    var sumaString = suma.toString()

    console.log(`Sumando ${sumando1} + ${sumando2} = ${sumaString}`)

    res.send(`--> ${sumaString} <--`)
})

app.listen(port, () => {
    console.log(`Chuflando cosikas en http://localhost:${port}`)
})

