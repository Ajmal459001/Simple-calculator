// display content in calculator screen
function displayContent(content){
    result.value += content
}
// clear calculator screen
function calScreenClear(){
    result.value = ""
}

// evaluate
function calOutput(){
    result.value = eval(result.value)    
}

function removeLastDigit(){
    result.value = result.value.slice(0,-1)
}