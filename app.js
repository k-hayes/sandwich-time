let bread = ["white","whole wheat","rye","ciabatta","sourdough"];
let protein = ["turkey","ham","roast beef","peanut butter","portabello", "tofu"];
let cheese = ["american","cheddar","swiss","provolone","pepperjack","mozzerella"];
let vegetable = ["lettuce","tomato","onion","pickles","banana peppers"];
let condiment = ["mustard","mayo","kimchi","ranch","chili crunch"];

window.addEventListener("load", function(){
    const btn = document.getElementById("btn");
    const sandwich = document.getElementById("sandwich");
    const breadChild = document.getElementById("bread-child");
    const proteinChild = document.getElementById("protein-child");
    const cheeseChild = document.getElementById("cheese-child");
    const vegetablesChild = document.getElementById("vegetables-child");
    const condimentsChild = document.getElementById("condiments-child");

    let breads = "";
    for(let i=0; i<(bread.length); i++){
       breads = breads + `<div>${bread[i]}</div>`
    }
    breadChild.innerHTML = `<div>${breads}</div>`;

    let proteins = "";
    for(let i=0; i<(protein.length); i++){
       proteins = proteins + `<div>${protein[i]}</div>`
    }
    proteinChild.innerHTML = `<div>${proteins}</div>`;

    let cheeses = "";
    for(let i=0; i<(cheese.length); i++){
       cheeses = cheeses + `<div>${cheese[i]}</div>`
    }
    cheeseChild.innerHTML = `<div>${cheeses}</div>`;

    let vegetables = "";
    for(let i=0; i<(vegetable.length); i++){
       vegetables = vegetables + `<div>${vegetable[i]}</div>`
    }
    console.log(vegetables);
    vegetablesChild.innerHTML = `<div>${vegetables}</div>`;
    

    let condiments = "";
    for(let i=0; i<(condiment.length); i++){
       condiments = condiments + `<div>${condiment[i]}</div>`
    }
    condimentsChild.innerHTML = `<div>${condiments}</div>`;
    

    btn.addEventListener('click', function(){
        pRandom = Math.floor(Math.random()*protein.length);
        chRandom = Math.floor(Math.random()*cheese.length);
        vRandom = Math.floor(Math.random()*vegetable.length);
        coRandom = Math.floor(Math.random()*condiment.length);
        bRandom = Math.floor(Math.random()*bread.length);
        sandwich.innerHTML = `${protein[pRandom]}, ${cheese[chRandom]}, ${vegetable[vRandom]}, ${condiment[coRandom]} on ${bread[bRandom]}`;
    });
})



