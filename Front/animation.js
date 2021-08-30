/*let zoom = document.getElementsByClassName('.zoomcard');
console.log(zoom)

zoom.addEventListener('mouseover', function() {
    zoom.classList.toggle('anim')
})*/

let params = new URLSearchParams('http://localhost:3000/api/cameras/5be9c4c71c9d440000a730e9');

console.log(params.get(name))