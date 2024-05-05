document.addEventListener('DOMContentLoaded', function () {
    var radioFr = document.getElementById('fr');
    var radioEn = document.getElementById('en');

    var paragraphs = document.getElementsByTagName('p');
    var titles = document.getElementsByTagName('h3');

    var paragraphesEN = [
        "Bobby's diner is a place made for American food lovers, Our traditional recipes blend American expertise and French product's quality. Come to taste our delicious traditional American meals such as milkshakes, hamburgers, onion rings, fries, hot dogs…",
        'Bob Anderson, Bobby’s diner founder, was born in his grandmother\'s restaurant in New Jersey. When he had to move to France for his cooking studies,  Bob\'s culinary dreams led him to launch his own business in France. His goal was to introduce the world to real American cuisine. \
        With his savings, he bought an old truck and turned it into a real food truck with limited resources. \
        Bob Anderson, launched Bobby\'s diner in November 2009. After a huge success, Bob started to become more and more renowned, becoming the best American style\'s food-truck in the region.',
        'Our three main values are passion, quality and authenticity. \
        We decided to merge the original quality of retro diners and French product\'s quality in order to create a unique experience. \
        Our buns are homemade in a bakery every morning. All dairy products are co produced with our dedicated farm.',
        'Our food-truck is mainly located in Rouen to deliver the best meals for every workman during their lunchtime to let them enjoy their breaks. During the afternoon, we change our location every day to please new people and let them enjoy our snacks such as milkshakes, doughnuts, cookies… For dinner, We move to different locations depending on the events nearby such as festivals, sports events, and so much more.',
        'For special requests, contact us by email. If you want to know where we are going to be the next day, click on the map to see our planning !'
    ];

    var titresFR = [
        "Notre histoire :",
        "Nos valeurs :",
        "Notre emplacement :"
    ];

    var paragraphesFR = [
        "Bobby's diner est un lieu fait pour les amateurs de cuisine américaine. Nos recettes traditionnelles mêlent le savoir-faire américain et qualité de produits française. Venez déguster nos délicieux repas traditionnels tels que nos milkshakes, hamburgers, onion rings, frites, hot-dogs…",

       'Bob Anderson, le fondateur de Bobby’s diner, est né dans le restaurant de sa grand-mère dans le New Jersey. Lorsqu’il a dû déménager en France pour ses études de cuisine, les rêves culinaires de Bob l’ont amené à lancer sa propre entreprise en France. Son but était de faire découvrir au monde entier la vraie cuisine américaine. \
        Avec ses économies, il a acheté un vieux camion et l’a transformé en un vrai food truck avec des ressources limitées. \
        Bob Anderson  a lancé Bobby’s diner en novembre 2009. Après un énorme succès, Bob a commencé à devenir de plus en plus célèbre, devenant le meilleur food-truck de nourriture américaine de la région.',
        
        'Nos valeurs sont la passion, la qualité et l’authenticité. \
Nous avons décidé de fusionner la qualité originale des diners américains rétro et la qualité des produits français afin de créer une expérience unique. \
Nos petits pains sont faits maison dans une boulangerie tous les matins. Tous les produits laitiers sont fabriqués avec notre ferme dédiée.',
        "Notre food-truck est principalement situé à Rouen pour livrer les meilleurs repas à chacun pendant leur pause déjeuner afin qu'ils puissent profiter de leurs pauses. L'après-midi, nous changeons d'emplacement tous les jours pour satisfaire de nouvelles personnes et leur permettre de déguster nos collations tels que nos milkshakes, beignets, cookies… Pour le dîner, nous nous déplaçons vers différents endroits en fonction des événements à proximité comme des festivals, des événements sportifs, et bien plus encore."
        , "Pour des demandes spéciales, contactez-nous par email. Si vous voulez savoir où nous serons le lendemain, cliquez sur la carte pour voir notre planning !"
    ];

    var titresEN = [
        
        "Our story:",
        "Our values:",
        "Our location:"
    ];

    radioFr.addEventListener('change', function () {
        if (radioFr.checked) {
            for (var i = 0; i < paragraphs.length; i++) {

                paragraphs[i].textContent = paragraphesFR[i];
            }
            for (var i = 0; i < titles.length; i++) {
                titles[i].textContent = titresFR[i];
                
            }
        }
    });

    radioEn.addEventListener('change', function () {
        if (radioEn.checked) {
            for (var i = 0; i < paragraphs.length; i++) {
                titles[i].textContent = titresEN[i];
                paragraphs[i].textContent = paragraphesEN[i];
            }
        }
    });
});