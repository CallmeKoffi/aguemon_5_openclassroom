// Fetch pour API premier article en page d'acceuil

const urlFirstCamera = ' http://localhost:3000/api/cameras/5be1ed3f1c9d44000030b061';

fetch(urlFirstCamera).then((res) => 
 res.json().then((data) => {
    console.log(data.price);
    document.querySelector('#firstPicture').innerHTML = data.imageUrl;
    document.querySelector('#titleFirstProduct').innerHTML = data.name;
    document.querySelector('#priceFirstProduct').innerHTML = data.price + "€";
    document.querySelector('#decription__product--first').innerHTML = data.description;

    
 })
 ).catch(err => alert('Erreur '+ err))

 // Fetch pour API deuxième article en page d'acceuil

 const urlSecondCamera = 'http://localhost:3000/api/cameras/5be1ef211c9d44000030b062';

 fetch(urlSecondCamera).then((res) => 
  res.json().then((data) => {
     console.log(data.price);
     document.querySelector('#secondPicture').innerHTML = data.imageUrl;
     document.querySelector('#titleSecondProduct').innerHTML = data.name;
     document.querySelector('#priceSecondProduct').innerHTML = data.price + "€";
     document.querySelector('#decription__product--second').innerHTML = data.description;
    })
    ).catch(err => alert('Erreur '+ err))

 // Fetch pour API troisième article en page d'acceuil

 const urlThirdCamera = 'http://localhost:3000/api/cameras/5be9bc241c9d440000a730e7 ';

 fetch(urlThirdCamera).then((res) => 
  res.json().then((data) => {
     console.log(data.price);
     document.querySelector('#thirdPicture').innerHTML = data.imageUrl;
     document.querySelector('#titleThirdProduct').innerHTML = data.name;
     document.querySelector('#priceThirdProduct').innerHTML = data.price + "€";
     document.querySelector('#decription__product--third').innerHTML = data.description;
    })
    ).catch(err => alert('Erreur '+ err))

 // Fetch pour API quatrième article en page d'acceuil
 const urlFourthCamera = 'http://localhost:3000/api/cameras/5be9c4471c9d440000a730e8';

 fetch(urlFourthCamera).then((res) => 
  res.json().then((data) => {
     console.log(data.price);
     document.querySelector('#fourthPicture').innerHTML = data.imageUrl;
     document.querySelector('#titleFourthProduct').innerHTML = data.name;
     document.querySelector('#priceFourthProduct').innerHTML = data.price + "€";
     document.querySelector('#decription__product--fourth').innerHTML = data.description;
    })
    ).catch(err => alert('Erreur '+ err))


 // Fetch pour API cinquième article en page d'acceuil
 const urlFifthCamera = 'http://localhost:3000/api/cameras/5be9c4c71c9d440000a730e9';

 fetch(urlFifthCamera).then((res) => 
  res.json().then((data) => {
     console.log(data.price);
     document.querySelector('#fifthPicture').innerHTML = data.imageUrl;
     document.querySelector('#titleFifthProduct').innerHTML = data.name;
     document.querySelector('#priceFifthProduct').innerHTML = data.price + "€";
     document.querySelector('#decription__product--fifth').innerHTML = data.description;
    })
    ).catch(err => alert('Erreur '+ err))