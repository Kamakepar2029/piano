//Keyboard
function make_all_keys_unpressed(){
    let elems = document.getElementsByClassName('piano')[0].getElementsByTagName('div');
    for (let k in elems){
        elems[k].style='';
    }
}

addEventListener("keydown", function(e){
    let kp = e.key.toLowerCase();
    if (kp == 'а' || kp == 'f'){
        make_all_keys_unpressed();
        a('.do').style='background: red;';
        do_note.currentTime = 1;
        do_note.play();
    }
    if (kp == 'б' || kp == ','){
        make_all_keys_unpressed();
        a('.re').style='background: red;';
        re_note.currentTime = 1;
        re_note.play();
    }
    if (kp == 'в' || kp == 'd'){
        make_all_keys_unpressed();
        a('.mi').style='background: red;';
        mi_note.currentTime = 1;
        mi_note.play();
    }
    if (kp == 'г' || kp == 'u'){
        make_all_keys_unpressed();
        a('.fa').style='background: red;';
        fa_note.currentTime = 1;
        fa_note.play();
    }
    if (kp == 'д' || kp == 'l'){
        make_all_keys_unpressed();
        a('.sol').style='background: red;';
        sol_note.currentTime = 1;
        sol_note.play();
    }
    if (kp == 'е' || kp == 't'){
        make_all_keys_unpressed();
        a('.lya').style='background: red;';
        lya_note.currentTime = 1;
        lya_note.play();
    }
    if (kp == 'ё' || kp == '`'){
        make_all_keys_unpressed();
        a('.si').style='background: red;';
        si_note.currentTime = 1;
        si_note.play();
    }
    if (kp == 'ж' || kp == ';'){
        make_all_keys_unpressed();
        a('.do1').style='background: red;';
    }
    if (kp == 'з' || kp == 'p'){
        make_all_keys_unpressed();
        a('.re1').style='background: red;';
    }
});