const express = require('express')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.json())



app.post('/sms/api/json/', (req, res, next) => {
	const { body } = req
	console.log(`SMS sent to ${body.mobiles}, message: "${body.message}"`)
	res.json([{type: "success", msg: "", data: { sent: 1, failed: 0, smsid: "1234", reciver: body.mobiles }}])
})


app.listen(4445, () => console.log('Started 4445'))
