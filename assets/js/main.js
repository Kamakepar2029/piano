//Keyboard
function make_all_keys_unpressed(){
    let elems = document.getElementsByClassName('piano')[0].getElementsByTagName('div');
    for (let k in elems){
        elems[k].style='';
    }
}

addEventListener("keydown", function(e){
    let kp = e.key.toLowerCase();
    console.log(kp);
    if (kp == 'а' || kp == 'f'){
        make_all_keys_unpressed();
        a('.do').style='background: red;';
        do_note;
        do_note.play();
    }
    if (kp == 'б' || kp == ','){
        make_all_keys_unpressed();
        a('.dodies').style='background: red;';
        re_note;
        do_dies.play();
    }
    if (kp == 'в' || kp == 'd'){
        make_all_keys_unpressed();
        a('.re').style='background: red;';
        mi_note;
        re_note.play();
    }
    if (kp == 'г' || kp == 'u'){
        make_all_keys_unpressed();
        a('.redies').style='background: red;';
        fa_note;
        re_dies.play();
    }
    if (kp == 'д' || kp == 'l'){
        make_all_keys_unpressed();
        a('.mi').style='background: red;';
        sol_note;
        mi_note.play();
    }
    if (kp == 'е' || kp == 't'){
        make_all_keys_unpressed();
        a('.fa').style='background: red;';
        lya_note;
        fa_note.play();
    }
    if (kp == 'ё' || kp == '`'){
        make_all_keys_unpressed();
        a('.fadies').style='background: red;';
        si_note;
        fa_dies.play();
    }
    if (kp == 'ж' || kp == ';'){
        make_all_keys_unpressed();
        a('.sol').style='background: red;';
        sol_note.play();
    }
    if (kp == 'з' || kp == 'p'){
        make_all_keys_unpressed();
        a('.soldies').style='background: red;';
        sol_dies.play();
    }
});