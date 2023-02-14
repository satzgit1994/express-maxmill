const http = require('http')

const express = require('express')

const adminRoute = require('./routes/admin') //importing codes of admin routes inside our main file by providing the path
const shopRoute = require('./routes/shop')

const app = express()

app.use('/admin',adminRoute) // using codes of admin route from the app file
app.use(shopRoute)

app.use((req,res,next) => {
    res.status(404).send('<h1>Page Not Found</h1>')
})





const server = http.createServer(app)

server.listen(3000, () => {
    console.log('Server is listening on port 3000')
})