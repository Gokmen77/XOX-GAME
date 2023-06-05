const cards = document.querySelectorAll(".container")
const cards_1 = document.getElementById("container")
const win = document.getElementById("kazandik")
const rest = document.getElementById("restart")

sayaç = 0

function click_x(e){
     let click_card = e.target;
     sayaç++
        
    if(sayaç == "1" || sayaç == "3" || sayaç == "5" || sayaç == "7" || sayaç == "9"){
        click_card.innerHTML = "X"
    }
    if(sayaç == "2" || sayaç == "4" || sayaç == "6" || sayaç == "8" ){
        click_card.innerHTML = "O"
    }

    satirlar()
    satünlar()
    çapraz()
    berbere()

    
}

    

function satirlar(){

    if(cards_1.children[0].innerText == cards_1.children[1].innerText &&
        cards_1.children[0].innerText == cards_1.children[2].innerText &&
        cards_1.children[0].innerText !== "")
         {
            win.innerText = "win"; 
         }
    
   if(cards_1.children[3].innerText == cards_1.children[4].innerText &&
      cards_1.children[3].innerText == cards_1.children[5].innerText &&
      cards_1.children[3].innerText !== "")
      {
        win.innerText = "win"; 
            };


    if(cards_1.children[6].innerText == cards_1.children[7].innerText &&
        cards_1.children[6].innerText == cards_1.children[8].innerText &&
        cards_1.children[6].innerText !== "")
        {
             win.innerText = "win"; 
            }
    

}


function satünlar(){

    if(cards_1.children[0].innerText == cards_1.children[3].innerText &&
        cards_1.children[0].innerText == cards_1.children[6].innerText &&
        cards_1.children[0].innerText !== "")
         {
            win.innerText = "win"; 
         }
    
   if(cards_1.children[1].innerText == cards_1.children[4].innerText &&
      cards_1.children[1].innerText == cards_1.children[7].innerText &&
      cards_1.children[1].innerText !== "")
      {
        win.innerText = "win"; 
            };


    if(cards_1.children[2].innerText == cards_1.children[5].innerText &&
        cards_1.children[2].innerText == cards_1.children[8].innerText &&
        cards_1.children[2].innerText !== "")
        {
             win.innerText = "win"; 
            }
    
}


function çapraz(){

    if(cards_1.children[2].innerText == cards_1.children[4].innerText &&
        cards_1.children[2].innerText == cards_1.children[6].innerText &&
        cards_1.children[2].innerText !== "")
         {
            win.innerText = "win"; 
         }
    
   if(cards_1.children[0].innerText == cards_1.children[4].innerText &&
      cards_1.children[0].innerText == cards_1.children[8].innerText &&
      cards_1.children[0].innerText !== "")
      {
        win.innerText = "win"; 
            };

}

function berabere(){
    window.location.reload()
}

cards.forEach(card=>{
    card.addEventListener("click",click_x);
})

rest.addEventListener("click",berabere)

