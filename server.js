var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
   'art-one' : {
    title : "Article One",
    heading : "Article-one",
        content : `<p>This id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id             article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of         my web-app I love programming </p>
                   <p>This id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programming </p>
                    <p>This id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programming </p>
                    <p>This id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programming </p>`
    
},
   'art-two' : {
    title : "Article Two",
    heading : "Article-Two",
        content : `<p>This id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id             article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of         my web-app I love programming </p>
                   <p>This id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programming </p>
                    <p>This id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programming </p>
                    <p>This id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programming </p>`
    
},
  'art-three' : {
    title : "Article Three",
    heading : "Article-Three",
        content : `<p>This id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id             article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of         my web-app I love programming </p>
                   <p>This id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programming </p>
                    <p>This id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programming </p>
                    <p>This id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programming </p>`
    
}
};

function createTemplate(data){

    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = 
            `<!DOCTYPE html>
        <html>
        <head>
          <title> ${title}</title>
             <meta name="viewport" content="width-device-width,initial-scale=1"/>   <!-- For making the pages to adjust themselves for various                                                                                                                      screen sizes -->
            <link rel="stylesheet" type="text/css" href="/ui/style.css" />
          
        </head>
        
        <body>
            <div class="container">
                    <div>
                        <h1>
                            <a href="/"> Home</a>
                        </h1>
                    </div>
                    <hr/>
                    <div>
                        <h3> ${heading}</h3>
                        ${content}
                        
                    </div>
           </div>
        </body>
        </html>
    `;

 return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});



app.get('/:artName',function (req,res){
  var artName = req.params.artName;
  res.send(createTemplate(articles[artName]));
});

var counter = 0;
app.get('/cs',function (req, res){
    counter = counter + 1;
    res.send(counter.toString());
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/me.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'me.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
