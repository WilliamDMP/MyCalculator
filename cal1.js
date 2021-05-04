function valor(x) {
    document.getElementById('display').value += x
}

function borrardisplay() {
    document.getElementById('display').value = ""
}

function cal_resultado() {
    let result = eval(document.getElementById('display').value) 
    document.getElementById('display').value = result
}