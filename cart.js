
// fetching the cart content box
var parentDiv=document.querySelector(" #cartDiv > #cartContentBox");
var cartdb=JSON.parse(localStorage.getItem("cartItemDb"))||[];

var total=0;
showData(cartdb);
var count=1
    function showData(cartdb){
        // fetching the cartdb 
     
         document.querySelector("#cartContentBox").innerHTML="";
        cartdb.map(function(elem ,index){
      var itemBox=document.createElement("div");
      itemBox.setAttribute("class","itemBox");
      var itemImg=document.createElement("img");
      itemImg.setAttribute("src",elem.image);
      var textBox=document.createElement("div");
      textBox.setAttribute("class","textBox");
       var title=document.createElement("p");
       title.setAttribute("class","title");
       title.textContent=elem.name;
       var priceDiv=document.createElement("div");
       priceDiv.setAttribute("class","pricediv");
      var price=document.createElement("h3");
      price.setAttribute("class","price");
      price.textContent= " ₹"+elem.price;
      total+=Number(elem.price);
      var quantity=document.createElement("p");
      quantity.setAttribute("class","quantity");
      quantity.textContent="10ml";
      var buttonDiv=document.createElement("div");
      buttonDiv.setAttribute("class","buttonDiv");
      var minusButton=document.createElement("button");
      minusButton.textContent="-";
       var valueButton=document.createElement("button");
       valueButton.textContent="1";
       valueButton.setAttribute("id","valueButton")
     var plusButton=document.createElement("button");
     plusButton.textContent="+";
     
     var deleteP= document.createElement("p");
      deleteP.textContent="Delete";
      // adding event listener for the delete op
      deleteP.addEventListener("click",function(){
           removeItem(index);
      })
       priceDiv.append(price,quantity);
       buttonDiv.append(minusButton,valueButton,plusButton,deleteP);
       textBox.append(title,priceDiv,buttonDiv);
      itemBox.append(itemImg,textBox)
       parentDiv.append(itemBox);

  });

    }
   

    document.querySelector("#subTotalDiv > #totalPay").textContent=total;

   // updating the item count 
   if(cartdb.length>0){
    document.querySelector("#cartIcon > h3").textContent=cartdb.length;
   }
   else{
    document.querySelector("#cartIcon > h3").textContent="0";
   }

  // delete operation;
  function removeItem(index){
      var newTotal=0;
       cartdb.splice(index,1);
       document.querySelector("#cartIcon > h3").textContent=cartdb.length;
       localStorage.setItem("cartItemDb",JSON.stringify(cartdb));
     cartdb.map(function(elem){
            newTotal+=Number(elem.price);
        })
        document.querySelector("#subTotalDiv > #totalPay").textContent=newTotal;
       showData(cartdb);
  }
      // updating the total amount 
   
  document.querySelector("#paymentButton").addEventListener("click" , function(){
      window.location.href="payment.html"
  });
  document.querySelector("#leftAero").addEventListener("click",function(){
      window.location.href="product.html"
  })