// Fonctionnalité n°1 + 1-bis // Compteur de clic du footer 
let footerCounter = 0;

document.getElementsByTagName('footer')[0].addEventListener("click", function(){
    footerCounter++;
	console.log(`Clic numéro: ${footerCounter}`);
});

// Fonctionnalité n°2 // Hamburger menu - enlever et ajouter classe "collapse"

document.getElementsByClassName("navbar-toggler")[0].addEventListener("click", function(){
document.getElementById("navbarHeader").classList.toggle("collapse");
});

// Fonctionnalité n°3 // Edit card - texte en rouge

let firstCard = document.getElementsByClassName('card-body')[0];

firstCard.getElementsByTagName("button")[1].addEventListener("click", function(){
    firstCard.getElementsByTagName("p")[0].classList.add("text-danger");
  });

// Fonctionnalité n°4 // Edit card - texte en vert

let secondCard = document.getElementsByClassName('card-body')[1];

secondCard.getElementsByTagName("button")[1].addEventListener("click", function(){
secondCard.getElementsByTagName("p")[0].classList.toggle("text-success");
  });

// Fonctionnalité n°5 // Double-clic sur la navbar du haut pour désactiver la stylesheet

let nav = document.getElementsByTagName('header')[0];
nav.addEventListener("dblclick", RemoveStyle);

function RemoveStyle() {
  if (document.styleSheets[0].disabled === false)
    document.styleSheets[0].disabled = true;
  else 
      document.styleSheets[0].disabled = false;
  };

// Fonctionnalité n°6 // 

let ViewButton = document.getElementsByClassName("btn btn-sm btn-success");

for (let i = 0; i < ViewButton.length; i++){

  ViewButton[i].addEventListener("mouseover", function(){
  document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
  document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");
  });
}
