/**
 * how to prepare coffee
 * 1.Get milk from shop
 * 2.Boil the milk
 * 3.Add sugar & coffee
 *
 */

const getMilkFromShop = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("1.Get milk from shop");
        }, 3000);
    });
};

const boilMilk = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("2.Boil the milk");
        }, 1000);
    });
};

const addSugarAndCoffee = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("3.Add sugar & coffee");
        }, 500);
    });
};

const makeCoffee = () => {
    getMilkFromShop().then((msg) => {
        console.log(msg);
        boilMilk().then((msg) => {
            console.log(msg);
            addSugarAndCoffee().then((msg) => {
                console.log(msg);
            }).catch((error) => {
                console.log(error);
            })
        }).catch((error) => {
            console.log(error);
        })
    }).catch((error) => {
        console.log(error);
    });
};
makeCoffee();