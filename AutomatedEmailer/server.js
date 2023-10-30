const express = require('express')
const { Emailer } = require('./data_structures/book_an_event')
const app = express()
const cors = require('cors')

Emailer.set_source_email('philip.gessen@gmail.com')
Emailer.set_pass('fqbpmnlwtyuuyzfm')
const emailer = new Emailer('gessen.philip@gmail.com', 'Philip')

app.use(express.json())
app.use(cors())

app.post('/book_an_event_notification', (req, res) =>{
    const {your_name, email_address, number_of_person, phone_number, notes} = req.body

    mes = emailer.build_email(your_name, email_address, number_of_person, phone_number, notes);
    emailer.send_email(mes)

    res.status(200).json({status: 'Success'})
})

app.listen(3000, () => {
    console.log(`Server listening on port 3000`)
})