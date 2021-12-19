var arr=JSON.parse(localStorage.getItem("Products"))||[];
document.querySelector("button").addEventListener("click",AddItems);

function AddItems(event){
    event.preventDefault();

 console.log(price);

    var object={
        image:document.querySelector("#img").value,
        name:document.querySelector("#h1").value,
        category:document.querySelector("#h4").value,
        reviews:document.querySelector("#rev").value,
        price:document.querySelector("#price").value,
        type:document.querySelector("#type").value,
       
    };
    console.log(document.querySelector("#bg").value);
     console.log(object);
    arr.push(object);
     localStorage.setItem("Products",JSON.stringify(arr));

}
