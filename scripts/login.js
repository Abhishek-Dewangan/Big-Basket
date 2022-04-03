let continueLogin = document.getElementById("continue");
    continueLogin.onclick = function(){
        let mobile = document.getElementById("mobileNum").value;
        console.log(mobile)
        let mnumber=[]
        if (mobile.length == 10){
          mnumber.push(mobile)
          localStorage.setItem("mobile",JSON.stringify(mnumber));
           
            alert("OTP sent to your given mobile number");
            window.location.href="verifyotp.html";
            
        } else {
            alert("Enter 10 digit mobile number");
            mobile.value= "";
        }
        
    };

    ///click googleplay////
    let ygplay=document.getElementById("yplay");
    ygplay.addEventListener("click",()=>{
      gogplay();
    })
    const gogplay=()=>{
    window.open("https://play.google.com/store/apps/details?id=com.bigbasket.mobileapp");
    }

    /////click apple///
    let yapple=document.getElementById("yapple");
    yapple.addEventListener("click",()=>{
      goapple();
    })
    const goapple=()=>{
      window.open("https://apps.apple.com/in/app/bigbasket-com/id660683603?ign-mpt=uo%3D4");

    }


/// click return/////
    let re=document.getElementById("r");
    re.addEventListener("click",()=>{
      ret()
    })

    const ret=()=>{
      window.open("https://www.bigbasket.com/t1/?nc=b-cp-hp-sec2&b_t=cp_hp_sec2&b_camp=about-bigbasket&t_from_ban=200096&t_pos=1&t_ch=desktop");
    }

////click quality///
let qu=document.getElementById("q");
    qu.addEventListener("click",()=>{
      quu()
    })

    const quu=()=>{
      window.open("https://www.bigbasket.com/t1/?nc=b-cp-hp-sec2&b_t=cp_hp_sec2&b_camp=about-bigbasket&t_from_ban=200096&t_pos=1&t_ch=desktop");
    }
