function add() {
    var input = document.getElementsByName('item')[0];


    if (input.value) {
        var li = document.createElement('li');
        li.innerText = input.value;
        li.onclick = select;
        input.value = "";
        var ul = document.getElementById('list');
        ul.appendChild(li);
        amount++;
        console.log(amount);


        var remove = document.getElementsByClassName('remove');
        var span = document.createElement('span');
        var txt = document.createTextNode('×');
        span.className = 'remove';
        span.appendChild(txt);
        li.appendChild(span);

        for (i = 0; i < remove.length; i++) {
             remove[i].onclick = function() {
                 this.parentElement.remove();
                 amount--;
                 document.getElementById('items-count').innerHTML = amount + ' items';
                 console.log(amount);
             }
        }
    } else {
            alert('You don\'t write!');
        }
    document.getElementById('items-count').innerHTML = amount + ' items';
}

function addEnter(ev) {
    if (ev.keyCode === 13) {
        add();
    }
}

function select() {
    var el = event.toElement;
    el.classList.toggle('checked');
}


var count = document.querySelectorAll('li');
var amount = count.length;

