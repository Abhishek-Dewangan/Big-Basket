import { createHeader, createMobileHeader } from "../components/header.js";

// Creating Header Navbar
let header = document.getElementById("header");

let response = await createHeader();

header.innerHTML = response;

// Creating Mobile Header Navbar

let mediaHeader = document.getElementById("mediaHeader");

let mobile_res = await createMobileHeader();

mediaHeader.innerHTML = mobile_res;

let logo = document.getElementById("mlogo");
logo.addEventListener("click", () => {
    window.location.href = "index.html"; 
})

let loginIcon = document.getElementById("mlogin");
loginIcon.addEventListener("click", () => {
    window.location.href = "login.html";
})


let all_category = document.querySelectorAll(".p_category");

for(let i=0; i<all_category.length; i++){
    all_category[i].addEventListener("mouseenter", (event) =>{
        // console.log(event.target.name);
        createSubMenu(event.target.name);
    })
}



let sub_Menu_List = {
    fruits: {
        menu1 : [
            "Fresh Vegetables", "Herbs & Seasonings", "Fresh Fruits", "Organic Fruits & Vegetables", "Cuts & Sprouts", "Exotic Fruits & Veggies",
            "Flower Bouquets, Bunches",
        ],
        menu2 : [
            "Potato, Onion & Tomato", "Cucumber & Capsicum", "Leafy Vagetables", "Root Vegetables", "Beans, Brinjals & Okra", "Cabbage & Cauliflower",
            "Gourd, Pumpkin, Drumstick",
            "Speciality"
        ],
        menu3: [
            "Popular Searches", "Potato", "Onion", "Tomato", "Cabbage"
        ],
        menu4: "https://www.bigbasket.com/media/uploads/banner_images/L2-YXPL254-220x460-25thmar.jpg"
    },
    foodgrains: {
        menu1: ["Atta, Flours & Sooji", "Dals & Pulses", "Rice & Rice Products", "Salt, Sugar & Jaggery", "Organic Staples", "Edible Oils & Ghee", "Masalas & Spices", "Dry Fruits"],
        menu2: ["Atta Whole Wheat", "Sooji, Maida & Besan", "Rice & Other Flours"],
        menu3: ["Popular Searches", "Atta", "Maida", "Besan", "Idli Rava"],
        menu4: "https://www.bigbasket.com/media/uploads/banner_images/CXNP5637_220x460_301021.jpg"
    },
    bakery: {
        menu1: ["Dairy", "Breads & Buns", "Gourmet Breads", "Non Dairy", "Cookies, Rusk & Khari", "Ice Creams & Desserts", "Cakes & Pastries", "Bakery Snacks"],
        menu2: ["Milk", "Paneer, Tofu & Cream", "Condensed Powered Milk", "Curd", "Butter & Margarine", "Cheese", "Buttermilk & Lassi", "Flavoured Soya Milk", "Yogurt & Shrikhand"],
        menu3: ["Popular Searches", "Milk", "Paneer", "Curd", "Butter", "Cheese", "Amul"],
        menu4: "https://www.bigbasket.com/media/uploads/banner_images/L1-YXPL500-220x460-25thmar.jpg"
    },
    eggs: {
        menu1: ["Eggs", "Poultry", "Sausages, Bacon & Salami", "Fish & Seafood", "Mutton & Lamb", "Marinades", "Pork & Other Meats"],
        menu2: ["Farm Eggs", "Protein Eggs", "Country Eggs", "Other Eggs"],
        menu3: ["Popular Searches", "Eggs", "Brown Eggs", "Fresho Eggs", "Lamb Meat"],
        menu4: "https://www.bigbasket.com/media/uploads/banner_images/CXNP9555_220x460_140322.jpg"
    },
    snacks: {
        menu1: ["Noodles, Pasta, Vermicelli", "Biscuits & Cookies", "Frozen Veggies & Snacks", "Snacks & Namkeens", "Breakfast Cereals", "Spreads, Sauces, Ketchup", "Chocolates & Candles", "Ready To Cook & Eat", "Pickles & Chutney", "Indian Mithai"],
        menu2: ["Instant Noodles", "Vermicelli", "Hakka Noodles", "Cup Noodles", "Instant Pasta", "Pasta & Macaroni"],
        menu3: ["Popular Searches", "Maggi", "Noodles", "Pasta", "Bambino", "Cup Noodles"],
        menu4: "https://www.bigbasket.com/media/uploads/banner_images/L2-YXPL174-220x460-25thmar.jpg"
    },
    beauty: {
        menu1: ["Oral Care", "Health & Medicine", "Feminine Hygiene", "Bath & Hand Wash", "Hair Care", "Men's Grooming", "Skin Care", "Fragrances & Deos", "Makeup"],
        menu2: ["Toothpaste", "Mouthwash", "Toothbrush", "Electric Toothbrush", "Floss & Tounge Cleaner"],
        menu3: ["Popular Searches", "Colgate", "Toothpaste", "Sensodyne", "Toothbrush", "Patanjali"],
        menu4: "https://www.bigbasket.com/media/uploads/banner_images/L1-YXPL161-220x460-25thmar.jpg"
    },
    cleaning: {
        menu1: ["Detergents & Dishwash", "All Purpose Cleaners", "Car & Shoe Care", "Disposables, Garbage Bags", "Fresheners & Repellents", "Mops, Brushes & Scrubs", "Party & Festive Needs"],
        menu2: ["Detergent Powder Liquid", "Fabric Pre Post Wash", "Dishwash Bars & Powders", "Dishwash Liquids & Pastes", "Detergent Bars"],
        menu3: ["Popular Searches", "Vim", "Comfort", "Surf Excel", "Vim Bar", "Surf", "Tide"],
        menu4: "https://www.bigbasket.com/media/uploads/banner_images/L2_YXPL1390_220x460_25thmar.jpg"
    },
    kitchen: {
        menu1: ["Pet Food & Accessories", "Appliances & Electricals", "Kitchen Accessories", "Steel Utensils", "Cookware & Non-Stick", "Gardening", "Storage & Accessories", "Flask & Casserole", "Crockery", "Bakeware"],
        menu2: ["Pet Meals & Treats", "Pet Cleaning & Grooming", "Pet Feeding Support", "Pet Toys", "Pet Collars & Leashes"],
        menu3: ["Popular Searches", "Pedigree", "Whiskas", "Cat Food", "Dog Food"],
        menu4: "https://www.bigbasket.com/media/uploads/banner_images/Knife-board-460X220.jpg"
    },
    beverages:{
        menu1: ["Water", "Energy & Soft Drinks", "Health Drink Supplement", "Coffee", "Tea", "Fruit Juices"],
        menu2: ["Packaged Water", "Spring Water"],
        menu3: ["Popular Searches", "Bisleri", "Mineral Water", "Kinley", "Aquafina"],
        menu4: "https://www.bigbasket.com/media/uploads/banner_images/L2_YXPL1036_220x460_25thmar.jpg"
    },
    gourmet: {
        menu1: ["Oils & Vinegar", "Dairy & Cheese", "Sauces, Spreads & Dips", "Snacks, Dry Fruits, Nuts", "Pasta, Soup & Noodles", "Cereals & Breakfast", "Drinks & Beverages", "Chocolates & Biscuits", "Cooking & Baking Needs", "Tinned & Processed Food"],
        menu2: ["Extra Virgin Olive Oil", "Canola & Rapeseed Oil", "Pure Pomace Olive Oil", "Organic & Cold Press Oil", "Regular & White Vinegar"],
        menu3: ["Popular Searches","Olive Oil", "Oil", "Apple Cider Vinegar", "Cold Pressed Oil", "Vinegar", "Figaro Olive Oil"],
        menu4: "https://www.bigbasket.com/media/uploads/banner_images/L1-YXPL1546-220x460-25thmar.jpg"
    },
    babycare: {
        menu1: ["Diapers & Wipes", "Baby Bath & Hygiene", "Baby Food & Formula", "Mothers & Maternity", "Feeding & Nursing", "Baby Accessories"],
        menu2: ["Diapers", "Baby Wipes", "Nappies & Rash Cream"],
        menu3: ["Popular Searches", "Pampers", "Huggies", "Johnson & Johnson"],
        menu4: "https://www.bigbasket.com/media/uploads/banner_images/L2_YXPL1391_220x460_25thmar.jpg"
    }
};

let submenu1 = document.querySelector("#p_subCategory1");
let submenu2 = document.querySelector("#p_subCategory2");
let submenu3 = document.querySelector("#p_subCategory3");
let submenu4 = document.querySelector("#p_subCategory4");

createSubMenu("fruits");

function createSubMenu(category){
    if(sub_Menu_List[category] !== undefined){

        // console.log(sub_Menu_List[category].menu1);
        createSubCategoryMenu(submenu1, sub_Menu_List[category].menu1);
        createSubCategoryMenu(submenu2, sub_Menu_List[category].menu2);
        createSubCategoryMenu(submenu3, sub_Menu_List[category].menu3);

        let p_catImage = document.createElement("img");
        p_catImage.setAttribute("class", "p_catImage")
        p_catImage.src = sub_Menu_List[category].menu4;
        submenu4.innerHTML = null;
        submenu4.append(p_catImage);
    }
}

function createSubCategoryMenu(container, data){
    container.innerHTML = null;
    let sublist = document.createElement("ul");
    sublist.setAttribute("class", "p_sublist");
    data.forEach((el) => {
        let item = document.createElement("li");
        item.textContent = el;
        if(el === "Popular Searches") item.setAttribute("class", "p_popularHeader")
        sublist.append(item);
    })
    container.append(sublist);
}

let p_categoryMegaContainer = document.getElementById("p_categoryMegaContainer");

let p_dropdown = document.getElementById("p_categoryDropdown");
p_dropdown.addEventListener("mouseenter", () => {
    p_categoryMegaContainer.style.display = "block";
})

p_dropdown.addEventListener("mouseleave", () => {
    p_categoryMegaContainer.style.display = "none";
})

p_categoryMegaContainer.addEventListener("mouseenter", () => {
    p_categoryMegaContainer.style.display = "block";
})

p_categoryMegaContainer.addEventListener("mouseleave", () => {
    p_categoryMegaContainer.style.display = "none";
})




// let p_dropdownIcon = document.getElementById("p_dropdownIcon")

p_dropdown.addEventListener("click", () => {
    if(p_categoryMegaContainer.style.display === "block"){
        p_categoryMegaContainer.style.display = "none";
    }
    else{
        p_categoryMegaContainer.style.display = "block";
    }
    // p_categoryMegaContainer.classList.toggle('.p_categoryBox-active');
})



// Search Functionality

let p_searchBox = document.querySelector(".minputsearch");

p_searchBox.addEventListener("keypress", (event) => {
    if(event.code === "Enter"){
        localStorage.setItem("search_query", p_searchBox.value);
        window.location.href = "search_results.html";
    }
})

let p_searchBtn = document.querySelector(".msearchbtn");
p_searchBtn.addEventListener("click", () => {
    localStorage.setItem("search_query", p_searchBox.value);
    window.location.href = "search_results.html";
})

// Function to search if mobile navbar is on

let smallSearchBox = document.getElementById("mobileSearchbox");

smallSearchBox.addEventListener("keypress", (event) => {
    if(event.code === "Enter"){
        let searchQuery = smallSearchBox.value;
        localStorage.setItem("search_query", searchQuery);
        window.location.href = "search_results.html";
    }
})







// Function on scroll

let upperNav = document.getElementById("mupper");
let lowerNav = document.getElementById("p_categoryHeaders");
let middleNav = document.getElementById("mmiddle");

let bbLogoIcon = document.querySelector("#mlogoimg");

let bbSmallIcon = "https://www.bbassets.com/static/v2531/custPage/build/content/img/bb-icon.png";
let bbLargeIcon = "https://d3t4kadguw9jug.cloudfront.net/uploads/stores/big-basket-logopng-1562824429.png";

let basketContainer = document.getElementById("sbaskMain");

let searchDiv = document.querySelector(".mtopmerg");
// let smallNavbar = document.getElementById("small_navbar_container");

window.addEventListener("scroll", () => {
    // Check for css media queries
    if(window.innerWidth >= 700){
        if(window.scrollY > 0){
            upperNav.style.display = "none";
            lowerNav.style.display = "none";
            bbLogoIcon.src = bbSmallIcon;
            bbLogoIcon.style.width = "50px";
            bbLogoIcon.style.height = "50px";
            // middleNav.style.marinTop = "-30px";
            header.classList.add("header-active");
            header.style.height = "80px";
            basketContainer.style.top = "10%";
            searchDiv.style.marginTop = "5px";
            // basketContainer.classList.add(".scroll-active");
        }
    
        if(window.scrollY === 0){
            upperNav.style.display = "block";
            lowerNav.style.display = "block";
            bbLogoIcon.src = bbLargeIcon;
            bbLogoIcon.style.width = "100%";
            bbLogoIcon.style.height = "100%";
            // middleNav.style.marinTop = "-30px";
            header.style.height = "210px";
            header.classList.remove("header-active");
            basketContainer.style.top = "18%";
        }
    }
   
})



// Function on click and close category dropdown

window.addEventListener("click", (event) => {
    if(p_categoryMegaContainer.style.display === "block"){
        if(event.target !== p_categoryMegaContainer){
            p_categoryMegaContainer.style.display = "none";
        }
    }
})



// Toggle On Mobile Menu

let menuBtn = document.querySelector("#mobileMenuIcon");
let menuList = document.querySelector(".mobileLinksDiv");

menuBtn.addEventListener("click", () => {
    menuList.classList.toggle('mobileLinksDiv-active');
})


//////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////

// Basket Display Functionality

let basketDiv = document.getElementById("mbasketdiv")
let basket = document.getElementById("sbaskMain");

if(basket != undefined){
    basketDiv.addEventListener("mouseenter", () => {
        let bigbasketCart = JSON.parse(localStorage.getItem("bigBasketCart")) || [];
        console.log(bigbasketCart.length);
        if(bigbasketCart.length > 0)
            basket.style.display = "block";
    })
    
    basketDiv.addEventListener("mouseleave", () => {
        basket.style.display = "none";
    })
    
    basket.addEventListener("mouseenter", () => {
        basket.style.display = "block";
    })
    
    basket.addEventListener("mouseleave", () => {
        basket.style.display = "none";
    })

    let checkoutBtn = document.getElementById("sCheckoutBtn");
        checkoutBtn.addEventListener("click", () => {
            window.location.href = "sCheckout.html";
    })
}
else{
    basketDiv.addEventListener("click", () => {
        window.location.href = "sCheckout.html";
    })
}











// Adding functionality to change login user name

// let activeUser = {
//     loginStatus : false,
//     userName : "Abinash",
// }

let user = JSON.parse(localStorage.getItem("loginUser")) || {};

// localStorage.setItem("loginUser", JSON.stringify(activeUser));

// let user = JSON.parse(localStorage.getItem("loginUser"));

if(user.loginStatus){
    document.getElementById("mlogin").textContent = `Welcome, ${user.userName}!`
}