let filterInput = document.querySelector('#filterInput');
const form = document.querySelector('form');

const filterNames = (e) => {
let filterValue = filterInput.value.toUpperCase();
console.log(filterValue);

let ul = document.querySelector('#names');
let li = ul.querySelectorAll('li.list-group-item');

for (let i = 0; i < li.length; i++){
    //hämtar alla a taggar (li.[i] = current iteration)
    let a = li[i].getElementsByTagName('a')[0];

    //om input matchar kontakten
    if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
        li[i].style.display = '';
    }
    else {
        li[i].style.display = 'none';
    }
}
}

filterInput.addEventListener('keyup', filterNames);




form.addEventListener('submit', e => {
    e.preventDefault();
    let contactName = form.querySelector('#contactName').value.trim();
    let contactNumber = form.querySelector('#contactNumber').value.trim();
    letters = document.querySelectorAll('ul h2');
    
    if(contactName === '' || contactNumber === ''){
        return
    }

    letters.forEach(header => {
    
        if (header.innerHTML == contactName[0].toUpperCase()){
        //skapar Li
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.classList.add('list-group-item-action');
        
        //skapar a
        const aLink = document.createElement('a');
        aLink.setAttribute('href', '#exampleModalCenter');
        aLink.setAttribute('data-bs-toggle', 'modal');
        aLink.innerText = contactName;
        
        //skapar p
        const phoneNumber = document.createElement('p');
        phoneNumber.classList.add('phoneNumber');
        phoneNumber.innerText = contactNumber;
        
        //lägger a-taggen i li
        listItem.appendChild(aLink);

        //lägger p-taggen i li, under a
        listItem.appendChild(phoneNumber);

        //appendar till div
        header.nextElementSibling.appendChild(listItem);
        }
    
    });

    form.reset();

});

const ul = document.querySelector('#names');
const a = document.querySelectorAll('a');
const li = document.querySelectorAll('.list-group-item');

ul.addEventListener('click', e => {
    const modalText = document.querySelector('.modal-body');
    const modalTitle = document.querySelector('#exampleModalLongTitle');
    modalTitle.innerText = e.target.innerText;

    if(!(e.target.nextElementSibling.innertext == '')){
        modalText.innerText = e.target.nextElementSibling.innerText;
    }
    else{
        modalText.innerText = 'Lägg till telefonnummer';
    }
    
})


//tbd - modal? ändra kontaktnamn/telefonnummer?

