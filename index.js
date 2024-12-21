const Tasks = [
    {
        id: 1,
        tasks: "Sona Nahi Hai"
    },
    {
        id: 2,
        tasks: "Jagna Hai"
    },
    {
        id: 3,
        tasks: "Concept Samjna hai"
    },
]

import express from "express";
const app = express();
const PORT = 4000

app.get('/', (req, res) => {
    console.log(req)
    res.status(200).send(Tasks)
})

app.post('/', (req, res) => {
    console.log(req)
    res.send('post request is executed')
})

app.put('/', (req, res) => {
    console.log(req)
    res.send('put request is executed')
})

app.delete('/', (req, res) => {
    console.log(req)
    res.send('delete request is executed')
})

app.listen(PORT, () => console.log(`Server ${PORT}`))