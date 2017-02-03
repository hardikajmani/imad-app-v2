var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var artOne = {
    title : "Article One",
    heading : "Article-one",
        content : `<p>This id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id             article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of         my web-app I love programming </p>
                   <p>This id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programming </p>
                    <p>This id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programming </p>
                    <p>This id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programmingThis id article one of my web-app I love programming </p>`
    
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

app.get('/art-one',function (req,res){
  res.send(createTemplate(artOne));
});

app.get('/art-two',function (req,res){
  res.sendFile(path.join(__dirname, 'ui', 'art-two.html'));
});

app.get('/art-three',function (req,res){
  res.sendFile(path.join(__dirname, 'ui', 'art-three.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/me.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'me.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
