var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var app = express();
app.use(morgan('combined'));


var config = {
    user : 'hardikajmani',
    database : 'hardikajmani',
    host : 'db.imad.hasura-app.io',
    port : '5432',
    password : process.env.DB_PASSWORD
    
};



var articles = {
   'art-one' : {
                title : "Myself",
                heading : "About Myself",
                content : `<p>
                                    In this article I'm going to tell a little bit about myself.
                                <br/> My name is Hardik Ajmani and I was born in Ambala,Haryana,
                                <br/> Now my famliy live in Mumbai and I am studying in Chennai in SRM.
                                <br/> This is my first article.
                                <br/> I love programming!!!
                                </p>`
    
},
   'art-two' : {
                title : "Hobbies",
                heading : "My hobbies",
                content : `<p> I have many hobbies ans some of them are:</p>
                                <ul>
                                    <li>Programming</li>
                                    <li>Making new things</li>
                                    <li>Gaming</li>
                                    <li>Photography</li>
                                </ul>`
    
},

  'art-three' : {
                title : "AIM",
                heading : "AIM",
                content : `<p>Hey everyone in this article I'm going to tell about my career.
                                <br/> I am planning to pursue MS in Artificial Intelligence from MIT after completing my B.tech which I am doing in   SRM University, Chennai. 
                                <br/> Then I may or may not pursue a PHd but I surely want to work with NASA at some point of my life.
                                </p>`
    
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
          <title>${title}</title>
          <meta name="viewport" content="width-device-width,initial-scale=1"/>   
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
           
           <div class="comments">
                <br/>
                <h3> Comments     <span id="cmmtCount">0</span></h3>
                <hr/>
                <ul id="list">
                </ul>
                <br/>
                <input type="text" id="cmmtName" placeholder="   Name" class="box">
                <br/>
                <br/>
                <textarea id="cmmt" placeholder="Enter a comment here" rows=4 cols=30 class="box"></textarea>
                <br/>
                <br/>
                <input type="submit" id="cmmtSubmit" value="Submit" class="box">
            </div>
            
            <script type="text/javascript" src="/ui/main2.js">
        </script>
            
        </body>
        </html>
    `;

 return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db',function(req,res){
    //make a request 
    ppol.query('SELECT * from test',function(err,result){
        if(err){
            res.status(500).send(err.toString());
        } else{
            res.send(JSON.stringify(result));
        }
    })
    //return the response with the results
})

var counter = 0;
app.get('/cs',function (req, res){
    counter++;
    res.send(counter.toString());
});

var cmmtCounter = {
    
    '1':0,
    '2':0,
    '3':0
};
app.get('/counter/:no',function (req, res){
    var no = req.params.no;
    cmmtCounter[no]++;
    res.send(cmmtCounter[no].toString());
});

var names =[];
app.get('/submit-name',function(req, res){ // query format url sfffgog?name=xxxxxx
    var name = req.query.name;
     
     names.push(name);
     
     //JSON(JavaScript Object Notation)
     res.send(JSON.stringify(names));
});


var cmmtNames ={
    
    'one':[],
    'two':[],
    'three':[]
};

app.get('/submitCmmtName/:siteName',function(req, res){ // query format url sfffgog?name=xxxxxx
    var name = req.query.name;
    var siteName = req.params.siteName; 
     cmmtNames[siteName].push(name);
     
     //JSON(JavaScript Object Notation)
     res.send(JSON.stringify(cmmtNames[siteName]));
});

var cmmtContent ={
    
    'one':[],
    'two':[],
    'three':[]
};

app.get('/submitCmmtName/:siteName',function(req, res){ // query format url sfffgog?name=xxxxxx
    var cmmt = req.query.cmmt;
    var siteName = req.params.siteName; 
     cmmtContent[siteName].push(cmmt);
     
     //JSON(JavaScript Object Notation)
     res.send(JSON.stringify(cmmtContent[siteName]));
});

app.get('/:artName',function (req,res){
  var artName = req.params.artName;
  res.send(createTemplate(articles[artName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/main2.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main2.js'));
});

app.get('/ui/me.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'me.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
