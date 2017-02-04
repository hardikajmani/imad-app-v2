console.log('Loaded!');




var img = document.getElementById('me');
img.onclick = function () {
var interval = setInterval(moveRight, 50);
};

var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 2;
    img.style.marginLeft = marginLeft + 'px';
}

/*
var element = document.getElementById('info');
element.innerHTML = "I changed some text !!!";*/

//Use above code to change something by getting that element by its id name

//Id is unique but classes can be multiple and can be common too!!//

