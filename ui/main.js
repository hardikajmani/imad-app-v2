

var button = document.getElementById('counter');

var counter = 0;
button.onclick = function (){
    
    // Make a request to counter endpoint
    
    // Capture the response and store it in a variable
    
    //render the variable to the correct span
    
    counter++;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
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

