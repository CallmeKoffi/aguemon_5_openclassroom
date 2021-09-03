console.log((new URL(document.location)).searchParams.get("id"));
const idProduct = (new URL(document.location)).searchParams.get("id")
const urlcamera = ' http://localhost:3000/api/cameras/' + idProduct
fetch(urlcamera).then((res) => 
res.json().then((data) => {
    console.log(data);
     document.querySelector('#secondPicture').innerHTML = data.imageUrl;
     document.querySelector('#titleSecondProduct').innerHTML = data.name;
     document.querySelector('#priceSecondProduct').innerHTML = data.price + "€";
     document.querySelector('#decription__product--second').innerHTML = data.description;
    })
    ).catch(err => alert('Erreur '+ err))