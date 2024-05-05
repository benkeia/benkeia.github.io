function init() { /* La carte doit attendre que la page charge avant d'être lancée*/
    var mymap = L.map("map").setView([49.4431, 1.0994], 10); 
    /* Définit la vue de la carte avec l'id map avec des coordonées GPS et un niveau de zoom */

    var Jawg_Dark = L.tileLayer(
        "https://{s}.tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token={accessToken}",  
        // définit le "tile" utilisé (le style de la carte)
        {
            minZoom: 10,   // Définit le niveau de zoom minimum et maximum
            maxZoom: 15,

            accessToken:
                "7SViPJYEsdhOaMXvYx37J5ulOqvXrrWYC2FLQfhqhYvvQhDF7xc0ovQES3Bm7DIG",
        }
    ).addTo(mymap);  // charge la carte

    L.marker([49.26667, 0.95]).addTo(mymap).bindPopup("Lundi soir").openPopup(); 
    /* Créé un marker avec les coordonnées définies 
    puis l'ajoute à la carte avec un popup qui indique le moment d'ouverture*/

    L.marker([49.283329, 1]).addTo(mymap).bindPopup("Mardi soir").openPopup();

    L.marker([49.549999, 0.95])
        .addTo(mymap)
        .bindPopup("Mercredi soir")
        .openPopup();

    L.marker([49.333328, 1.1]).addTo(mymap).bindPopup("Vendrdi soir").openPopup();

    L.marker([49.416672, 1.15])
        .addTo(mymap)
        .bindPopup("Dimanche soir")
        .openPopup();

    L.marker([49.4431, 1.0994])
        .addTo(mymap)
        .bindPopup("Le midi et au goûter !")
        .openPopup();
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


function contact() {
    window.location.href = 'contact.html';
}


function menu() {

    window.location.href = 'menu.html';
}