//Keyboard
function make_all_keys_unpressed(){
    let elems = document.getElementsByClassName('piano')[0].getElementsByTagName('div');
    for (let k in elems){
        elems[k].style='';
    }
}

addEventListener("keydown", function(e){
    if (e.key.toLowerCase() == 'a' || e.key.toLowerCase() == 'ф'){
        make_all_keys_unpressed();
        arguments('.do').style='background: red;';
    }
});