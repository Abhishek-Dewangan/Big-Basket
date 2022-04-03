// Importing Footer

import createFooter from '../components/footer.js';

let footer = document.getElementById("footer");
footer.innerHTML = createFooter();


/// Main Part Starts

let checkoutItems = JSON.parse(localStorage.getItem("bigBasketCart"))

    function displayCheckout(event){
        document.querySelector("tbody").innerHTML = null;
        event.map((elem, index)=>{
            let tdrow = document.createElement("tr");
            tdrow.setAttribute("id","stbodyTableRow")
            //Creation of First column td1.This column was empty because if bike or lorry image is given then here it can be appended
            let td1 = document.createElement("td")

            //Creation of Second column td2
            let td2 = document.createElement("td")
            td2.setAttribute("id","stdItemMain")
            //
            let div2 = document.createElement("div")
            div2.setAttribute("id","stdItem")
            let stdCat = document.createElement("p")
            stdCat.setAttribute("id","stdCat")
            stdCat.innerText = elem.prod_brand;
            let stdItemName = document.createElement("p")
            stdItemName.setAttribute("id","stdItemName");
            stdItemName.innerText = elem.prod_name;
            //
            div2.append(stdCat,stdItemName)
            td2.append(div2)


            //Creation of Third Column td3
            let td3 = document.createElement("td")
            td3.setAttribute("id","stdUnitMain")
            //
            let div3 = document.createElement("div")
            div3.setAttribute("id","stdUnit")
            let stdPrice = document.createElement("p");
            stdPrice.setAttribute("id","stdPrice");
            stdPrice.innerText = `Rs. ${Number((elem.prod_price)).toFixed(2)}`;
            let stdStrike = document.createElement("p");
            stdStrike.setAttribute("id","stdStrike");
            stdStrike.innerText = `Rs. ${Number((elem.prod_strike_price)).toFixed(2)}`;
            //
            div3.append(stdPrice,stdStrike);
            td3.append(div3)


            //Creation of Fourth Column td4
            let td4 = document.createElement("td")
            td4.setAttribute("id","stdQtyMain");
            //
            let div4 = document.createElement("div");
            div4.setAttribute("id","stdQty")

            /* Changing the order need to pass the div to change subtotal */
            let div5 = document.createElement("div");
            div5.setAttribute("id","stdTotal")
            let stdTotalPrice = document.createElement("p")
            stdTotalPrice.setAttribute("id","stdTotalPrice")
            stdTotalPrice.innerText = `Rs.${(elem.prod_price * elem.prod_quantity).toFixed(2)}`
        
            //Creation of Minus Button 
            let stdMinusBtn = document.createElement("button");
            stdMinusBtn.setAttribute("id","stdMinusBtn");
            stdMinusBtn.innerText = "-";
            //Adding Event Listener to Minus Button
            stdMinusBtn.addEventListener("click",()=>{
                stdInput.value = parseInt(stdInput.value) - 1
                p_reduceQuantity(index, stdTotalPrice);
                if(elem.prod_strike_price != 0)
                {
                    sbcheckSave = ((elem.prod_strike_price - elem.prod_price)*(stdInput.value)).toFixed(2)
                    div6.innerText = `Rs. ${sbcheckSave}`
                }

                // if(stdInput.value == 1){
                //     checkoutItems.splice(checkoutItems.indexOf(elem),1)
                //     localStorage.setItem("bigBasketCart", JSON.stringify(checkoutItems));
                //     totLength = checkoutItems.length;
                //     document.querySelector("#checkoutLength").innerText = `(0${totLength} Items)`
                //     window.location.reload(true)
                // }
                // else{
                //     //Decreasing the input value and updating it in input
                //     stdInput.value = parseInt(stdInput.value) - 1
                   
                //     //Updating the savings of single item in savings column
                //     sbcheckSave = ((elem.prod_strike_price - elem.prod_price)*(stdInput.value)).toFixed(2)
                //     div6.innerText = `Rs. ${sbcheckSave}`

                //     //Updating Total Savings got from all the items in the cart
                //     sbcTotSav = sbcTotSav - Number(elem.prod_strike_price-elem.prod_price)
                //     document.querySelector("#sbYouSavedAmount").innerText = `Rs. ${(sbcTotSav).toFixed(2)}`

                //     //Updating Total Price of all items in the cart
                //     sbcTotPrice = sbcTotPrice - Number(elem.prod_price)
                //     document.querySelector("#sbCheckTP").innerText = `Rs. ${(sbcTotPrice).toFixed(2)}`
                //     document.querySelector("#stotalPrice").innerText = `Rs.${(sbcTotPrice).toFixed(2)}`

                //     //Updating the total price of a single item in the cart
                //     updatedPrice = Number((elem.prod_price*stdInput.value)).toFixed(2)
                //     stdTotalPrice.innerText = `Rs.${updatedPrice}`
                // }
            })
            let stdInput = document.createElement("input");
            stdInput.setAttribute("id","stdInput");
            stdInput.value = elem.prod_quantity;
            

            

            //Creating Plus button
            let stdPlusBtn = document.createElement("button");
            stdPlusBtn.setAttribute("id","stdPlusBtn")
            stdPlusBtn.innerText = "+";
            //Adding Event Listener to Plus button
            stdPlusBtn.addEventListener("click",()=>{
                // console.log(elem, index);
                p_increaseQuantity(index, stdTotalPrice);
                //Increasing the input value and updating it in input
                stdInput.value = parseInt(stdInput.value) + 1

                //Updating the savings of single item in savings column
                if(elem.prod_strike_price != 0)
                {
                    sbcheckSave = ((elem.prod_strike_price - elem.prod_price)*(stdInput.value)).toFixed(2)
                    div6.innerText = `Rs. ${sbcheckSave}`
                }
                
                         
                // //Updating Total Savings got from all the items in the cart
                // sbcTotSav = sbcTotSav + Number(elem.prod_strike_price-elem.prod_price)
                // document.querySelector("#sbYouSavedAmount").innerText = `Rs. ${(sbcTotSav).toFixed(2)}`

                // //Updating Total Price of all items in the cart
                // sbcTotPrice = sbcTotPrice + Number(elem.prod_price)
                // document.querySelector("#sbCheckTP").innerText = `Rs. ${(sbcTotPrice).toFixed(2)}`
                // document.querySelector("#stotalPrice").innerText = `Rs.${(sbcTotPrice).toFixed(2)}`

                // //Updating the total price of a single item in the cart
                // updatedPrice = Number((elem.prod_price*stdInput.value)).toFixed(2)
                // stdTotalPrice.innerText = `Rs.${updatedPrice}`
            })
            div4.append(stdMinusBtn,stdInput,stdPlusBtn);
            td4.append(div4);


            //Creation of Fifth column td5
            let td5 = document.createElement("td")
            td5.setAttribute("id","stdTotalMain")
            //
            

            //Created Remove button here i.e., name given as  "X" for Remove button
            let stdRemove = document.createElement("p")
            stdRemove.setAttribute("id","stdRemove")
            stdRemove.innerText = "x"
            //Adding Event Listener to Remove Button i.e., "X"
            stdRemove.addEventListener("click",()=>{
                checkoutItems.splice(checkoutItems.indexOf(elem),1)
                localStorage.setItem("bigBasketCart", JSON.stringify(checkoutItems));

                //Updating the total length value and appending it
                totLength = checkoutItems.length;
                document.querySelector("#checkoutLength").innerText = `(0${totLength} Items)`
                window.location.reload(true)
            })
            div5.append(stdTotalPrice,stdRemove)
            td5.append(div5)


            //Creation of Sixth Column td6
            let td6 = document.createElement("td");
            td6.setAttribute("id","stdSavingsMain");
            let div6 = document.createElement("div");
            div6.setAttribute("id","stdSavings")
            //Calculating savings value and appending it
            let sbcheckSave = ((elem.prod_strike_price - elem.prod_price)*(stdInput.value)).toFixed(2)
            sbcheckSave = (sbcheckSave < 0) ? 0 : sbcheckSave;
            div6.innerText = `Rs. ${sbcheckSave}`
            td6.append(div6)

            tdrow.append(td1,td2,td3,td4,td5,td6)
            document.querySelector("tbody").append(tdrow)
        })
    }
    //Calling displayCheckout 
    displayCheckout(checkoutItems)


    function p_increaseQuantity(index, display){
        checkoutItems[index].prod_quantity += 1;
        console.log(checkoutItems);

        display.textContent = `Rs.${(checkoutItems[index].prod_price * checkoutItems[index].prod_quantity).toFixed(2)}`

        localStorage.setItem("bigBasketCart", JSON.stringify(checkoutItems));

        p_calculateTotalPrice();
    }

    function p_calculateTotalPrice(){
        let p_itemTotal = checkoutItems.reduce((acc, el) => {
            return acc + el.prod_price * el.prod_quantity;
        }, 0)

        console.log("Total is", p_itemTotal);


        // we need loop because JS reduce prototype function doesn't support conditional statements

        let p_AmtSaved = 0;

        for(let item of checkoutItems){
            if(item.prod_strike_price != 0){
                p_AmtSaved += ((item.prod_strike_price - item.prod_price) * item.prod_quantity);
            }
        }

        console.log("Amount saved", p_AmtSaved);

        if(checkoutItems.length > 0){
            document.querySelector("#sbCheckTP").innerText = `Rs. ${(p_itemTotal + 50).toFixed(2)}`
            document.getElementById("p_DeliveryCharges").textContent = "Rs. 50";
        }
        else{
            document.querySelector("#sbCheckTP").innerText = `Rs. ${(p_itemTotal).toFixed(2)}`
        }
        document.querySelector("#stotalPrice").innerText = `Rs. ${(p_itemTotal).toFixed(2)}`

        document.querySelector("#sbYouSavedAmount").textContent = `Rs. ${(p_AmtSaved).toFixed(2)}`;
    }

    p_calculateTotalPrice();



    function p_reduceQuantity(index, display){
        let item = checkoutItems[index];
        if(item.prod_quantity === 1){
            checkoutItems.splice(index, 1);
            localStorage.setItem("bigBasketCart", JSON.stringify(checkoutItems));
            p_calculateTotalPrice();
            displayCheckout(checkoutItems);
            
        }
        else{
            item.prod_quantity -= 1;
            display.textContent = `Rs.${(checkoutItems[index].prod_price * checkoutItems[index].prod_quantity).toFixed(2)}`;
            p_calculateTotalPrice();
            localStorage.setItem("bigBasketCart", JSON.stringify(checkoutItems));
        }
    }

    //Calculating Total Price and appending it
    // var sbcTotPrice = checkoutItems.reduce(function(acc,elem){
    //     return (acc+Number(elem.prod_price))
    // },0)
    // document.querySelector("#sbCheckTP").innerText = `Rs. ${(sbcTotPrice).toFixed(2)}`
    // document.querySelector("#stotalPrice").innerText = `Rs.${(sbcTotPrice).toFixed(2)}`


    //Calculating Total Savings and appending 
    // var sbcTotSav = checkoutItems.reduce(function(acc,elem){
    //     return (acc + ((elem.prod_strike_price-elem.prod_price) * elem.prod_quantity));
    // },0)
    // document.querySelector("#sbYouSavedAmount").innerText = `Rs. ${(sbcTotSav).toFixed(2)}`    


   //Calculating total length of the cart and appending it
    let totLength = checkoutItems.length;
    document.querySelector("#checkoutLength").innerText = `(0${totLength} Items)`
    

    //Adding functionality to Empty Basket Button
    document.querySelector("#sbEmpty").addEventListener("click",()=>{
        checkoutItems =[]
        localStorage.setItem("bigBasketCart",JSON.stringify(checkoutItems))
        localStorage.setItem("sbaskTotalPrice",0)
        localStorage.setItem("sbaskLength",0)
        localStorage.setItem("sbTotalSavings",0)
        alert("Are you Sure, do you want to empty your basket?")
        isCartEmpty();
        window.location.reload(true);
    })
    

    function isCartEmpty(){
        let totalDiv = document.getElementById("sbaskRhs");
        if(checkoutItems.length === 0){
            totalDiv.style.display = "none";
        }
        else{
            totalDiv.style.display = "block";
        }
    }

    isCartEmpty();