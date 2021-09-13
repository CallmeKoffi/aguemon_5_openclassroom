// Fetch pour API article en page d'acceuil
let productsBody = document.querySelector("#products");
fetch("http://localhost:3000/api/cameras").then((res) => 
 res.json().then((data) => {
    console.log(data);
    data.forEach(product => {
        var clone = document.querySelector("#clone_product").content.cloneNode(true);
        clone.querySelector(".zoomcard").setAttribute("href", "./productpage.html?id="+ product._id)
        clone.querySelector('.product_picture').setAttribute("src", product.imageUrl);
        clone.querySelector('.title_product').innerHTML = product.name;
        clone.querySelector('.price_product').innerHTML = product.price / 100 + "€";
        clone.querySelector('.decription__product').innerHTML = product.description;
        productsBody.appendChild(clone);
    });
    
     
}
    ).catch(err => alert('Erreur '+ err))
)
