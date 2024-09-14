const express = require("express")
const users = require("./route/data.json");
const app = express;
const PORT = 8000;

app.use()

// a hybrid server as it provides access to routes and their api's ... this first one renders html upon calling it...
//HTML doc renderer...
app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`)}
    </ul>
    `;
    res.send(html);
})
// REST API points...
app.get("/api/users/:id", (req, res) => {   // :id refers to dynamic path which changes in future...
    const id = req.params.id;
    const user = users.find((user) => user.id === id)
    return res.json(user)
})

app.post("/api/users", (req, res) => {
    return res.json(users)
})
app.patch("/api/users", (req, res) => {
    return res.json(users)
})
app.delete("/api/users", (req, res) => {
    return res.json(users)
})


app.listen(PORT, () => console.log(`server started at Port ${PORT}`))

/*
app
    .route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);    
    })
    .post((req, res) => {return res.json({status: pending})})
    .patch((req, res) => {})
    .delete((req, res) => {})
*/