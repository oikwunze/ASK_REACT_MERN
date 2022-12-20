/**
 * how to prepare coffee
 * 1.Get milk from shop
 * 2.Boil the milk
 * 3.Add sugar & coffee
 *
 */

const getMilkFromShop = (boilMilk, addSugarAndCoffee) => {
    setTimeout(() => {
        console.log("1.Get milk from shop");
        boilMilk(addSugarAndCoffee);
    }, 3000);
};

const boilMilk = (addSugarAndCoffee) => {
    setTimeout(() => {
        console.log("2.Boil the milk");
        addSugarAndCoffee();
    }, 1000);
};

const addSugarAndCoffee = () => {
    setTimeout(() => {
        console.log("3.Add sugar & coffee");
    }, 500);
};

const makeCoffee = () => {
    getMilkFromShop(boilMilk, addSugarAndCoffee);
};
makeCoffee();