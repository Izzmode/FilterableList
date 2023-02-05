let filterInput = document.querySelector('#filterInput');
const form = document.querySelector('form');

const filterNames = (e) => {
let filterValue = filterInput.value.toUpperCase();
console.log(filterValue);

let ul = document.querySelector('#names');
let li = ul.querySelectorAll('li.collection-item');

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



//SKAPA KONTAKT

// const addContact = (e) => {
//     e.preventDefault();
//     const collectionHeader = document.querySelector('.collection-header');
//     let contactName = form.querySelector('#contactName').value;
//     let contactNumber = form.querySelector('#contactNumber').value;

//     console.log(collectionHeader.firstElementChild.innerText.indexOf('A'))
//     console.log(contactName.indexOf('A'))

    
//     if (collectionHeader.firstElementChild.innerText.indexOf('A') == contactName.indexOf('A')) {
//         //skapar Li
//     const listItem = document.createElement('li');
//     listItem.classList.add('collection-item');
    
//     //skapar a
//     const aLink = document.createElement('a');
//     aLink.innerText = contactName;
    
//     //lägger a-taggen i li
//     listItem.appendChild(aLink);

//     // tbd fixa bättre append
//     collectionHeader.appendChild(listItem);



// }

// }

// form.addEventListener('submit', addContact);


form.addEventListener('submit', e => {
    e.preventDefault();
    let contactName = form.querySelector('#contactName').value;
    let contactNumber = form.querySelector('#contactNumber').value;
    letters = document.querySelectorAll('ul h2');

    letters.forEach(header => {
        console.log(contactName[0].toUpperCase())
        console.log(header.innerHTML)
        if (header.innerHTML == contactName[0].toUpperCase()){
                        //skapar Li
        const listItem = document.createElement('li');
        listItem.classList.add('collection-item');
        
        //skapar a
        const aLink = document.createElement('a');
        aLink.innerText = contactName;
        
        //lägger a-taggen i li
        listItem.appendChild(aLink);

        // tbd fixa bättre append
        header.nextElementSibling.appendChild(listItem);
        }
    
    });

    form.reset();

});


