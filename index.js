const express = require(`express`)
const app = express()
const path = require("path")

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.set("views", path.join(__dirname, "/views"))
app.set("view engine", "ejs")

app.get('/', (req, res) => {
    console.log("You're Home")
})

app.listen(3000, () => {
    console.log("Connected to port 3000")
})