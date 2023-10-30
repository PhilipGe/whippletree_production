const express = require('express')
const app = express()

app.use(express.static('prod'))

app.listen(2000, () => {
    console.log('Server running on port 2000')
})