import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

import createFooter from '../components/footer.js';

// import createHeader from '../components/header.js';


// let header = document.getElementById("p_topNavbar");
// header.innerHTML = createHeader();

let footer = document.getElementById("footer");
footer.innerHTML = createFooter();


// Slider for all images - DONT TOUCH

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

/* BOOTSTRAP CAROUSEL AUTOPLAY PART DONT TOUCH */

$('.carousel').carousel({
    interval: 2000
})

////////////////////////////////////////////////////////////////////////////

const p_storeImages = [
    "https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_emf_190x60_250322.png",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_bbstar_190x60_250322.png",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_precautionary_190x60_250322.png",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_faq_190x60_250322.png",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_combostore_190x60_250322.png",
    "https://www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_dealsoftheweek_190x60_250322.png",
]


const p_bankOffersImages = [
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/2365bc54-1700-4f28-8130-d9f65075d0e7/hp_aff_m_indus_360_260322.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/2365bc54-1700-4f28-8130-d9f65075d0e7/hp_aff_m_kotak_360_260322.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/2365bc54-1700-4f28-8130-d9f65075d0e7/hp_aff_m_amex_360_260322.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/2365bc54-1700-4f28-8130-d9f65075d0e7/hp_aff_m_dbs_360_260322.jpg",
];


const p_mostPopularImages = [
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f3cb6ef4-e1a4-48f0-8c74-746775d0b4cc/hp_mostpopularStorefront_m_480_250322_01.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f3cb6ef4-e1a4-48f0-8c74-746775d0b4cc/hp_mostpopularStorefront_m_480_250322_02.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f3cb6ef4-e1a4-48f0-8c74-746775d0b4cc/hp_mostpopularStorefront_m_480_250322_03.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f3cb6ef4-e1a4-48f0-8c74-746775d0b4cc/hp_mostpopularStorefront_m_480_250322_04.jpg"
]


const p_topOffersImages = [
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/e451b0fa-4111-46fe-b4fc-96916010316c/hp_topoffersStorefront_m_480_250322_01.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/e451b0fa-4111-46fe-b4fc-96916010316c/hp_topoffersStorefront_m_480_250322_02.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/e451b0fa-4111-46fe-b4fc-96916010316c/hp_topoffersStorefront_m_480_250322_03.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/e451b0fa-4111-46fe-b4fc-96916010316c/hp_topoffersStorefront_m_480_250322_04.jpg",
]


const p_dailyStaplesImages = [
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/43e5e9b9-ab75-4d63-8bc6-bdaf41e01148/hp_staplesStorefront_m_480_250322_01.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/43e5e9b9-ab75-4d63-8bc6-bdaf41e01148/hp_staplesStorefront_m_480_250322_02.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/43e5e9b9-ab75-4d63-8bc6-bdaf41e01148/hp_staplesStorefront_m_480_250322_03.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/43e5e9b9-ab75-4d63-8bc6-bdaf41e01148/hp_staplesStorefront_m_480_250322_04.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/43e5e9b9-ab75-4d63-8bc6-bdaf41e01148/hp_staplesStorefront_m_480_250322_05.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/43e5e9b9-ab75-4d63-8bc6-bdaf41e01148/hp_staplesStorefront_m_480_250322_06.jpg",
]


const p_fruitsVegsImages = [
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/df4a7094-3a3a-4843-b594-ee6f53ac4099/hp_fnv-organic-fnv-Storefront_m_250322_01.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/df4a7094-3a3a-4843-b594-ee6f53ac4099/hp_fnv-fresh-fruits-Storefront_m_250322_02.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/df4a7094-3a3a-4843-b594-ee6f53ac4099/hp_fnv-fresh-veggs-Storefront_m_250322_03.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/df4a7094-3a3a-4843-b594-ee6f53ac4099/hp_fnvStorefront-blr-hyd-chn_m_250322_04.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/df4a7094-3a3a-4843-b594-ee6f53ac4099/hp_fnvexotic-fnv-Storefront_m_250322_05.jpg"
]


const p_beveragesImages = [
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/531bf38b-0fb2-4386-be25-11ff574c8de6/hp_beveragesStorefront_m_250322_01.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/531bf38b-0fb2-4386-be25-11ff574c8de6/hp_beveragesStorefront_m_250322_02.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/531bf38b-0fb2-4386-be25-11ff574c8de6/hp_beveragesStorefront_m_250322_03.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/531bf38b-0fb2-4386-be25-11ff574c8de6/hp_beveragesStorefront_m_250322_04.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/531bf38b-0fb2-4386-be25-11ff574c8de6/hp_beveragesStorefront_m_250322_05.jpg",
]


const p_snackStoreImages = [
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/1d985c38-fc54-41ec-afcc-0b23cd2f7fc4/hp_snacksStorefront_m_480_250322_01.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/1d985c38-fc54-41ec-afcc-0b23cd2f7fc4/hp_snacksStorefront_m_480_250322_02.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/1d985c38-fc54-41ec-afcc-0b23cd2f7fc4/hp_snacksStorefront_m_480_250322_03.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/1d985c38-fc54-41ec-afcc-0b23cd2f7fc4/hp_snacksStorefront_m_480_250322_04.jpg",   
]

const p_cleaningHouseholdImages = [
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/d696b3fe-7690-479b-9c60-3975dc5b365a/hp_cleaningStorefront_m_480_250322_01.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/d696b3fe-7690-479b-9c60-3975dc5b365a/hp_cleaningStorefront_m_480_250322_02.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/d696b3fe-7690-479b-9c60-3975dc5b365a/hp_cleaningStorefront_m_480_250322_03.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/d696b3fe-7690-479b-9c60-3975dc5b365a/hp_cleaningStorefront_m_480_250322_04.jpg"
]

const p_beautyHygieneImages = [
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/05d0e78a-50f1-49cd-b41a-f094bece2b8c/hp_beauty-summer-deos-Storefront_m_250322_01.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/05d0e78a-50f1-49cd-b41a-f094bece2b8c/hp_beauty-min-20-off-Storefront_m_250322_02.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/05d0e78a-50f1-49cd-b41a-f094bece2b8c/hp_beauty-min-40-off-Storefront_m_250322_03.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/05d0e78a-50f1-49cd-b41a-f094bece2b8c/hp_beauty-makeup-mania-summer-edit-Storefront_m_250322_04.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/05d0e78a-50f1-49cd-b41a-f094bece2b8c/hp_beauty-shaveing-Storefront_m_250322_05.jpg"
]

const p_homeKitchenImages = [
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f8ecc58a-1604-4dcc-b653-5b39cebb12cb/hp_GM-under-99-Storefront_m_250322_01.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f8ecc58a-1604-4dcc-b653-5b39cebb12cb/hp_GM-100-199-Storefront_m_250322_02.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f8ecc58a-1604-4dcc-b653-5b39cebb12cb/hp_GM-min30-49-Storefront_m_250322_03.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f8ecc58a-1604-4dcc-b653-5b39cebb12cb/hp_GM-min-50-0ff-Storefront_m_250322_04.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f8ecc58a-1604-4dcc-b653-5b39cebb12cb/hp_GM-pressure-cooker-Storefront_m_250322_05.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/f8ecc58a-1604-4dcc-b653-5b39cebb12cb/hp_GM-storage-containers-Storefront_m_250322_06.jpg"
]


const p_brandStoreImages = [
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/9f970017-ea4c-4e60-8c91-27b8d021ff13/hp_brandStorefront_m_480_250322_01.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/9f970017-ea4c-4e60-8c91-27b8d021ff13/hp_brandStorefront_m_480_250322_02.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/9f970017-ea4c-4e60-8c91-27b8d021ff13/hp_brandStorefront_m_480_250322_03.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/9f970017-ea4c-4e60-8c91-27b8d021ff13/hp_brandStorefront_m_480_250322_04.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/9f970017-ea4c-4e60-8c91-27b8d021ff13/hp_brandStorefront_m_480_250322_05.jpg",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/0d1b3df5-5cab-43a1-ab77-64d23ccc082c/9f970017-ea4c-4e60-8c91-27b8d021ff13/hp_brandStorefront_m_480_250322_06.jpg"
]

/* Creating Store Grid Div */

let p_storeEntry = document.getElementById("p_storeEntry");

const createStoreEntry = (data) => {
    p_storeEntry.innerHTML = null;
    data.forEach((el) => {
        let p_storeDiv = document.createElement("div");
        p_storeDiv.setAttribute("class", "p_storeDiv");

        let p_store = document.createElement("img");
        p_store.src = el;

        p_storeDiv.append(p_store);
        p_storeEntry.append(p_storeDiv);
    })
}

createStoreEntry(p_storeImages);


/* Creating Bank OffersDiv */

let p_bankOffersDiv = document.getElementById("p_bankOffersDiv");

const createBankOffers = (data) => {
    p_bankOffersDiv.innerHTML = null;
    data.forEach((el) => {
        let offer_div = document.createElement("div");
        offer_div.setAttribute("class", "p_offerDiv");

        let offer_img = document.createElement("img");
        offer_img.src = el;

        offer_div.append(offer_img);

        p_bankOffersDiv.append(offer_div);
    })
}

createBankOffers(p_bankOffersImages)


// Utility Function to create popular and top offers section

const p_createSection = (container, data) => {
    container.innerHTML = null;
    data.forEach((el) => {
        let p_popularDiv = document.createElement("div");
        p_popularDiv.setAttribute("class", "p_popularDiv");

        let p_image = document.createElement("img");
        p_image.src = el;

        p_popularDiv.append(p_image);
        container.append(p_popularDiv);
    })
}


// Utitliy Function to create grid div area

const p_createGridSection = (container, data) => {
    container.innerHTML = null;
    let grid_counter = 97;
    data.forEach((el) => {
        let p_foodItemDiv = document.createElement("div");
        p_foodItemDiv.setAttribute("class", "p_foodItemDiv");
        p_foodItemDiv.style.gridArea = String.fromCharCode(grid_counter++);

        let p_foodItemImg = document.createElement("img");
        p_foodItemImg.src = el;

        p_foodItemDiv.append(p_foodItemImg);

        container.append(p_foodItemDiv);
    })
}


// Creating Most Popular Section

let p_mostPopularDiv = document.getElementById("p_mostPopularDiv");
p_createSection(p_mostPopularDiv, p_mostPopularImages);

// Creating Top Offers section

let p_topOffersDiv = document.getElementById("p_topOffersDiv");
p_createSection(p_topOffersDiv, p_topOffersImages);

// Creating Daily Staples Section
let p_dailyStaplesDiv = document.getElementById("p_dailyStaplesDiv");
p_createSection(p_dailyStaplesDiv, p_dailyStaplesImages);


// Creating Food and Vegetable section
let p_fruitVegDiv = document.getElementById("p_fruitVegDiv");
p_createGridSection(p_fruitVegDiv, p_fruitsVegsImages);


// Creating Beverages Section
let p_beverageDiv = document.getElementById("p_beverageDiv");
p_createGridSection(p_beverageDiv, p_beveragesImages);


// Creating Snack Store Section
let p_snackStoreDiv = document.getElementById("p_snackStoreDiv");
p_createSection(p_snackStoreDiv, p_snackStoreImages);

// Creating Cleaning Household Section
let p_cleaningHouseholdDiv = document.getElementById("p_cleaningHouseholdDiv");
p_createSection(p_cleaningHouseholdDiv, p_cleaningHouseholdImages);


// Creating Beauty and Hygiene Section
let p_beautyHygienceDiv = document.getElementById("p_beautyHygienceDiv");
p_createGridSection(p_beautyHygienceDiv, p_beautyHygieneImages);


// Creating Home and Kitchen Section
let p_homeKitchensDiv = document.getElementById("p_homeKitchensDiv");
p_createSection(p_homeKitchensDiv, p_homeKitchenImages);


// Creating Brand Store Section

let p_brandStoreDiv = document.getElementById("p_brandStoreDiv");
p_createSection(p_brandStoreDiv, p_brandStoreImages);




// Read more button function
let p_companyReadMore = document.getElementById("p_companyReadMore");
p_companyReadMore.addEventListener("click", () => {
    p_companyReadMore.style.display = "none";
    document.getElementById("p_companyHistory").style.display = "block";
    document.getElementById("p_companyReadLess").style.display = "block";
})

document.getElementById("p_companyReadLess").addEventListener("click", () => {
    p_companyReadMore.style.display = "block";
    document.getElementById("p_companyHistory").style.display = "none";
    document.getElementById("p_companyReadLess").style.display = "none";
})






// Function Area to create Best Sellers Slider

// SLIDER FOR BEST SELLERS ITEMS  ----- *** DONT TOUCH ****

const swiper2 = new Swiper('#swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed: 2000,
    autoplay: false,
    // autoplay: {
    //     delay: 6000,
    //     disableOnInteraction: true,
    // },
    400: {
      slidesPerView: 1,
      spaceBetween: 50, },
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });



let bestSellersDB = JSON.parse(localStorage.getItem("bestSellersDB")) || [];

let p_redIconUrl = "https://upload.wikimedia.org/wikipedia/commons/8/8d/Eo_circle_red_asterisk.svg";

let p_redAsteriskCode = `<img class="p_redAsterisk" src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Eo_circle_red_asterisk.svg" alt="">`;

let p_nonvegIcon = "https://freesvg.org/img/1531813245.png";

let p_vegIcon = "https://freesvg.org/img/1531813273.png";

let p_ratingStarIcon = `<i class="fa-solid fa-star"></i>`;

let p_truckIcon = `<i class="fa-solid fa-truck"></i>`;

let p_basketIcon = `<i class="fa-solid fa-basket-shopping"></i>`;



// Function to add swiper class - DO NOT TOUCH 

let p_bestSellerSwiper = document.getElementById("p_bestSellerSwiper");

const appendToSwiper = (div_data) => {
    let swiper_div = document.createElement("div");
    swiper_div.setAttribute("class", "swiper-slide");

    swiper_div.append(div_data);

    p_bestSellerSwiper.append(swiper_div);
}

// let p_bestSellersDiv = document.getElementById("p_bestSellersDiv");



const p_createItemsDiv = (p_bestSellersDiv, data) => {
    data.forEach((el) => {
        let {prod_name: pname, 
            prod_price: pprice, 
            prod_strike_price: psprice, 
            prod_thumbnail: pimage, 
            prod_price_unit: punit,
            prod_piece_unit: ppcunit,
            prod_brand: pbrand,
            prod_rating: prating,
            prod_type: ptype
        } = el;


        // Master Div
        let p_itemMasterDiv = document.createElement("div");
        p_itemMasterDiv.setAttribute("class", "p_itemMasterDiv");


        // Discount Div
        let p_itemDiscountDiv = document.createElement("div");
        p_itemDiscountDiv.setAttribute("class", "p_itemDiscountDiv");
        if(psprice != 0){
            let p_discount = Math.ceil(((psprice - pprice)/psprice) * 100);
            p_itemDiscountDiv.innerHTML = `GET ${p_discount}% OFF ${p_redAsteriskCode}`;
        }
        else{
            p_itemDiscountDiv.textContent = "ON OFFER"
        }
        
        // Thumbnail Div
        let p_itemthumbnailDiv = document.createElement("p_itemthumbnailDiv");
        p_itemthumbnailDiv.setAttribute("class", "p_itemthumbnailDiv");

        let p_foodthumbnail = document.createElement("img");
        p_foodthumbnail.setAttribute("class", "p_foodthumbnail");
        p_foodthumbnail.src = pimage;

        if(ptype === "veg"){
            let p_vnvicon = document.createElement("img");
            p_vnvicon.setAttribute("class", "p_vnvicon");
            p_vnvicon.src = p_vegIcon;
            p_itemthumbnailDiv.append(p_foodthumbnail, p_vnvicon);
        }
        else if(ptype === "nonveg"){
            let p_vnvicon = document.createElement("img");
            p_vnvicon.setAttribute("class", "p_vnvicon");
            p_vnvicon.src = p_nonvegIcon;
            p_itemthumbnailDiv.append(p_foodthumbnail, p_vnvicon);
        }
        else{
            p_itemthumbnailDiv.append(p_foodthumbnail);
        }


        // Item Brand Name Div
        let p_itemBrandNameDiv = document.createElement("div");
        p_itemBrandNameDiv.setAttribute("class", "p_itemBrandNameDiv");
        p_itemBrandNameDiv.textContent = pbrand;

        // Item Name Div
        let p_itemNameDiv = document.createElement("div");
        p_itemNameDiv.setAttribute("class", "p_itemNameDiv");
        p_itemNameDiv.textContent = pname;

        // Item Rating Div
        let p_itemRatingDiv = document.createElement("div");
        p_itemRatingDiv.setAttribute("class", "p_itemRatingDiv");
        if(prating==""){
            prating = "4";
        }
        p_itemRatingDiv.innerHTML = `${prating} ${p_ratingStarIcon}`;

        // Item Quantity Select Div
        let p_itemQuantitySelectDiv = document.createElement("div");
        p_itemQuantitySelectDiv.setAttribute("class", "p_itemQuantitySelectDiv");

        if(punit === "pcs"){
            p_itemQuantitySelectDiv.textContent = `${ppcunit} pcs`;
        }
        else{
            let p_itemQuantitySelector = document.createElement("select");
            p_itemQuantitySelector.setAttribute("class", "p_itemQuantitySelector");

            for(let i=1; i<=4; i++){
                let value = `${i} ${punit} - Rs. ${pprice * i}`;

                let p_selectorOption = document.createElement("option");
                p_selectorOption.setAttribute("value", i);
                p_selectorOption.textContent = value;


                p_itemQuantitySelector.append(p_selectorOption);
            }

            p_itemQuantitySelectDiv.append(p_itemQuantitySelector);
        }


        // Item Price Delivery Div
        let p_itemPriceDeliveryDiv = document.createElement("p_itemPriceDeliveryDiv");
        p_itemPriceDeliveryDiv.setAttribute("class", "p_itemPriceDeliveryDiv");

        let p_itemPriceDiv = document.createElement("p_itemPriceDiv");
        p_itemPriceDiv.setAttribute("class", "p_itemPriceDiv");

        let p_MRP = document.createElement("p");
        p_MRP.textContent = "MRP";
        
        let p_itemStrikePrice = document.createElement("p");
        p_itemStrikePrice.setAttribute("class", "p_itemStrikePrice");
        if(psprice != 0)
            {p_itemStrikePrice.textContent = `Rs. ${psprice}`;}

        let p_itemPrice = document.createElement("p");
        p_itemPrice.setAttribute("class", "p_itemPrice");
        p_itemPrice.textContent = `Rs. ${pprice}`;

        p_itemPriceDiv.append(p_MRP, p_itemStrikePrice, p_itemPrice);

        let p_itemShippingInfoDiv = document.createElement("div");
        p_itemShippingInfoDiv.setAttribute("class", "p_itemShippingInfoDiv");

        p_itemShippingInfoDiv.innerHTML = `${p_truckIcon} Standard Delivery: Tomorrow 6:30AM-8:30PM`;

        let p_itemQtyCartDiv = document.createElement("div");
        p_itemQtyCartDiv.setAttribute("class", "p_itemQtyCartDiv");
        p_itemQtyCartDiv.textContent = "Qty";

        let p_itemQtyTextBox = document.createElement("input");
        p_itemQtyTextBox.setAttribute("class", "p_itemQtyTextBox");

        p_itemQtyTextBox.setAttribute("min", "0");
        p_itemQtyTextBox.setAttribute("max", "10");
        p_itemQtyTextBox.setAttribute("type", "number")
        p_itemQtyTextBox.setAttribute("value", "1");

        let p_itemAddCartBtn = document.createElement("button");
        p_itemAddCartBtn.setAttribute("class", "p_itemAddCartBtn");

        p_itemAddCartBtn.innerHTML = `ADD ${p_basketIcon}`;

        p_itemAddCartBtn.addEventListener("click", () => {
            p_addToCart(el, p_itemQtyTextBox);
        })

        p_itemQtyCartDiv.append(p_itemQtyTextBox, p_itemAddCartBtn);

        p_itemPriceDeliveryDiv.append(p_itemPriceDiv, p_itemShippingInfoDiv, p_itemQtyCartDiv);


        // Appending to master item div
        p_itemMasterDiv.append(p_itemDiscountDiv, 
            p_itemthumbnailDiv, 
            p_itemBrandNameDiv, 
            p_itemNameDiv,
            p_itemRatingDiv,
            p_itemQuantitySelectDiv,
            p_itemPriceDeliveryDiv
            );

        
            p_bestSellersDiv.append(p_itemMasterDiv);
    })

    appendToSwiper(p_bestSellersDiv);
}



// Utility Function to create 5 Items Div and append to slider

for(let i=0; i<bestSellersDB.length; i+=5){
    let p_bestSellersDiv = document.createElement("div");
    p_bestSellersDiv.setAttribute("id", "p_bestSellersDiv");

    let temp = bestSellersDB.slice(i, i+5);

    p_createItemsDiv(p_bestSellersDiv, temp);
}






// {
//     prod_name: "Chyawanprash - 2X Immunity",
//     prod_price: "281",
//     prod_strike_price: "375",
//     prod_thumbnail: "https://www.bigbasket.com/media/uploads/p/s/118412_16-dabur-chyawanprash-2x-immunity.jpg",
//     prod_price_unit: "kg",
//     prod_piece_unit: "",
//     prod_brand: "Dabur",
//     prod_rating: "3.8",
//     prod_type: "--"
//   }




/// Function Area To Add Item To Cart

let bigBasketCart = JSON.parse(localStorage.getItem("bigBasketCart")) || [];

function p_showCartNumber(data){
    let cartCountDiv = document.getElementById("m_cartCount");
    let totalItems = bigBasketCart.length;
    
    if(totalItems === 0){
        cartCountDiv.textContent = `No items`
    }
    else if(totalItems === 1){
        cartCountDiv.textContent = `1 item`
    }
    else if(totalItems >= 1){
        cartCountDiv.textContent = `${bigBasketCart.length} items`
    }
    
    // cartCountDiv.textContent = `${bigBasketCart.length} items`
}

p_showCartNumber(bigBasketCart);


function p_addToCart(data, text_qty){
    let new_cartObj = {};
    let {prod_name, prod_brand, prod_price, prod_strike_price, prod_thumbnail} = data;
    new_cartObj = {
        prod_name, prod_brand, prod_price, prod_strike_price, prod_thumbnail,
        prod_quantity : Number(text_qty.value)
    }

    if(bigBasketCart.length === 0)
        bigBasketCart.push(new_cartObj);
    else{
        let check = false;
        for(let item of bigBasketCart){
            if(item.prod_name === new_cartObj.prod_name){
                check = true;
                if(item.prod_quantity <= 15)
                    item.prod_quantity += Number(text_qty.value);
            }
        }
        if(!check) bigBasketCart.push(new_cartObj);
    }

    // console.log(bigBasketCart);
    localStorage.setItem("bigBasketCart", JSON.stringify(bigBasketCart));
    p_showCartNumber(bigBasketCart);
    window.location.reload(true);
}
