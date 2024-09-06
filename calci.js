let display = document.getElementById('display');
let historyList = document.getElementById('history-list');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value);
        addToHistory(display.value + ' = ' + result);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function addToHistory(entry) {
    let li = document.createElement('li');
    li.textContent = entry;
    historyList.appendChild(li);
}
