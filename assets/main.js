// This Function Clear All the values on the screeen
function clearScreen() {
    document.getElementById("input").value = "";document.getElementById("result").value = "";
}
// Delete
function del(value) {
    document.getElementById("input");
    input.value = input.value.substring(0, input.value.length - 1);
}

// This Function Displays the Result
function display(value) {
    document.getElementById("input").value += value;
}

// This Function Evaluates the expression
function calculate() {
    try {
        if (document.getElementById("input").value != "") {
            var p = document.getElementById("input").value;
            var q = eval(p);
            document.getElementById("result").value = q;
        } 
    } catch (error) {
        document.getElementById("result").value = 'Syntax ERROR';
        
    }
        
}