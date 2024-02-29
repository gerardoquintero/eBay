const express = require(`express`)
const app = express()
const path = require("path")

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

posts = [
    {
        'username': 'Alice',
        'title': 'Guitar for Sale',
        'price': 150,
        'contactInfo': 'alice@yahoo.com',
        'description': 'Selling my acoustic guitar, in excellent condition.'
    },
    {
        'username': 'Bob',
        'title': 'Job Opportunity',
        'price': 1000,
        'contactInfo': 'bob@gmail.com',
        'description': 'Looking for a graphic designer for a freelance project.'
    },
    {
        'username': 'Eva',
        'title': 'Apartment for Rent',
        'price': 800,
        'contactInfo': 'eva@hotmail.com',
        'description': 'Spacious one-bedroom apartment for rent with a great view.'
    },
    {
        'username': 'Charlie',
        'title': 'Computer Desk',
        'price': 50,
        'contactInfo': 'charlie@gmail.com',
        'description': 'Selling a sturdy computer desk, suitable for home office use.'
    },
    {
        'username': 'Grace',
        'title': 'Language Tutor',
        'price': 25,
        'contactInfo': 'grace@gmail.com',
        'description': 'Experienced language tutor offering lessons in English and Spanish.'
    },
    {
        'username': 'Daniel',
        'title': 'Bookshelf for Sale',
        'price': 80,
        'contactInfo': 'daniel@yahoo.com',
        'description': 'Wooden bookshelf in good condition, perfect for organizing your books.'
    }
]


app.get('/', (req, res) => {
    console.log("You're Home")
    res.render("home")
})

app.listen(3000, () => {
    console.log("Connected to port 3000")
})