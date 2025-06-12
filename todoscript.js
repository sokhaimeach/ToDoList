const input_list = document.getElementById('input-list');
const addList = document.getElementById('add-btn');
const allList = document.getElementById('todo-list');

let arrList = [];


addList.addEventListener('click', function() {
    addList.classList.add('animation');
    getList();
    setTimeout(() => {
        addList.classList.remove('animation');
    }, 150);
});

function getList() {
    const getText = input_list.value;
    if (getText == ""){ return; }
    arrList.push(getText);
    input_list.value = "";
    showList();
}

function showList() {
    allList.innerHTML = "";
    let iconId = 'index';
    for(let i = 0; i < arrList.length; i++){
        iconId = 'index' + i;
        allList.insertAdjacentHTML('beforeend', `
            <div class="list">
                <i class="bi bi-circle check-list" class="${iconId}"></i>
                <p class="text">${arrList[i]}</p>
                <i class="bi bi-trash trash-list" class="${iconId}"></i>
            </div>
        `);
    }
}


