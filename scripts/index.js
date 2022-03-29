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