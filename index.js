const express = require('express')
const http_server = express()


const port = 4005
const hostname = "localhost"


http_server.get('/', (req, res) => {
    res.status(200).json({
        message:"server started successfully"
    })
})

http_server.listen(port, hostname, () => {
    console.log(`server started at http://${hostname}:${port}`)
})