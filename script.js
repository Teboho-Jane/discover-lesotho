
// BOOKING FORM VALIDATION


const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const destination = document.getElementById("destination").value;
        const travelDate = document.getElementById("travelDate").value;
        const people = document.getElementById("people").value;
        const accommodation = document.getElementById("accommodation").value;

        const successMessage = document.getElementById("successMessage");
        const errorMessage = document.getElementById("errorMessage");



        if (
            fullName === "" ||
            email === "" ||
            phone === "" ||
            destination === "" ||
         
            people === "" ||
            accommodation === ""
        ) {

            errorMessage.style.display = "block";
            successMessage.style.display = "none";

            return;

        }


    

        errorMessage.style.display = "none";
        successMessage.style.display = "block";



        localStorage.setItem("visitorName", fullName);




        bookingForm.reset();

    });

}


// SEARCH TOURIST ATTRACTIONS


const searchInput = document.querySelector('.search-box input');

if (searchInput) {

    searchInput.addEventListener("keyup", function() {

        const searchText = searchInput.value.toLowerCase().trim();

        const cards = document.querySelectorAll(".card");

        cards.forEach(function(card) {

            const cardText = card.textContent.toLowerCase();

            if (cardText.includes(searchText)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}


// DARK / LIGHT MODE


const themeButton = document.getElementById("themeButton");

if (themeButton) {

    themeButton.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");


        if (document.body.classList.contains("dark-mode")) {

            themeButton.textContent = "Light Mode";

            localStorage.setItem("theme", "dark");

        } else {

            themeButton.textContent = "Dark Mode";

            localStorage.setItem("theme", "light");

        }

    });


    // CHECK SAVED THEME

    const savedTheme = localStorage.getItem("theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        themeButton.textContent = "Light Mode";

    }

}


//  FILTER TOURIST ATTRACTIONS


const filterButtons = document.querySelectorAll(".filter-btn");

const attractionCards = document.querySelectorAll(
    ".card[data-category]"
);

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedCategory = button.dataset.category;

        attractionCards.forEach(function(card) {

            const categories = card.dataset.category.split(" ");

            if (
                selectedCategory === "all" ||
                categories.includes(selectedCategory)
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

});