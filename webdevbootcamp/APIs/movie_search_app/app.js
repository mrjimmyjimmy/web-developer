const express = require('express'),
request = require('request'),
app = express()

app.get('/results', (req, res) =>{
    request('http://www.omdbapi.com/?s=california&apikey=thewdb', (err, response, body) =>{
        if (!err & response.statusCode === 200) {
            let data = JSON.parse(body)
            res.send(data['Search'][0]['Title']);
            
        } else {
            
        }
    })
});

app.listen(3000, 'localhost', function(){
    console.log('server has started');
    
});