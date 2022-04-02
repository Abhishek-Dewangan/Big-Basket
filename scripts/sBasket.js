let baskArr = JSON.parse(localStorage.getItem("bigBasketCart"))
var sbMyTotalSavings = Number(localStorage.getItem("sbTotalSavings"))
console.log(sbMyTotalSavings)

const displayBaskItems = (event)=>{
    document.querySelector('#sBask').innerHTML = null;
    event.map((elem, index)=>{
        //First div creation and appending. Here we append product image
        let firstdiv = document.createElement("div");
        firstdiv.setAttribute("id", "sfirstDiv")
        let baskImg = document.createElement("img");
        baskImg.src = elem.prod_thumbnail;

        // secondDiv creation and appending.
        let secondDiv = document.createElement("div");
        secondDiv.setAttribute("id", "ssecondDiv")


        let baskCat = document.createElement("p");
        baskCat.setAttribute("id","sbaskCat")
        baskCat.innerText = elem.prod_brand;


        let baskTit = document.createElement("p")
        baskTit.setAttribute("id", "sbaskTit")
        baskTit.innerText = elem.prod_name;


        let secondSub = document.createElement("div")
        secondSub.setAttribute("id", "sSecondSub")
        let reqPqty = document.createElement("p")
        reqPqty.setAttribute("id","sreqPqty")
        reqPqty.innerText = elem.prod_quantity;


        let baskAmount = document.createElement("p")
        baskAmount.setAttribute("id", "sbaskAmount")
        baskAmount.innerHTML = ` x ${elem.prod_price}`
        secondSub.append(reqPqty,baskAmount)
        secondDiv.append(baskCat,baskTit,secondSub)
        //Second Div creation and appending completed
        

       
        
        
        
        //ThirdDiv creation and appending
        let thirdDiv = document.createElement("div");
        thirdDiv.setAttribute("id","sthirdDiv")

        let baskQty = document.createElement("p");
        baskQty.setAttribute("id","sreqQuant")
        baskQty.innerText = elem.prod_quantity;
        baskQty.setAttribute("id","sbaskQty")



         ///  Changing Order so to pass div

        let baskPrice = document.createElement("p");
        baskPrice.setAttribute("id","sbaskPrice")
        baskPrice.innerText = `Rs.${elem.prod_price * elem.prod_quantity}`

        let baskSaved = document.createElement("p");
        baskSaved.setAttribute("id","sbaskSaved")

        //Calculating savings of each product and appending it
        let sbMySavings = ((elem.prod_strike_price - elem.prod_price)*(elem.prod_quantity)).toFixed(2)
        sbMySavings = (sbMySavings < 0) ? 0 : sbMySavings;
        
        baskSaved.innerText = `Saved Rs.${sbMySavings}`

        ////

        //Creating Minus button using fontawesome
        let mdiv = document.createElement("div");
        mdiv.setAttribute("id","smdiv")
        mdiv.innerHTML = `<i class="fa-solid fa-circle-minus"></i>`
        //Adding event listener to minus button
        mdiv.addEventListener("click",()=>{

            p_reduceQuantity(index, baskPrice, baskSaved);
            baskQty.innerText = Number(baskQty.innerText) - 1;
            reqPqty.textContent = Number(reqPqty.textContent) - 1;
            // if(baskQty.innerText ==1){
            //     baskArr.splice(baskArr.indexOf(elem),1);
            //     localStorage.setItem("sbaskTotalPrice",Number(total))
            //     document.querySelector("#stotalPrice").innerText = total;
            //     localStorage.setItem("bigBasketCart", JSON.stringify(baskArr));
            //     window.location.reload(true)
            // }
            // else{
            //     //updating product quantity and appending it to wherever needed
            //     elem.prod_quantity = parseInt(elem.prod_quantity) - 1
            //     baskQty.innerText = elem.prod_quantity;
            //     reqPqty.innerText = elem.prod_quantity;

            //     //Updating savings of each item when clicked on Minus button
            //     sbMySavings = ((elem.prod_strike_price - elem.prod_price)*(baskQty.innerText)).toFixed(2)
            //     baskSaved.innerText = `Saved Rs.${sbMySavings}`

            //     //Updating Total Savings got from all the items savings and if needed to store in localStorage just uncomment the localSorage.setItem
            //     sbMyTotalSavings = sbMyTotalSavings - Number(elem.prod_strike_price - elem.prod_price)
            //     // localStorage.setItem("sbTotalSavings",Number(sbMyTotalSavings))

            //     //Updating total price of all products and if needed to store it in localStorage just uncomment the localStorage.setItem
            //     total = (total - Number(elem.prod_price));
            //     document.querySelector("#stotalPrice").innerText = total;
            //     // localStorage.setItem("sbaskTotalPrice",Number(total))     
            // } 
        })
        //Creating Plus button using fontawesome
        let pdiv = document.createElement("div");
        pdiv.innerHTML = `<i class="fa-solid fa-circle-plus"></i>`
        pdiv.setAttribute("id","spdiv")
        //Adding event listener to Plus button
        pdiv.addEventListener("click",() =>{

            p_increaseQuantity(index, baskPrice, baskSaved);
            baskQty.innerText = Number(baskQty.innerText) + 1;
            reqPqty.textContent = Number(reqPqty.textContent) + 1;

            // elem.prod_quantity = parseInt(elem.prod_quantity) + 1
            
            // reqPqty.innerText = elem.prod_quantity;
           
            // //Updating savings of each item when clicked on Minus button
            // sbMySavings = ((elem.prod_strike_price - elem.prod_price)*(baskQty.innerText)).toFixed(2)
            // baskSaved.innerText = `Saved Rs.${sbMySavings}`
            
            // //Updating Total Savings got from all the items savings and if needed to store in localStorage just uncomment the localSorage.setItem
            // sbMyTotalSavings = sbMyTotalSavings + Number(elem.prod_strike_price - elem.prod_price)
            // // localStorage.setItem("sbTotalSavings",Number(sbMyTotalSavings))

            // //Updating total price of all products and if needed to store it in localStorage just uncomment the localStorage.setItem
            // total = total + Number(elem.prod_price);
            // document.querySelector("#stotalPrice").innerText = total;
            // localStorage.setItem("sbaskTotalPrice",Number(total))   
        })
        thirdDiv.append(mdiv,baskQty,pdiv)
        //ThirdDiv append completed



        //FourthDiv creation
        let fourthDiv = document.createElement('div');
        fourthDiv.setAttribute("id", "sfourthDiv")

        // let baskPrice = document.createElement("p");
        // baskPrice.setAttribute("id","sbaskPrice")
        // baskPrice.innerText = `Rs.${elem.prod_price}`

        // let baskSaved = document.createElement("p");
        // baskSaved.setAttribute("id","sbaskSaved")

        // //Calculating savings of each product and appending it
        // let sbMySavings = ((elem.prod_strike_price - elem.prod_price)*(baskQty.innerText)).toFixed(2)
        // baskSaved.innerText = `Saved Rs.${sbMySavings}`
        fourthDiv.append(baskPrice,baskSaved)
        //FourthDiv append completed;


        //Created Remove button here i.e., name given as  "X" for Remove button
        let baskX = document.createElement("p")
        baskX.innerText = "X"
        baskX.setAttribute("id","sbaskX")

        //Adding Event Listener to Remove button
        baskX.addEventListener("click",()=>{
            baskArr.splice(baskArr.indexOf(elem),1);
            localStorage.setItem("bigBasketCart", JSON.stringify(baskArr));
            // window.location.reload(true)
            displayBaskItems(baskArr);
            p_calculateTotalPrice();
            p_showCartNumber(baskArr);
        })
        firstdiv.append(baskImg,secondDiv,thirdDiv,fourthDiv,baskX)
        document.querySelector('#sBask').append(firstdiv)  
    })
}
//Calling the function to display the cart
displayBaskItems(baskArr)


//Calculating total and appending it 
var total = baskArr.reduce(function(acc,elem){
    return (acc+Number(elem.prod_price))
},0)
document.querySelector("#stotalPrice").innerText = total


//Giving functionality to Verify&CheckOut button
document.querySelector("#sCheckoutBtn").addEventListener("click",()=>{
    window.location.href = "sCheckout.html"
})





/// Quantity Increase/Decrease Functionality Starts 

function p_reduceQuantity(index, baskPrice, baskSaved){
    let item = baskArr[index];

    if(item.prod_quantity === 1){
        baskArr.splice(index, 1);
        displayBaskItems(baskArr);
    }
    else{
        item.prod_quantity -= 1;
        baskPrice.textContent = `Rs. ${item.prod_price * item.prod_quantity}`;
        // baskSaved.textContent = `Saved Rs. ${((item.prod_strike_price - item.prod_price) * item.prod_quantity).toFixed(2)}`;
    }

    if(item.prod_strike_price == 0){
        baskSaved.textContent = `Saved Rs. 0`;
    }
    else
        baskSaved.textContent = `Saved Rs. ${((item.prod_strike_price - item.prod_price) * item.prod_quantity).toFixed(2)}`;

    p_calculateTotalPrice();

    localStorage.setItem("bigBasketCart", JSON.stringify(baskArr));
}


function p_increaseQuantity(index, baskPrice, baskSaved){
    console.log(baskArr[index]);
    let item = baskArr[index];
    item.prod_quantity += 1;

    baskPrice.textContent = `Rs. ${item.prod_price * item.prod_quantity}`;

    if(item.prod_strike_price == 0){
        baskSaved.textContent = `Saved Rs. 0`;
    }
    else
        baskSaved.textContent = `Saved Rs. ${((item.prod_strike_price - item.prod_price) * item.prod_quantity).toFixed(2)}`;



    localStorage.setItem("bigBasketCart", JSON.stringify(baskArr));

    p_calculateTotalPrice();
}

p_calculateTotalPrice();

function p_calculateTotalPrice(){
    let p_itemTotal = baskArr.reduce((acc, el) => {
        return acc + el.prod_price * el.prod_quantity;
    }, 0)

    console.log("Total is", p_itemTotal);


    // we need loop because JS reduce prototype function doesn't support conditional statements

    let p_AmtSaved = 0;

    for(let item of baskArr){
        if(item.prod_strike_price != 0){
            p_AmtSaved += ((item.prod_strike_price - item.prod_price) * item.prod_quantity);
        }
    }

    console.log("Amount saved", p_AmtSaved);

    let stotalPrice = document.getElementById("stotalPrice");
    stotalPrice.textContent = `Rs. ${p_itemTotal}`;

    let p_delivery = document.getElementById("p_delivery");

    if(baskArr.length > 0){
        p_delivery.textContent = `Rs. 50`;
    }
    else{
        p_delivery.textContent = `Rs. 0`
    }
}



// var bigBasketCart = JSON.parse(localStorage.getItem("bigBasketCart")) || [];

function p_showCartNumber(data){
    let cartCountDiv = document.getElementById("m_cartCount");
    let totalItems = baskArr.length;
    
    if(totalItems === 0){
        cartCountDiv.textContent = `No items`
    }
    else if(totalItems === 1){
        cartCountDiv.textContent = `1 item`
    }
    else if(totalItems >= 1){
        cartCountDiv.textContent = `${baskArr.length} items`
    }
    
    // cartCountDiv.textContent = `${bigBasketCart.length} items`
}