console.log('Loaded!');


alert('Hy I\' m alert box and the js file is loaded'  );

/*
var element = document.getElementById('info');
element.innerHTML = "I changed some text !!!";*/

//Use above code to change something by getting that element by its id name

//Id is unique but classes can be multiple and can be common too!!//

var img = document.getElementById('me');
img.onclick = function () {
    img.style.marginleft ='100px';
};