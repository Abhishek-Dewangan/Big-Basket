import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

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


