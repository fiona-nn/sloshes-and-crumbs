// =========================
// MENU MODAL
// =========================

const menuModal = document.querySelector("#menuModal");
const menuModalClose = document.querySelector("#menuModalClose");

const modalCategory = document.querySelector("#modalCategory");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalItems = document.querySelector("#modalItems");

const menuData = {
    drinks: {
        category: "SLOSHES",
        title: "Something to sip.",
        description:
            "Freshly brewed drinks and iced favourites.",
        items: [
            { name: "Espresso", price: "Ksh 400" },
            { name: "Cappuccino", price: "Ksh 400" },
            { name: "Fresh Lemonade", price: "Ksh 300" },
            { name: "Masala Tea", price: "Ksh 350" },
            { name: "Latte", price: "Ksh 400" },
            { name: "Iced Coffee", price: "Ksh 350" },
            { name: "Herbal Tea", price: "Ksh 350" },
            { name: "Green Tea", price: "Ksh 350" }
        ]
    },

    bakes: {
        category: "CRUMBS",
        title: "Freshly baked.",
        description:
            "Warm pastries, soft cakes, and sweet treats.",
        items: [
            { name: "Butter Croissants", price: "Ksh 400" },
            { name: "Banana Bread", price: "Ksh 250" },
            { name: "Cinnamon Rolls", price: "Ksh 300" },
            { name: "Chocolate Chip Cookies", price: "Ksh 200" },
            { name: "Brownies", price: "Ksh 300" },
            { name: "Carrot Cake", price: "Ksh 300" },
            { name: "Blueberry Muffins", price: "Ksh 350" },
            { name: "Doughnuts", price: "Ksh 200" }
        ]
    },

    brunch: {
        category: "BRUNCH",
        title: "Timeless dishes.",
        description:
            "Any day, any time.",
        items: [
            { name: "Avocado Toast", price: "Ksh 400" },
            { name: "Breakfast Sandwich", price: "Ksh 400" },
            { name: "Waffles", price: "Ksh 400" },
            { name: "Omelette", price: "Ksh 350" },
            { name: "French Toast", price: "Ksh 300" },
            { name: "Pancakes", price: "Ksh 300" },
            { name: "Breakfast Burrito", price: "Ksh 400" },
            { name: "Crepes", price: "Ksh 350" }
        ]
    }
};

// =========================
// OPEN MENU MODAL
// =========================

const menuLinks = document.querySelectorAll(".menu-card a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const category = link.dataset.category;
        const selectedMenu = menuData[category];

        modalCategory.textContent = selectedMenu.category;
        modalTitle.textContent = selectedMenu.title;
        modalDescription.textContent = selectedMenu.description;

        modalItems.innerHTML = "";

        selectedMenu.items.forEach(function (item) {

            const listItem = document.createElement("li");

            const itemName = document.createElement("span");
            itemName.textContent = item.name;

            const itemPrice = document.createElement("span");
            itemPrice.textContent = item.price;

            listItem.appendChild(itemName);
            listItem.appendChild(itemPrice);

            modalItems.appendChild(listItem);

        });

        menuModal.classList.add("active");

    });

});

// =========================
// CLOSE MENU MODAL
// =========================

menuModalClose.addEventListener("click", function () {

    menuModal.classList.remove("active");

});

const backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {
        backToTop.classList.add("visible");
    } else {
        backToTop.classList.remove("visible");
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// =========================
// CLOSE WHEN CLICKING OUTSIDE
// =========================

menuModal.addEventListener("click", function (event) {

    if (event.target === menuModal) {
        menuModal.classList.remove("active");
    }

});

// =========================
// CLOSE WITH ESCAPE KEY
// =========================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        menuModal.classList.remove("active");
    }

});
// =========================
//MOBILE NAVIGATION
// =========================

const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");

    if (navLinks.classList.contains("open")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Close navigation");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open navigation");
    }
});

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open navigation");
    });
});

document.addEventListener("click", function (event) {
    const clickedInsideNav = navLinks.contains(event.target);
    const clickedMenuButton = menuToggle.contains(event.target);

    if (!clickedInsideNav && !clickedMenuButton) {
        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open navigation");
    }
});