function handleFormSubmit(event) {
    event.preventDefault();
    const username=document.getElementById('username').value;
    const email=document.getElementById('email').value;
    const phonenumber=document.getElementById('phone').value;

    const obj = {
        username,
        email, 
        phonenumber
    };
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showUserOnScreen(obj);

    document.getElementById('username').value='';
    document.getElementById('email').value='';
    document.getElementById('phone').value='';
   

}

function showUserOnScreen(obj) {
    const parentEle = document.getElementById('listOfItems');
    const childEle = document.createElement('li');
    childEle.textContent = obj.username + ' - ' + obj.email + ' - ' + obj.phonenumber;
    //parentEle.appendChild(childEle);

    //parentEle.innerHTML = parentEle.innerHTML + `<li>${obj.name} - ${obj.email} - ${obj.phonenumber}</li>`;

    const deleteBtn=document.createElement('input');
    deleteBtn.type='button';
    deleteBtn.value='Delete';
    deleteBtn.onclick = () => {
        localStorage.removeItem(obj.email);
        parentEle.removeChild(childEle);
    }

    childEle.appendChild(deleteBtn);
    parentEle.appendChild(childEle);
}