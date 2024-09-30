const mainHeading=document.querySelector('#main-heading');
mainHeading.style.textAlign='center';

const fruits=document.querySelector('.fruits');
fruits.style.backgroundColor='gray';
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.width='50%';
fruits.style.borderRadius='5px';
fruits.style.listStyleType='none';

const basketHeading=document.querySelector('h2');
basketHeading.style.marginLeft='30px';

/*const fruitItems=document.querySelector('.fruit:nth-child(4)');
fruitItems.style.backgroundColor='white';*/

const fruitItems=document.querySelectorAll('.fruit');
for(let i=0;i<fruitItems.length;i++) {
  fruitItems[i].style.backgroundColor='white';
  fruitItems[i].style.padding='10px';
  fruitItems[i].style.margin='10px';
  fruitItems[i].style.boderRadius='5px';
}

const oddFruitItems=document.querySelectorAll('.fruit:nth-child(odd)');
for(let i=0;i<oddFruitItems.length;i++) {
  oddFruitItems[i].style.backgroundColor='lightgray';
}