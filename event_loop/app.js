console.log('Hello');
// event loop lien tuc goi call stack đc lauy ra tu call stack trươc tien
setTimeout(() => {
    console.log('How are you ?')
}, 0)

//set timeout la 1 ham async do do sau khi lay ra khoi stack thi 
// se sinh ra timer ben nodejs trong khi time dang run thi  console.log('Bye'); dc goi// 
// khi timer dang hoat dong call back dc day vao event queue
// va ham console.log('Bye'); dc lay ra khoi stack

console.log('Bye');
// khi stack empty thi callback dc goi
