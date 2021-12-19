
// code for the payment process
document.querySelector("#paymentBtn").addEventListener("click",function(event){
    event.preventDefault();
    // hard coded data for the input
    var cardNum="1880155022305555";
    var cVV=789;
    var expireDate="05/25";
    var otP=123456;
    // taking input form the form
    var cardnumber=document.querySelector("#cardNum").value;
    var name=document.querySelector("#name").value;
    var address=document.querySelector("#address").value;
    var cvv=document.querySelector("#cvv").value;
    var expdate=document.querySelector("#date").value;
    var otp=document.querySelector("#otp").value;
    // checking the input field is correct or not and perform some action 
    if(cardnumber==cardNum && cvv==cVV && expireDate==expdate && otp==otP){
    alert("success full ");
    }
    else{
        alert("Please fill the correct information")
    }
});