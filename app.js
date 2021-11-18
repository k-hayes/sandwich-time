let bread = ["white","whole wheat","rye","ciabatta","sourdough"];
let protein = ["turkey","ham","roast beef","peanut butter","portabello", "tofu"];
let cheese = ["american","cheddar","swiss","provolone","pepperjack","mozzerella"];
let vegetables = ["lettuce","tomato","onion","pickles","banana peppers"];
let condiments = ["mustard","mayo","kimchi","ranch"];

window.addEventListener("load", function(){
    const btn = document.getElementById("btn");
    const sandwich = document.getElementById("sandwich");
    const breadChild = document.getElementById("bread-child");

    // function IngredientCounter(ingredient){
    //     for(let i=0; i>count(ingredient)-1; i++){
    //         document.createElement("<div>'Ingredient'</div>")
    //     }
    // };

    let breads = "";
        for(let i=0; i>(bread.length-1); i++){
            console.log(bread[i]);
            // let newLine = document.createElement("<div>'Ingredient'</div>")
            breads = breads + "\n Ingredient";
        }

    breadChild.innerHTML = breads;
    

    btn.addEventListener('click', function(){   
        sandwich.innerHTML = `${protein[1]}, ${cheese[2]}, ${vegetables[1]}, ${condiments[1]} on ${bread[0]}`;
    });
})



