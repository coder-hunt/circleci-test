const express = require('express')
const app = express()
const events = require('events')
const eventsEmitter = new events.EventEmitter()
const port = 3000
app.get('/', (req, res) => {
  eventsEmitter.emit('scream')
  res.send('Hello World!')
})
let myEventsHandler = function () {
  console.log('i heard scream')
}
eventsEmitter.on('scream', myEventsHandler)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
module.exports = app