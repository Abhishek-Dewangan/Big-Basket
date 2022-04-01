import createFooter from "../components/footer.js"

let footer = document.getElementById("footer");
footer.innerHTML = createFooter()








let data = JSON.parse(localStorage.getItem('product'));


let search_query = localStorage.getItem("search_query");

let searchResultsDB = [];

const search = (query) => {
    searchResultsDB = data.filter((el) => {
      return (
        el.prod_category.toLowerCase().includes(query.toLowerCase()) ||
        el.prod_name.toLowerCase() == query.toLowerCase() ||
        el.prod_brand.toLowerCase().includes(query.toLowerCase())
      );
    });
    // console.log("search Results", abhi);
};

search(search_query);




// Function to create Items Div

// let foodGrainsDB = JSON.parse(localStorage.getItem("foodGrainsDB")) || [];

// console.log(foodGrainsDB);

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

        
        container.append(p_itemMasterDiv);
    })
}

p_createItemsDiv(p_productsDisplayGrid, searchResultsDB);




function p_showTotalItems(items){
    let p_totalItems = document.getElementById("p_totalItems");
    p_totalItems.textContent = `Search results for '${search_query}' (${items.length})`;
}

p_showTotalItems(searchResultsDB);

// Utility Area to Create Sort Function and display sorted data
let p_sorter = document.getElementById("p_foodgrainSorter");
p_sorter.addEventListener("change", () => {
    p_sortData(p_sorter.value);
})


const p_sortData = (sortValue) => {
    let tempFoodDB = searchResultsDB.slice();
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

    p_showTotalItems(tempFoodDB);
        
}



// Utitlity Function to get list of all brands

let p_prodBrandList = {};

searchResultsDB.forEach((el) => {
    p_prodBrandList[el.prod_brand] = 1;
})

p_prodBrandList = Object.keys(p_prodBrandList);

// console.log("Product Brands", p_prodBrandList);

let p_brandFilters = [];

const p_filterByBrandFunction = (filters) => {
    let p_filteredFoodGrains = searchResultsDB.slice();

    p_filteredFoodGrains = p_filteredFoodGrains.filter((el) => {
        if(filters.includes(el.prod_brand)){
            return el;
        }
    })

    // console.log("Filtered", p_filteredFoodGrains);
    if(p_filteredFoodGrains.length === 0){
        p_filteredFoodGrains = searchResultsDB.slice();
    }

    p_createItemsDiv(p_productsDisplayGrid, p_filteredFoodGrains);

    p_showTotalItems(p_filteredFoodGrains);
}


// Creating Food Preferences

let p_foodPrefFilters = [];


const p_filterByFoodPreferencesFunction = (data) => {
    let p_filterData = searchResultsDB.slice();
    // console.log("filters", data);
    p_filterData = searchResultsDB.filter((el) => {
        if(data.includes(el.prod_type)){
            return el;
        }
    })

    if(data.length === 0){
        p_filterData = searchResultsDB.slice();
    }

    // console.log(p_filterData);

    p_createItemsDiv(p_productsDisplayGrid,  p_filterData);

    p_showTotalItems(p_filterData);

}

// Funtion Area to Filter by Price

// p_priceFilters = ["Less Than Rs. 100", "Rs. 100 - Rs. 500", "More Than Rs. 500"];

let p_filterPriceSelected = [];

const p_filterByPriceFunction = (filters) => {
    // console.log(filters);
    let p_filteredItems = [];

    if(filters.includes("Less Than Rs. 100")){
        searchResultsDB.forEach((el) => {
            if(el.prod_price <= 100){
                p_filteredItems.push(el);
            }
        })
    }

    if(filters.includes("Rs. 100 - Rs. 500")){
        searchResultsDB.forEach((el) => {
            if(el.prod_price > 100 && el.prod_price <= 500){
                p_filteredItems.push(el);
            }
        })
    }

    if(filters.includes("More Than Rs. 500")){
        searchResultsDB.forEach((el) => {
            if(el.prod_price > 500){
                p_filteredItems.push(el);
            }
        })
    }

    if(filters.length === 0){
        p_filteredItems = searchResultsDB.slice();
    }

    p_createItemsDiv(p_productsDisplayGrid,  p_filteredItems);

    p_showTotalItems(p_filteredItems);

    // console.log(p_filteredItems);
}


// Function Area to Filter By Discount Percentage

let p_discountFilters = [];

const p_filterByDiscountFunction = (filters) => {
    let p_filterDiscountedData = [];
    console.log(filters);
    let tempDB = searchResultsDB.slice();

    // "Upto 10%", "10% - 25%", "More Than 25%"

    if(filters.includes("Upto 10%")){
        tempDB.forEach((el) => {
            if(el.prod_strike_price !== 0){
                let p_elDiscount = Math.ceil((el.prod_strike_price - el.prod_price)/el.prod_strike_price * 100);
                if(p_elDiscount <= 10){
                    p_filterDiscountedData.push(el);
                }
            }
        })
    }

    if(filters.includes("10% - 25%")){
        tempDB.forEach((el) => {
            let p_elDiscount = Math.ceil((el.prod_strike_price - el.prod_price)/el.prod_strike_price * 100);
            if(p_elDiscount > 10 && p_elDiscount <= 25){
                p_filterDiscountedData.push(el);
            }
        })
    }

    if(filters.includes("More Than 25%")){
        tempDB.forEach((el) => {
            let p_elDiscount = Math.ceil((el.prod_strike_price - el.prod_price)/el.prod_strike_price * 100);
            if(p_elDiscount >= 25){
                p_filterDiscountedData.push(el);
            }
        })
    }

    if(filters.length === 0){
        p_filterDiscountedData = tempDB;
    }

    p_createItemsDiv(p_productsDisplayGrid,  p_filterDiscountedData);

    p_showTotalItems(p_filterDiscountedData);

    // console.log(p_filterDiscountedData);
}



// Utility Function to create Filter Check boxes

const p_createCheckBoxFunction = (container, data, type) => {
    container.innerHTML = null;
    let p_cname = type;
    data.forEach((el) => {
        let p_label = document.createElement("label");
        p_label.setAttribute("class", "p_checklabel");
        
        let p_checkbox = document.createElement("input");
        p_checkbox.setAttribute("class", "p_checkbox");
        p_checkbox.setAttribute("type", "checkbox");
        p_checkbox.setAttribute("value", el);
        p_checkbox.setAttribute("name", p_cname);
        p_checkbox.addEventListener("change", (event) =>{
            if(event.target.checked){
                if(event.target.name === "brand"){
                    p_brandFilters.push(event.target.value);
                    p_filterByBrandFunction(p_brandFilters);
                }

                if(event.target.name === "food"){
                    if(event.target.value === "Vegetarian"){
                        p_foodPrefFilters.push("veg");
                    }
                    else{
                        p_foodPrefFilters.push("nonveg");
                    }
                    // console.log(p_foodPrefFilters);
                    p_filterByFoodPreferencesFunction(p_foodPrefFilters);
                }

                if(event.target.name === "price"){
                    p_filterPriceSelected.push(event.target.value);
                    p_filterByPriceFunction(p_filterPriceSelected);
                }

                if(event.target.name === "discount"){
                    p_discountFilters.push(event.target.value);
                    p_filterByDiscountFunction(p_discountFilters);
                }
                
            }
            else{
                if(event.target.name === "brand"){
                    p_brandFilters = p_brandFilters.filter((el) => {
                        if(el !== event.target.value){
                            return el;
                        }
                    });
                    p_filterByBrandFunction(p_brandFilters);
                }

                if(event.target.name === "food"){
                    p_foodPrefFilters = p_foodPrefFilters.filter((el) => {
                        // console.log(event.target.value)
                        // console.log(el[0]);
                        if(el[0] !== event.target.value.toLowerCase()[0]){
                            return el;
                        }
                    })

                    // console.log(p_foodPrefFilters);
                    p_filterByFoodPreferencesFunction(p_foodPrefFilters);
                }

                if(event.target.name === "price"){
                    p_filterPriceSelected = p_filterPriceSelected.filter((el) => {
                        if(el !== event.target.value){
                            return el;
                        }
                    })
                    // console.log("Unchecked", event.target.value);
                    p_filterByPriceFunction(p_filterPriceSelected);
                }

                if(event.target.name === "discount"){
                    p_discountFilters = p_discountFilters.filter((el) => {
                        if(el !== event.target.value){
                            return el;
                        }
                    })
                    p_filterByDiscountFunction(p_discountFilters);
                }
            }
        })

        p_label.append(p_checkbox, el);

        container.append(p_label);
    })
};

let p_brandCheckbox = document.getElementById("p_brandCheckbox");

p_createCheckBoxFunction(p_brandCheckbox, p_prodBrandList, "brand");

// Creating Food Preferences Checkboxes

let p_foodPref = ["Vegetarian", "Non-Vegetarian"];

let p_foodPrefCheckbox = document.getElementById("p_foodPrefCheckbox");

p_createCheckBoxFunction(p_foodPrefCheckbox, p_foodPref, "food");


// Creating Price Filter

let p_foodPriceCheckbox = document.getElementById("p_foodPriceCheckbox");

let p_priceFilters = ["Less Than Rs. 100", "Rs. 100 - Rs. 500", "More Than Rs. 500"];

p_createCheckBoxFunction(p_foodPriceCheckbox, p_priceFilters, "price");


// Creating Discount Filter

let p_foodDiscountCheckbox = document.getElementById("p_foodDiscountCheckbox");

let p_discFilters = ["More Than 25%", "10% - 25%", "Upto 10%",];

p_createCheckBoxFunction(p_foodDiscountCheckbox, p_discFilters, "discount");



// Function To Reset All Filters

document.getElementById("p_resetButton").addEventListener("click", () =>{
    let checkboxes = document.querySelectorAll(".p_checkbox");

    for(let i=0; i<checkboxes.length; i++){
        checkboxes[i].checked = false;
    }

    p_createItemsDiv(p_productsDisplayGrid,  foodGrainsDB);

    p_showTotalItems(foodGrainsDB);

})





/* Object skeleton
{
    "prod_name": "Fortune Premium Kachi Ghani Pure Mustard Oil",
    "prod_price": "212",
    "prod_strike_price": "0",
    "prod_thumbnail": "https://www.bigbasket.com/media/uploads/p/s/276756_8-fortune-fortune-premium-kachi-ghani-pure-mustard-oil.jpg",
    "prod_price_unit": "litre",
    "prod_piece_unit": "",
    "prod_brand": "Fortune",
    "prod_rating": "4.1",
    "prod_type": "veg"
} */

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
}
