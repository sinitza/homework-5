function add() {
    var input = document.getElementsByName('item')[0];

    if (input.value) {
        var li = document.createElement('li');
        li.innerText = input.value;
        input.value = '';
        var ul = document.getElementById('list');
        ul.appendChild(li);
        recount();

        var remove = document.getElementsByClassName('remove');
        var span = document.createElement('span');
        var txt = document.createTextNode('×');
        span.className = 'remove';
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < remove.length; i++) {
            remove[i].onclick = function () {
                this.parentElement.remove();
                recount();
            }
        }

        li.onclick = select;
    } else {
        alert('You don\'t write!');
    }

}

function addEnter(ev) {
    if (ev.keyCode === 13) {
        add();
    }
}

function select() {
    var el = event.toElement;
    el.classList.toggle('checked');
    if (el.classList.contains('checked')) {
        recount();
    } else {
        recount();
    }
}


function recount() {
    var totalCount = document.querySelectorAll('li').length;
    var doneCount = document.querySelectorAll('li.checked').length;
    var count = totalCount - doneCount;
    document.getElementById('items-count').innerHTML = count + ' items to do / ' + doneCount + ' items done';
}





