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
    console.log(arrList);
}




