import express from "express"

const app = express()
app.use(express.json())


app.get("/news/:id", (req, res) => {
    let currentId = req.params.id;
    res.send("News api Called" + currentId)
})


app.post("/login", (req, res) => {
    console.log(req.query);
    res.send({
        message: "Login Successful",
        // bodyData: req.body,
        queryData: req.query,
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
}); 