const express = require('express')

const app =  express()
const authRoutes = require('./routes/auth')
//



//Route middleware

app.use(authRoutes)


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`API is running on port ${port}`)
})