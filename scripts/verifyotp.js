let enterotp = document.getElementById("enterotp");
let resend = document.getElementById("resend");
let continue2 = document.getElementById("continue2");

let randomotp = Math.floor(1000 + Math.random() * 9000);
const otp = (o) => {
    alert(`Your 4-digit OTP is : ${o}`);
    console.log("Random otp is", o);
};
otp(randomotp);

continue2.addEventListener("click", () => {
    gonext(randomotp);
});

const gonext = (o) => {
    let enotp = enterotp.value;
    console.log("o", o);
    console.log("oenotp", enotp);
    if (o === Number(enotp)) {
       
        let usermobile = JSON.parse(localStorage.getItem("mobile"));

        let detailsmobile = JSON.parse(localStorage.getItem("userdetails")) || [];
        console.log(usermobile)
        console.log(detailsmobile)
        let mobileno;
        detailsmobile.forEach((el, index) => {
            mobileno = el.mobile;
            console.log(mobileno)
        })
        if (mobileno == usermobile.toString()) {
            alert(`Logged in Successfully! Welcome back ${detailsmobile[0].fname}!`);
            window.location.href = "index.html";
            let loginUser = {loginStatus: true, userName: detailsmobile[0].fname};
            localStorage.setItem("loginUser", JSON.stringify(loginUser))
        }
        else {
            window.location.href = "signupdetails.html";
        }
        // window.location.href = "signupdetails.html";
        //   window.location.href = "index.html";
    }
    else{
        alert("Invalid OTP")
    }
};

resend.addEventListener("click", () => {
    otp(randomotp);
});