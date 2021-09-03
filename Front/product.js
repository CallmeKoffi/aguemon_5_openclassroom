console.log((new URL(document.location)).searchParams.get("id"));
const idProduct = (new URL(document.location)).searchParams.get("id")
const urlcamera = ' http://localhost:3000/api/cameras/' + idProduct
fetch(urlcamera).then((res) => 
res.json().then((product) => {
    console.log(product);
     document.querySelector('').innerHTML = data.imageUrl;
     document.querySelector('').innerHTML = data.name;
     document.querySelector('').innerHTML = data.price + "€";
     document.querySelector('').innerHTML = data.description;
    })
    ).catch(err => alert('Erreur '+ err))