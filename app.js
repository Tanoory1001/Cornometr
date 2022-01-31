let minutes =document.querySelector("#minutes");
let seconds =document.querySelector("#seconds");
let startbtn =document.querySelector("#startbtn");
let stoptbtn =document.querySelector("#stoptbtn");
let resetbtn = document.querySelector("#resetbtn")
let mytimer;
let mycounter = 0 ;
let myseconds = 0 ;
let myminutes = 0 ;

stoptbtn.disabled = true ;
resetbtn.disabled = true ;

startbtn.addEventListener("click",function ( ) {
    startbtn.disabled = true ;
    stoptbtn.disabled = false ;
    resetbtn.disabled = false ;
    mytimer = setInterval(function ( ) {
        mycounter++;
        myseconds = mycounter ;
        seconds .innerHTML = myseconds ;
         
    if( myseconds > 59 ){
        seconds .innerHTML = "00" ;
        mycounter = 0 ;
        myminutes ++ ;
        console.log(myminutes)
    }else if( myseconds > 9 ){
        seconds .innerHTML = myseconds ;
    }else{
        seconds .innerHTML = "0" + myseconds ;
    }
    
    if( myminutes > 59 ){        
        seconds .innerHTML = "00" ;
        minutes .innerHTML = "00" ;
        mycounter = 0 ;
        myseconds = 0 ;
        myminutes = 0 ;
        clearInterval(mytimer);
        
    }else if( myminutes > 9 ){
        minutes .innerHTML = myminutes ;
    }else{
        minutes .innerHTML = "0" + myminutes ;
    }

}, 1000);
});

stoptbtn.addEventListener("click",function ( ) {
    startbtn.disabled = false ;
    stoptbtn.disabled = true ;
    clearInterval(mytimer);
});

resetbtn.addEventListener("click",function(){
    startbtn.disabled = false ;
    stoptbtn.disabled = true ;
    resetbtn.disabled = true ;
    seconds .innerHTML = "00" ;
    minutes .innerHTML = "00" ;
    mycounter = 0 ;
    myseconds = 0 ;
    myminutes = 0 ;
    clearInterval(mytimer);
});