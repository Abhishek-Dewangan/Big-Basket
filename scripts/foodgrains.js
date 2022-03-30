import createFooter from '../components/footer.js';

let footer = document.getElementById("footer");
footer.innerHTML = createFooter();


/* BOOTSTRAP CAROUSEL AUTOPLAY PART DONT TOUCH */

$('.carousel').carousel({
    interval: 2000
})



// Function to create Items Div

let foodGrainsDB = JSON.parse(localStorage.getItem("foodGrainsDB")) || [];

console.log(foodGrainsDB);

let p_productsDisplayGrid = document.getElementById("p_productsDisplayGrid");


let p_redIconUrl = "https://upload.wikimedia.org/wikipedia/commons/8/8d/Eo_circle_red_asterisk.svg";

let p_redAsteriskCode = `<img class="p_redAsterisk" src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Eo_circle_red_asterisk.svg" alt="">`;

let p_nonvegIcon = "https://freesvg.org/img/1531813245.png";

let p_vegIcon = "https://freesvg.org/img/1531813273.png";

let p_ratingStarIcon = `<i class="fa-solid fa-star"></i>`;

let p_truckIcon = `<i class="fa-solid fa-truck"></i>`;

let p_basketIcon = `<i class="fa-solid fa-basket-shopping"></i>`;


const p_createItemsDiv = (container, data) => {
    container.innerHTML = null;
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

        
        container.append(p_itemMasterDiv);
    })
}

p_createItemsDiv(p_productsDisplayGrid, foodGrainsDB);




// Utility Area to Create Sort Function and display sorted data
let p_sorter = document.getElementById("p_foodgrainSorter");
p_sorter.addEventListener("change", () => {
    p_sortData(p_sorter.value);
})


const p_sortData = (sortValue) => {
    let tempFoodDB = foodGrainsDB.slice();
    if(sortValue !== "--"){
        if(sortValue === "p_pop"){
            // sort by ratings
            tempFoodDB.sort((a,b) => {
                return b.prod_rating - a.prod_rating;
            })
        }
        else if(sortValue === "p_l2h"){
            // sort by price low to high
            tempFoodDB.sort((a,b) => {
                return a.prod_price - b.prod_price;
            })
        }
        else if(sortValue === "p_h2l"){
            // sort by price high to low
            tempFoodDB.sort((a,b) => {
                return b.prod_price - a.prod_price;
            })
        }
        else if(sortValue === "p_alpha"){
            // sort by alphabetical a-z
            tempFoodDB.sort((a,b) => {
                let pNameA = a.prod_name.trim().toLowerCase();
                let pNameB = b.prod_name.trim().toLowerCase();

                if(pNameA < pNameB){
                    return -1;
                }

                if(pNameA > pNameB){
                    return 1;
                }
                return 0;
            })
        }
        else if(sortValue === "p_disch2l"){
            // sort by discount more to low
            tempFoodDB.sort((a,b) => {
                let pDiscountA = Math.ceil(((a.prod_strike_price - a.prod_price)/a.prod_strike_price) * 100);
                let pDiscountB = Math.ceil(((b.prod_strike_price - b.prod_price)/b.prod_strike_price) * 100);
                return pDiscountB - pDiscountA;
            })
        }
    }

    p_createItemsDiv(p_productsDisplayGrid, tempFoodDB);
        
}



// Utitlity Function to get list of all brands

let p_prodBrandList = foodGrainsDB.filter((el) => {
    return (el.prod_brand !== "");
})

console.log("Product Brands", p_prodBrandList);




