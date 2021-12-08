

class ToDo {
    constructor(item){
        this.item = item;
        this.done = false;
    }
} 

let milk = new ToDo ("mjölk");
let banan = new ToDo ("banan");
let coffee = new ToDo ("kaffe");// ToDo = class
let cheese = new ToDo ("ost");


let toDo = [milk, banan, coffee, cheese];

  // objekt i stället
  function createHtml() { 
    newUl.innerHTML = "";// rensar ul detta är = <ul></ul>
    for (let i = 0; i < toDo.length; i++){
      let newLi = document.createElement ("li");
      newLi.innerHTML = toDo[i].item;//toDo = listan [i] = positionen på listan  .item = är objectet innanför classen. använd punkter när det gäller object
      //let ListAddEvent = document.getElementById("ListAddEvent");// hämtade ID i boddy
      newLi.addEventListener("click", () => { clickFunction(i) });// annonyma functioner

      if (toDo[i].done  === true) {
        newLi.className = "done";
        
      }
      newUl.appendChild(newLi);
    
    } 
    
  }

  function clickFunction(position) {// ropar på annonyma funcktioner
    
    toDo[position].done = !toDo[position].done; // toDo = listan, [position] = plaseringen på listan,
    // .done = boliansom är false. !toDo -||-  är motstaten till false

    createHtml();// anropar på listan ovan 
    
    
  }
  


let newUl = document.createElement("ul");

createHtml()



// document.body.appendChild(newUl);

let theId = "myMain"


let myCntainer = document.createElement("div");//Här skapar jag en DIV element
myCntainer.classList.add("container");// min DIV får en .class och heter container
document.getElementById(theId).appendChild(myCntainer);//skapar min container innanför min body
myCntainer.appendChild(newUl); // Innanför container lägger in min tidigare ul med dess li






  
