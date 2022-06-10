const list = document.querySelector('#lan-list');
const listLan = document.querySelector('.LanguageList');

//display language list

const selectList = () => {
    list.classList.toggle('Selector2');
    listLan.classList.toggle('Selector3');
}

list.addEventListener('click', selectList);


