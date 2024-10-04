const filter=document.getElementById('filter');

const form=document.querySelector('form');
const fruits=document.querySelector('.fruits');

form.addEventListener('submit', function(event){
    event.preventDefault();
    //selected the input element
    const fruitToAdd=document.getElementById('fruit-to-add');
    //creating the li
    const newLi=document.createElement('li');
    //newLi.innerHTML=fruitToAdd.value + '<button class="delete-btn">x</button>';
    const newLiText=document.createTextNode(fruitToAdd.value);
    //console.log(fruitToAdd.value);
    newLi.appendChild(newLiText);
    //console.log(newLi);
    newLi.className='fruit';
    //created delete button to be added inside li
    const deleteBtn=document.createElement('button');
    const deleteBtnText=document.createTextNode('x');
    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.className='delete-btn';
    newLi.appendChild(deleteBtn);
    //adding li as the last element of unordered list
    //fruits.appendChild(newLi);
    const p=document.createElement('p');
    p.style.fontStyle='italic';
    p.className='fruit-description';
    p.appendChild(document.createElement('br'));
    const fruitDescript=document.getElementById('description');
    const pText=document.createTextNode(fruitDescript.value);
    p.appendChild(pText);
    newLi.appendChild(p);
    console.log(fruits.appendChild(newLi));
    const editBtn=document.createElement('button');
    const editBtnText=document.createTextNode('Edit');
    editBtn.className='edit-btn';
    editBtn.appendChild(editBtnText);
    newLi.appendChild(editBtn);
    //const fruitDescript=document.getElementById('description');
    //const fruitToAdd=document.getElementById('fruit-to-add');
    //const newLi=document.createElement('li');
    //const newLiText=document.createTextNode(fruitToAdd.value);
    //newLi.appendChild(newLiText);
    /*const p=document.createElement('p');
    p.style.fontStyle='italic';
    p.appendChild(document.createElement('br'));
    const pText=document.createTextNode(fruitDescript.value);
    p.appendChild(pText);
    newLi.appendChild(p);
    console.log(fruits.appendChild(newLi));*/
    //console.log(newLi);
    
    

   // console.log(fruit);

    //console.log(newLi);
});
document.querySelectorAll('.fruits .fruit').forEach((li)=> {
    const editBtn=document.createElement('button');
    const editBtnText=document.createTextNode('Edit');
    editBtn.className='edit-btn';
    editBtn.appendChild(editBtnText);
    li.appendChild(editBtn);
})

fruits.addEventListener('click', function(event) {
    if(event.target.classList.contains('delete-btn')) {
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);      
    }
})

const fruitDescription=document.createElement('input');
fruitDescription.type='text';
fruitDescription.id='description';
fruitDescription.name='description';
fruitDescription.placeholder='Enter description of fruits';



form.insertBefore(fruitDescription, document.querySelector('button'));


filter.addEventListener('keyup', function(e) {
    e.preventDefault();
    const textEnter = e.target.value.toLowerCase();
    const fruitItems=document.getElementsByClassName('fruit');
    
    for(let i=0;i<fruitItems.length;i++) {
        const currentFruitText=fruitItems[i].firstChild.textContent.toLowerCase();
        if(currentFruitText.indexOf(textEnter)===-1) {
            fruitItems[i].style.display='none';
        }    
    }
    for(let i=0;i<fruitItems.length;i++) {
        const currentFruitDesText=fruitItems[i].getElementsByTagName('p')[0].textContent.toLowerCase();
        if(currentFruitDesText.indexOf(textEnter)===-1) {
            console.log(fruitItems[i].style.display='none');
        } else {
            console.log(fruitItems[i].style.display='');
        }
    }
})


/*form.addEventListener('submit', function(e) {
    e.preventDefault();
    const fruitDescript=document.getElementById('description');
    const fruitToAdd=document.getElementById('fruit-to-add');
    const newLi=document.createElement('li');
    const newLiText=document.createTextNode(fruitToAdd.value);
    newLi.appendChild(newLiText);
    const p=document.createElement('p');
    p.style.fontStyle='italic';
    p.appendChild(document.createElement('br'));
    const pText=document.createTextNode(fruitDescript.value);
    p.appendChild(pText);
    newLi.appendChild(p);
    console.log(fruits.appendChild(newLi));
})*/