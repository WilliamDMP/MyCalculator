function valor(x) {
    document.getElementById('display').value += x
}

function borrardisplay(y) {
    document.getElementById('display').value = y
}

function cal_resultado() {
    let result = eval(document.getElementById('display').value) 
    document.getElementById('display').value = result
}