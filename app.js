function getnum(number){
    var onclick = document.getElementById("onclick");
    onclick.value += number; 
}
function clearall(){
    var onclick = document.getElementById("onclick");
    onclick.value=""
    }
function fullresult(){
    var onclick = document.getElementById("onclick");
    onclick.value = eval(onclick.value)
}