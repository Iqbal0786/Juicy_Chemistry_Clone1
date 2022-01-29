
//  var products=JSON.parse(localStorage.getItem("Prod"))||[];
 let products=[
  {
      "image": "https://cdn.shopify.com/s/files/1/0058/7779/2832/products/Toners_110mlrose_400x.jpg?v=1636800917",
      "name": "Bulgarian Damask Rose Hydrosol",
      "category": "For Brighter Skin",
      "reviews": "1430 reviews",
      "price": "450",
      "type": "FACE CARE",
      "back": ""
  },
  {
      "image": "https://cdn.shopify.com/s/files/1/0058/7779/2832/products/Toners_110mlrose_400x.jpg?v=1636800917",
      "name": "Bulgarian Damask Rose Hydrosol",
      "category": "For Brighter Skin",
      "reviews": "1430 reviews",
      "price": "450",
      "type": "FACE CARE",
      "back": ""
  },
  {
      "image": "https://cdn.shopify.com/s/files/1/0058/7779/2832/products/Toners_110mlrose_400x.jpg?v=1636800917",
      "name": "Bulgarian Damask Rose Hydrosol",
      "category": "For Brighter Skin",
      "reviews": "1430 reviews",
      "price": "450",
      "type": "FACE CARE",
      "back": ""
  },
  {
      "image": "https://cdn.shopify.com/s/files/1/0058/7779/2832/products/Toners_110mlrose_400x.jpg?v=1636800917",
      "name": "Bulgarian Damask Rose Hydrosol",
      "category": "For Brighter Skin",
      "reviews": "1430 reviews",
      "price": "450",
      "type": "FACE CARE",
      "back": ""
  }
]

 display(products)
 function pricesort(){
   var select=document.querySelector("#sort").value;
   if(select=="low"){
     products.sort(function(a,b){
       return Number(a.price)-Number(b.price);
       
     })
     console.log(products);
   }
  if(select=="high"){
     products.sort(function(a,b){
       return Number(b.price)-Number(a.price);
       
     })
     console.log(products);
   }

   display(products);
 }

//  CODE FOR THE FILTER
function filter(){
selected=document.querySelector("#category").value;
filterList=products.filter(function(elem){
       if (elem.type==selected){
         return elem.type
       }

}) 

display(filterList);
if(selected=="shopall"){
   display(products);
}

}

function display(products){
 document.querySelector("#main").innerHTML="";
products.map(function(elem){
    var div=document.createElement("div");
    var img=document.createElement("img");
    img.setAttribute("src",elem.image);
    img.style="width:100%";
    var h1=document.createElement("h1");
    h1.textContent=elem.name;
    var h4=document.createElement("h3");
    h4.textContent=elem.category;
   var rating=document.createElement("div");
   rating.setAttribute("id","rev");
  var rate=document.createElement("img");
  rate.setAttribute("src","https://static.thenounproject.com/png/1149720-200.png")
  rate.style="width:30%;height:70px";
    var p=document.createElement("h4");
      p.textContent=elem.reveiews;
       rating.append(rate,p);
    var cartmain=document.createElement("div");
    cartmain.addEventListener("click",function(){
      addtocart(elem)
      window.location.href="cart.html";
    })
    pricediv=document.createElement("div");
    dollar=document.createElement("h3");
   dollar.textContent="₹";
    var price=document.createElement("h3");
    price.textContent=elem.price;
    pricediv.append(dollar,price);
    cartdiv=document.createElement("div");
    var but=document.createElement("button");
    but.textContent="ADD TO CART";
  var  icon=document.createElement("img");
  icon.setAttribute("src","https://img.icons8.com/ios/452/shopping-bag--v1.png")
    icon.style="width:15px;height:15px;margin-top:20px;";
    
    cartdiv.append(but,icon);
  cartmain.append(pricediv,cartdiv)  
    div.append(img,h1,h4,rating,cartmain);
    console.log(div);
    document.querySelector("#main").append(div);
});
}

function addtocart(elem){
    var cart= JSON.parse(localStorage.getItem("cartItemDb"))||[];
cart.push(elem)
localStorage.setItem("cartItemDb",JSON.stringify(cart));
}

document.querySelector("#loginicon").addEventListener("click",function(){
  window.location.href="Login.html"
})
