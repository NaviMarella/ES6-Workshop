
// Convert this function to default parameters
function getMultiplication(a, b, c){
    a = a || 1;
    b = b || 1;
    c = c ? c : 1;
    var result = a*b;

    return result
}


function getName(name = 'Mercury') {
    return name
}

getName('Aaron') /*ENTER YOUR GUESS HERE*/
getName(undefined) /*ENTER YOUR GUESS HERE*/
getName(null) /*ENTER YOUR GUESS HERE*/
getName() /*ENTER YOUR GUESS HERE*/