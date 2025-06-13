const input_list = document.getElementById('input-list');
const addList = document.getElementById('add-btn');
const allList = document.getElementById('todo-list');

let stored = JSON.parse(localStorage.getItem('storeArr')) || [];
let arrList;
try{
    arrList = Array.isArray(stored) ? stored : [];
} catch(e){
    arrList = [];
}
let checkClassName = 'check-list bi bi-circle';

showList();

addList.addEventListener('click', function() {
    addList.classList.add('animation');
    getList();
    setTimeout(() => {
        addList.classList.remove('animation');
    }, 150);
});

function getList() {
    // const getText = input_list.value;
    if (input_list.value == ""){ return; }
    let getObject = {
        text: input_list.value,
        name: checkClassName
    };

    arrList.push(getObject);
    localStorage.setItem('storeArr', JSON.stringify(arrList));
    input_list.value = "";
    showList();
}

function showList() {
    allList.innerHTML = "";
    for(let i = 0; i < arrList.length; i++){
        let color = (arrList[i].name == 'check-list bi bi-circle') ? 'var(--text-color)' : 'var(--accent-color)';
        allList.insertAdjacentHTML('beforeend', `
            <div class="list">
                <i class="${arrList[i].name}" style="color:${color}"></i>
                <p class="text">${arrList[i].text}</p>
                <i class="bi bi-trash trash-list"></i>
            </div>
        `);
    }
    const checked = document.querySelectorAll('.check-list');
    const trash = document.querySelectorAll('.trash-list');
    const listText = document.querySelectorAll('.text');
    checkedList(checked);
    removeList(trash, listText);
}

function checkedList(checks) {
    checks.forEach((check, i) => {
        check.addEventListener('click', () => {
            if(check.className == 'check-list bi bi-circle'){
                check.classList.remove('bi-circle');
                check.classList.add('bi-check-circle-fill');
                check.style.color = 'var(--accent-color)';
            } else {
                check.classList.remove('bi-check-circle-fill');
                check.classList.add('bi-circle');
                check.style.color = 'var(--text-color)';
            }
            arrList[i].name = check.className;
            console.log(arrList);
            localStorage.setItem('storeArr', JSON.stringify(arrList));
        })
    })
}

function removeList(trash, listText){   
    trash.forEach((t, i) => {
        t.addEventListener('click', () => {
            const id = listText[i].innerText;
            arrList = arrList.filter(list => list.text !== id);
            localStorage.setItem('storeArr', JSON.stringify(arrList));
            showList();
        });
    });
}