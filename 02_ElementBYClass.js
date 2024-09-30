const fruit=document.getElementsByClassName('fruit');
console.log(fruit[1]);
fruit[1].textContent='Pineapple';
fruit[1].style.fontWeight='bold';

for(let i=0;i<fruit.length;i++) {
  fruit[i].style.backgroundColor='gray';
}