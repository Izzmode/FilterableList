let filterInput = document.querySelector('#filterInput');

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