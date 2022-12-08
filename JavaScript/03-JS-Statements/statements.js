/**
 * 1. if-else
 * 2. switch
 * 3. for-loop
 * 4. while
 * 5. do-while
 */
const currentTime = 17;
let result = "";
if (currentTime >= 0 && currentTime <= 12) {
    result = "Good Morning";
} else if (currentTime >= 13 && currentTime <= 17) {
    result = "Good Afternoon";
} else if (currentTime >= 18 && currentTime <= 23) {
    result = "Good Evening";
} else {
    result = "Invalid Time";
}
console.log(result);

/**
 * switch
 */
const expr = 'Mangoesasdffs';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}

/**
 * for-loop
 */
/**
 * print from 0 to 10
 */
result = "";
for (let i = 0; i <= 10; i++) {
    result += `${i} `;
}
console.log(result);

/**
 * print from 20 to 0 diff 2
 */
result = "";
for (let i = 20; i >= 0; i -= 2) {
    result += `${i} `;
}
console.log(result);

/**
 *  *
 *  * *
 *  * * *
 *  * * * *
 *  * * * * *
 */
result = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        result += '*';
    }
    result += `\n`;
}
console.log(result);

/**
 * 1
 * 12
 * 123
 * 1234
 * 12345
 */

/**
 * 12345
 * 1234
 * 123
 * 12
 * 1
 */

/**
 * 54321
 * 5432
 * 543
 * 54
 * 5
 */

/**
 * 55555
 * 4444
 * 333
 * 22
 * 1
 */


/**
 * 1
 * 22
 * 333
 * 4444
 * 55555
 */








