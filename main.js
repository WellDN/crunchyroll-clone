const list = document.querySelector('#lan-list');
const listLan = document.querySelector('.LanguageList');

//display language list

const selectList = () => {
    list.classList.toggle('Selector2');
    listLan.classList.toggle('Selector3');
}

list.addEventListener('click', selectList);

//hover on styledButton

var target = document.querySelector('.StyledButton3');
target.addEventListener("mouseover", mOver, false);
target.addEventListener("mouseout", mOut, false);

function mOver() {
   target.setAttribute("style", "background-color: rgb(255, 148, 77)");
}

function mOut() {  
   target.setAttribute("style", "");
}

var targetTwo = document.querySelector('#StyledButtonn');
targetTwo.addEventListener("mouseover", mouseOver, false);
targetTwo.addEventListener("mouseout", mouseOut, false);

function mouseOver() {
   targetTwo.setAttribute("style", "background-color: rgb(255, 148, 77)");
}

function mouseOut() {  
   targetTwo.setAttribute("style", "");
}