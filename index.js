const express = require(`express`)
const app = express()
const path = require("path")

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.set("views", app.join(__dirname, "views"))
app.set("view engine", "ejs")


app.listen(8000, () => {
    console.log("Connected to port 8000")
})