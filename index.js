const express = require('express');
const request = require('request');
app = express()
const port = 3001

app.get('/say', (req, res) => {
    // console.log(req.query.keyword)
    var req_body = {'keyword' : req.query.keyword}
    request.post({url: 'https://ybj6ve32v6ge4dpzttab7r4mnu0crxqv.lambda-url.us-east-1.on.aws/', body: req_body , json: true},
    function(error, response, body) {
        res.send(body)
    })
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})