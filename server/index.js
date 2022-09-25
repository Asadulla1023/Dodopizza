const express = require('express')
const cors = require('cors')

const server = express()
const PORT = 8002

server.use(cors())
server.use(express.json())

server.post('/', (req, res) => {
	console.log(req.body)
})

server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
