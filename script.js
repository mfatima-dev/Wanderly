// ---------------------------
// Explore Button
// ---------------------------

document.querySelector("#explore-btn").addEventListener("click", function () {

    document.querySelector("#destinations").scrollIntoView({
        behavior: "smooth"
    });

});


// ---------------------------
// Selected Destination
// ---------------------------

const cards = document.querySelectorAll(".card");
const selectedPlace = document.querySelector("#selected-place");

cards.forEach(function(card){

    card.addEventListener("click", function(){

        const place = card.dataset.place;

        selectedPlace.textContent =
        "✔ Selected Destination: " + place;

    });

});


// ---------------------------
// Favorite Hearts
// ---------------------------

const favorites = document.querySelectorAll(".favorite");

favorites.forEach(function(favorite){

    favorite.addEventListener("click", function(event){

        event.stopPropagation();

        if(favorite.textContent === "🤍"){

            favorite.textContent = "❤️";

        }else{

            favorite.textContent = "🤍";

        }

    });

});


// ---------------------------
// Search
// ---------------------------

const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("input", function(){

    const searchText = searchInput.value.toLowerCase();

    cards.forEach(function(card){

        const place = card.dataset.place.toLowerCase();

        if(place.includes(searchText)){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

});

const themeButton = document.querySelector("#theme-btn");

themeButton.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeButton.textContent = "☀️";

    }else{

        themeButton.textContent = "🌙";

    }

});

