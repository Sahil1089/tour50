
let wishObject;
onload();
function onload(){
    loadwishitem();
    displaywishitem();
   
}
function loadwishitem(){
    console.log(wish)
   wishObject= wish.map(itemid=>{
        for(let i =0; i<destination.length;i++){
            if(itemid == destination[i].id){
                return destination[i]

            }
        }
})


}
console.log(wishObject)


function displaywishitem(){
    console.log(wish)
    let containerelemt = document.querySelector(".maincontainer");
    let innerHTML='';
    wishObject.forEach(element => {
        innerHTML += generateItemhtml(element);
        
    });

        containerelemt.innerHTML=innerHTML;

     
}
function removeWish(itemid){
    wish=wish.filter(wishitemid => wishitemid != itemid);
    localStorage.setItem('wish',JSON.stringify(wish));
    loadwishitem();
    wishcount();
    displaywishitem()


}

function generateItemhtml(witem){
    return `<div class="wishcontainer">
            <div class="wleft">
              <img src="${witem.image}" alt="">
            </div>
            <div class="wright">
              <h1>${witem.name}</h1>
              <h3>${witem.loc}</h3>
              <button id="remove"  onclick="removeWish(${item.id})">remove from wish</button>
            </div>
          </div>`


}