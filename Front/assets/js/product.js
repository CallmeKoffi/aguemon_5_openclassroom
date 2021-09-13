//console.log((new URL(document.location)).searchParams.get("id"));
const idProduct = (new URL(document.location)).searchParams.get("id")
const urlcamera = ' http://localhost:3000/api/cameras/' + idProduct

fetch(urlcamera).then((res) => 
res.json().then((product) => {
    console.log(product);
     document.querySelector('#container__product--image').setAttribute("src", product.imageUrl);
     document.querySelector('#name').innerHTML = product.name;
     document.querySelector('#price').innerHTML = product.price / 100 + " €";
     document.querySelector('#description').innerHTML = product.description;
   
     fillSelect(product.lenses)
     document.querySelector("#add_to_cart").addEventListener("click",addToCart)
    })
    ).catch(err => alert('Erreur '+ err))

    function formatPrice(priceCents){
      
      let priceFormated = priceCents
      return priceFormated
    }

    function fillSelect(lenses){
        let select = document.querySelector('#option__produit');
        let index = 0;
        for (let lense of lenses){
            let option = document.createElement('option');
            option.value= index;
            option.innerHTML = lense;
            select.appendChild(option);
            index ++;
        }
    }
    function addToCart(e){
        console.log(e)
    }

