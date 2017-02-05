

var button = document.getElementById('counter');

var counter = 0;
button.onclick = function (){
    
    // Create request
        var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
        request.onreadystatechange = function(){
            
            if(request.readyState === XMLHttpRequest.DONE)
            
                if( request.status === 200){
                    var counter = request.responseText;
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                }
        }; 
      
    //Make the request
     request.open('GET','http://hardikajmani.imad.hasura-app.io/cs',true);
     request.send(null);
    
    
}; 


/*var img = document.getElementById('me');
img.onclick = function () {
var interval = setInterval(moveRight, 50);
};

var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 2;
    img.style.marginLeft = marginLeft + 'px';
}*/    //code to move elee=ment named me

/*
var element = document.getElementById('info');
element.innerHTML = "I changed some text !!!";*/

//Use above code to change something by getting that element by its id name

//Id is unique but classes can be multiple and can be common too!!//

