const { response } = require("express")
const express = require("express")
const expressHandlebars = require("express-handlebars")

const products = [{
    name: "book",
    description: "A very good book"
}, {
    name: "book",
    description: "A very good book"
}, {
    name: "book",
    description: "A very good book"
}]

const app = express()

app.use(express.static("views"))

app.engine("hbs", expressHandlebars({
    defaultLayout: "default.hbs"
}))

app.get("/index", function(request, response){
    response.sendFile("home.hbs");
})

app.get("/products", function (request, response){
    const model = {
        products
    }
    response.render("products.hbs", model);
})

app.get("/products/:id", function(request, response){
    const id = request.params.id
    const product = products.find((p) => p.id == id)
    const model = {
        product
    }
    response.render("product.hbs", model);
})

app.listen(8080)