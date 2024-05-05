var menuJSON = {
  menu: {
    burgers: [
      {
        name: "Double Jukebox Burger",
        description:
          "Deux viandes grillées à la flamme, 4 tranches de cheddar fondu et la sauce JUKEBOX© pour une explosion de saveurs inoubliables !",
        price: 11.99,
        image: "images/burgers/burger5.webp",
      },
      {
        name: "American Veggie",
        description:
          "Un délicieux burger avec son pané Végétal croustillant, sa sauce épicée et son délicieux bacon végétal pour satisfaire le plus grand nombre. ",
        price: 10.99,
        image: "images/burgers/burger6.webp",
      },
      {
        name: "western BBQ Burger",
        description:
          "Deux morceaux de bœuf grillés à la perfection, nappés d'une délicieuse sauce barbecue, accompagnés de bacon croustillant, d'oignons caramélisés et de généreuses tranches de cheddar fondu. Un véritable incontournable !",
        price: 13.99,
        image: "images/burgers/burger1.webp",
      },
      {
        name: "Bobby's Burger",
        description:
          "Le burger originel, fromage fondant, deux steack, et la fameuse bobby's sauce. Une expérience pour tous !",
        price: 7.99,
        image: "images/burgers/burger2.webp",
      },
      {
        name: "JFK Burger",
        description:
          "Deux viandes grillées à la flamme, 4 tranches de cheddar fondu et la sauce JUKEBOX© pour une explosion de saveurs inoubliables !",
        price: 11.99,
        image: "images/burgers/burger3.webp",
      },
      {
        name: "Cheeseburger",
        description:
          "Un délicieux burger avec son pané Végétal croustillant, sa sauce épicée et son délicieux bacon végétal pour satisfaire le plus grand nombre. ",
        price: 10.99,
        image: "images/burgers/burger4.webp",
      },

      {
        name: "JFK Burger",
        description:
          "Deux viandes grillées à la flamme, 4 tranches de cheddar fondu et la sauce JUKEBOX© pour une explosion de saveurs inoubliables !",
        price: 11.99,
        image: "images/burgers/burger3.webp",
      },
      {
        name: "Cheeseburger",
        description:
          "Un délicieux burger avec son pané Végétal croustillant, sa sauce épicée et son délicieux bacon végétal pour satisfaire le plus grand nombre. ",
        price: 10.99,
        image: "images/burgers/burger4.webp",
      },
    ],
    milkshakes: [
      {
        name: "Classic Vanilla",
        description:
          "Un milkshake classique à la vanille sorti tout droit du Tennesse !",
        price: 4.49,
        image: "images/milkshakes/milkshake1.png",
      },
      {
        name: "Decadent Chocolate",
        description: "Un vrai plaisir gourmand au chocolat 100% Bio.",
        price: 5.49,
        image: "images/milkshakes/milkshake2.png",
      },
      {
        name: "Strawberry Sensation",
        description: "La fraiche sensation de fraise 100% cultivées en France.",
        price: 6.49,
        image: "images/milkshakes/milkshake3.png",
      },
      {
        name: "Bobby's Delight",
        description:
          "Le milkshake 100% Bobby au cookie, brownie et éclat de caramel. Un vrai plaisir sucré. ",
        price: 5.99,
        image: "images/milkshakes/milkshake4.png",
      },
    ],
  },
};

function createBurgerCard(burger) {
  var cardDiv = document.createElement("div"); // Créé une div
  cardDiv.className = "card"; // Lui ajoute la classe image

  var imageElement = document.createElement("img"); // Créé une image
  imageElement.src = burger.image; // Cette image est récupérée dans le JSON
  cardDiv.appendChild(imageElement); // l'image est ajoutée au div

  var nameElement = document.createElement("h2");
  nameElement.textContent = burger.name;
  cardDiv.appendChild(nameElement);

  var descriptionElement = document.createElement("p");
  descriptionElement.textContent = burger.description;
  cardDiv.appendChild(descriptionElement);

  var priceElement = document.createElement("p");
  priceElement.className = "prix";
  priceElement.textContent = burger.price + "€";
  cardDiv.appendChild(priceElement);
  document.getElementById("card-container").appendChild(cardDiv);
}

// Créer une carte pour chaque burger
for (var i = 0; i < menuJSON.menu.burgers.length; i++) {
  createBurgerCard(menuJSON.menu.burgers[i]);
}

function createMilkshakesCard(shakes) {
  var cardDiv = document.createElement("div");
  cardDiv.className = "card";

  var imageElement = document.createElement("img");
  imageElement.src = shakes.image;
  cardDiv.appendChild(imageElement);

  var nameElement = document.createElement("h2");
  nameElement.textContent = shakes.name;
  cardDiv.appendChild(nameElement);

  var descriptionElement = document.createElement("p");
  descriptionElement.textContent = shakes.description;
  cardDiv.appendChild(descriptionElement);

  var priceElement = document.createElement("p");
  priceElement.className = "prix";
  priceElement.textContent = shakes.price + "€";
  cardDiv.appendChild(priceElement);

  document.getElementById("card-container2").appendChild(cardDiv);
}

// Créer une carte pour chaque burger
for (var i = 0; i < menuJSON.menu.milkshakes.length; i++) {
  createMilkshakesCard(menuJSON.menu.milkshakes[i]);
}
