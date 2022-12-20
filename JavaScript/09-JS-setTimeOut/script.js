let count = 1;
console.log(new Date().toLocaleTimeString());
let greet = () => {
    console.log(`Iam from greet, ${count}`);
    count++;
    console.log(new Date().toLocaleTimeString());
};
let interval = setInterval(() => {
    greet();
}, 1000);

setTimeout(() => {
    clearInterval(interval);
}, 5000);

