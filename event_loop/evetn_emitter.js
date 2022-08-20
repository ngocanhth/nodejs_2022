
// phan 2

console.log('Hello');

setTimeout(() => {
    console.log('How are u?');
}, 0);

new Promise((resolve, reject) => {
    resolve(`I'm good!`)
}).then(resolve => console.log(resolve));

// callback trong promise hay aync await se dc goi ngay khong phai doi stack empty

console.log('Bye!');


