localStorage.setItem('name', 'Bob');
//console.log(localStorage.getItem('name'));
//console.log(localStorage.removeItem('name'));


sessionStorage.setItem('name', 'John');
//console.log(sessionStorage.getItem('name'));
//console.log(sessionStorage.removeItem('name'));
//if we change the name then
sessionStorage.setItem('name', 'Bobby');


document.cookie = "name=Kyle expires=" + new Date(9999, 0, 1).toUTCString();

//create a form whatever input the user is put, instead of console logging that store it in the local storage

//localStorage.setItem('userDetailsName', obj.name);

let myObj={
    name:"Maha",
    age:"25"
};
//jwe need to represent the objects as a string

let myObj_serialized = JSON.stringify(myObj);
//console.log(myObj_serialized);

localStorage.setItem('myObj', myObj_serialized);
//console.log(localStorage);

let myObj_deserializes=JSON.parse(localStorage.getItem("myObj"));

console.log(myObj_deserializes);