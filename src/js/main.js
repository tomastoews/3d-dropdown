const dropDown = document.querySelector('#dropdown');
const frontFace = document.querySelector('.front_face');
const bottomFace = document.querySelector('.bottom_face');
const listContainer = document.querySelector('.list');
const list = document.querySelector('ul');
const mainLabel = document.querySelector('.main-label');

frontFace.addEventListener('click', showBottom);
bottomFace.addEventListener('click', showFront);

document.addEventListener('DOMContentLoaded', () => {
    const item = document.querySelector('.active');
    mainLabel.innerText = item.children[0].innerText;
});

list.querySelectorAll('li').forEach(listItem => {
    listItem.addEventListener('click', (item) => {
        let li;
        if (item.target.childElementCount == 0) {
            mainLabel.innerText = item.target.innerText;
            li = item.target.parentElement;
        } else {
            mainLabel.innerText = item.target.children[0].innerText;
            li = item.target;
        }
        resetSelectedListItem(li);
    });
});

function showBottom() {
    dropDown.classList.remove('show_front');
    dropDown.classList.add('show_bottom');
    setTimeout(() => expandList(), 400);
}

function showFront() {
    collapseList();
    setTimeout(() => {
        dropDown.classList.remove('show_bottom');
        dropDown.classList.add('show_front');
    }, 600);
}

function expandList() {
    listContainer.classList.add('expand');
    setTimeout(() => {
        list.classList.add('show');
    }, 400);
}

function collapseList() {
    list.classList.remove('show');
    setTimeout(() => {
        listContainer.classList.remove('expand');
    }, 150);
}

function resetSelectedListItem(newItem) {
    list.querySelectorAll('li').forEach(listItem => {
        listItem.classList.remove('active');
    });
    newItem.classList.add('active');
}