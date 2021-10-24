function gnrt(){
    var image = document.createElement('img');
    var div= document.getElementById('fleximage')
    image.src= "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image)
}