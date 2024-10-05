//storre it in local storage
//show th userdetails on the screen using DOM Manipulation

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
    parentEle.appendChild(childEle);

    //parentEle.innerHTML = parentEle.innerHTML + `<li>${obj.name} - ${obj.email} - ${obj.phonenumber}</li>`;
}