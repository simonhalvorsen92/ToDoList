

class ToDo {
    constructor(item){
        this.item = item;
        this.done = false;
}
} 





// let Button = document.getElementById("lägTill");
// let HärListanSkaPlaceras = document.getElementById("HärListanSkaPlaceras");
// let skrivOmråde = document.getElementById("skrivOmråde");

// Button.addEventListener("click", function(){
//     let pTagg = document.createElement("p");
//     pTagg.innerText = skrivOmråde.value;
//     HärListanSkaPlaceras.appendChild(pTagg);
    
// });






  
//  let button = document.getElementById("button");
//  let textRespond = document.getElementById("textRespond");
//  let textArea = document.getElementById("textArea");

//  button.addEventListener("click"), function () {
//    let NewP = document.createElement("p")
//    NewP.innerText = textArea.value;
//    text - textRespond.appendChild(NewP);
   
//  }



  // 2. Spara textarens value i en variabel (userText)
//  let resultat=text.value
  


  // 3. Hitta text-respond

// let synlig=document.getElementById("text-respond");
  // 4. Sätt innerHTML på text-respond till userText
// synlig.innerHTML=resultat;
// }

// window.onload = function () {
//     let personOne = new Person (180,"blue", "blond");
// let personTwo = new Person (174,"green", "brown");
// console.log(personOne);
// console.log(personTwo);

// }

// window.onload =function () {
//     animal();
    
  
    
// }
let milk = new ToDo ("mjölk");
let banan = new ToDo ("banan");
let coffee = new ToDo ("kaffe");
let cheese = new ToDo ("ost");


  // objekt i stället
  function createHtml() { 
    newUl.innerHTML = "";// rensar ul
    for (let i = 0; i < toDo.length; i++){
  let newLi = document.createElement ("li");
  newLi.innerHTML = toDo[i].item;//Här hämtar jag this:item i objektet
  
    
  newUl.appendChild(newLi);
    
  }
   
    
  }
let toDo = [milk, banan, coffee, cheese];


let newUl = document.createElement("ul");


createHtml()
createHtml()


document.body.appendChild(newUl);







//KOLLA W3 SKOL PÅ TODOLISTOR FÖRSÖK FÖRSTÅ SKRIV NER MOMENT PÅ PAPPERwindow.onload = function () {
  
