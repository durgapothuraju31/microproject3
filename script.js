let foodItems=require("./data.json")
console.log(foodItems);
function vegetables(){
    let vegetableItems =foodItems.filter(
        (item) => item.category === "Vegetable"
    );
    console.log(vegetableItems);
}
vegetables();
function fruits(){
    let fruitItems =foodItems.filter(
        (item) => item.category === "Fruit"
    );
    console.log(fruitItems);
}
fruits();
function dairyProducts(){
    let dairyItems =foodItems.filter(
        (item) => item.category === "Dairy"
    );
    console.log(dairyItems);
}
dairyProducts();
function proteins(){
    let proteinsItems =foodItems.filter(
        (item) => item.category === "Protein"
    );
    console.log(proteinsItems);
}
proteins();
function nuts(){
    let nutsItems =foodItems.filter(
        (item) => item.category === "Nuts"
    );
    console.log(nutsItems);
}
nuts();
function grains(){
    let grainItems =foodItems.filter(
        (item) => item.category === "Grain"
    );
    console.log(grainItems);
}
grains();
function calorieAbove100(){
    let calorieAbove100Items =foodItems.filter(
        (item) => item.calorie >=100
    );
    console.log(calorieAbove100Items);
}
calorieAbove100();
function calorieBelow100(){
    let calorieBelow100Items =foodItems.filter(
        (item) => item.calorie <100
    );
    console.log(calorieBelow100Items);
}
calorieBelow100();
function compareByProtien(a,b){
    return a.protiens-b.protiens;
}
foodItems.sort(compareByProtien);
console.log(foodItems);
function compareByCab(a,b){
    return a.cab-b.cab;
}
foodItems.sort(compareByCab);
console.log(foodItems);