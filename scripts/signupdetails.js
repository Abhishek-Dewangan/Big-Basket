const signup=document.getElementById("ystartshopping");
let mnumber=JSON.parse(localStorage.getItem("mobile"));

signup.addEventListener("click",()=>{
    gosignup();
});
let signuparr=[]
const  gosignup=()=>{
    let fname=document.getElementById("yfirstname").value;

    let lname=document.getElementById("ylastname").value;
    let yemail=document.getElementById("yemail").value;

    console.log(mnumber.toString(),fname,lname,yemail);
    let ys=new ysignup(mnumber.toString(),fname,lname,yemail);
    signuparr.push(ys);
    localStorage.setItem("userdetails",JSON.stringify(signuparr))

    let activeUser = JSON.parse(localStorage.getItem("loginUser")) || {};

    activeUser.loginStatus = true;
    activeUser.userName = fname;

    localStorage.setItem("loginUser", JSON.stringify(activeUser));

    alert(`Account created successfully. Welcome ${fname} to Big Basket.`);

    window.location.href = "index.html";
}
function ysignup(mnumber,fname,lname,yemail){
   this.mobile=mnumber;
    this.fname=fname;
    this.lname=lname;
    this.email=yemail;
}
