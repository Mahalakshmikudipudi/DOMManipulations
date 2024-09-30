const listItem=document.getElementsByTagName('li');
listItem[2].style.color='pink';
for(let i=0;i<listItem.length;i++) {
  listItem[i].style.fontStyle='italic';
}

const fruit=document.getElementsByClassName('fruit');
for(let i=0;i<fruit.length;i++) {
  fruit[i].style.fontWeight='bold';
}