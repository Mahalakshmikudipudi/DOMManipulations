const form=document.querySelector('form');
const fruitList=document.querySelector('.fruits');
const filterInput=document.getElementById('filter');
//const fruit=document.querySelector('fruit');

const descriptionInput=document.createElement('input');
descriptionInput.id='description';
descriptionInput.type='text';
descriptionInput.placeholder='Enter description of fruits';

form.insertBefore(descriptionInput, document.querySelector('button'));

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const fruitName=document.getElementById('fruit-to-add').value;
    const fruitDescription=document.getElementById('description').value;

    if(fruitName && fruitDescription) {
        const newLi=document.createElement('li');
        const fruitToAdd=document.getElementById('fruit-to-add');
        const newLiText=document.createTextNode(fruitToAdd.value);
        newLi.appendChild(newLiText);
        newLi.className='fruit';
        
        const p=document.createElement('p');
        p.style.fontStyle='italic';
        p.className='fruit-description';
        p.appendChild(document.createElement('br'));
        const fruitDescript=document.getElementById('description');
        const pText=document.createTextNode(fruitDescript.value);
        p.appendChild(pText);
        newLi.appendChild(p);
        console.log(fruitList.appendChild(newLi));

        const deleteBtn=document.createElement('button');
        const deleteBtnText=document.createTextNode('x');
        deleteBtn.appendChild(deleteBtnText);
        deleteBtn.className='delete-btn';
        newLi.appendChild(deleteBtn);

        const editBtn=document.createElement('button');
        const editBtnText=document.createTextNode('Edit');
        editBtn.className='edit-btn';
        editBtn.appendChild(editBtnText);
        newLi.appendChild(editBtn);

        document.getElementById('fruit-to-add').value='';
        document.getElementById('description').value='';

    }
});

document.querySelectorAll('.fruits .fruit').forEach((li)=> {
    const editBtn=document.createElement('button');
    const editBtnText=document.createTextNode('Edit');
    editBtn.className='edit-btn';
    editBtn.appendChild(editBtnText);
    li.appendChild(editBtn);
});

fruitList.addEventListener('click', function(e) {
    if(e.target.classList.contains('delete-btn')) {
        e.target.parentElement.remove();
    }
});

filterInput.addEventListener('keyup', function(e) {
    e.preventDefault();
    const filterValue=filterInput.value.toLowerCase();
    const fruits=document.querySelectorAll('.fruits li');
    
    fruits.forEach(function(fruit) {
        const fruitName=fruit.firstChild.textContent.toLowerCase();
        const fruitDescription=fruit.firstElementChild.textContent.toLowerCase();

        if(fruitName.includes(filterValue) || fruitDescription.includes(filterValue)) {
            fruit.style.display='';
        } else {
            fruit.style.display='none';
        }

    });
});
