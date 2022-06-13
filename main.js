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

//Basic link underline mouse over

var underLine = document.querySelector('.BasicLink');
underLine.addEventListener('mouseover', mouOver, false);
underLine.addEventListener('mouseout', mouOut, false);

function mouOver() {
   underLine.setAttribute('style', 'text-decoration-line:underline');
}

function mouOut() {
   underLine.setAttribute('style', '');
}

var underTwo = document.querySelector('#BasicLinkk');
underTwo.addEventListener('mouseover', mousOver, false);
underTwo.addEventListener('mouseout', mousOut, false);

function mousOver() {
   underTwo.setAttribute('style', 'text-decoration-line:underline');
}
function mousOut() {
   underTwo.setAttribute('style', '');
}

var underThree = document.querySelector('.BasicLinkFooterText');
underThree.addEventListener('mouseover', mouuOver, false);
underThree.addEventListener('mouseout', mouuOut, false);

function mouuOver() {
   underThree.setAttribute('style', 'text-decoration-line:underline');
}

function mouuOut() {
   underThree.setAttribute('style', '');
}

var underFour = document.querySelector('#BasicLinkFooterText2');
underFour.addEventListener('mouseover', mouuuOver, false);
underFour.addEventListener('mouseout', mouuuOut, false);

function mouuuOver() {
   underFour.setAttribute('style', 'text-decoration-line:underline');
}

function mouuuOut() {
   underFour.setAttribute('style', '');
}

var underFive = document.querySelector('#BasicLinkFooterText3');
underFive.addEventListener('mouseover', mouuuuOver, false);
underFive.addEventListener('mouseout', mouuuuOut, false);

function mouuuuOver() {
   underFive.setAttribute('style', 'text-decoration-line:underline');
}

function mouuuuOut() {
   underFive.setAttribute('style', '');
}

//hover on buttonsgroup

document.getElementById('stn').addEventListener('mouseover', mouseeOver);
document.getElementById('stn').addEventListener('mouseout', mouseeOut);

function mouseeOver() {
   document.getElementById('stn').style.color = 'rgb(255,255,255)';
}
function mouseeOut() {
   document.getElementById('stn').style.color = '';
}

document.getElementById('nts').addEventListener('mouseover', mouseeeOver);
document.getElementById('nts').addEventListener('mouseout', mouseeeOut);

function mouseeeOver() {
   document.getElementById('nts').style.color = 'rgb(255,255,255)';
}
function mouseeeOut() {
   document.getElementById('nts').style.color = '';
}


