function infinity() {
    let i = 0;
    while(true){
        console.log(i++);
    }
}

function infinity2(){
    let i = 0;
    setInterval(function(){
        console.log(i++);
    }, 1000);
}

function date(){
    console.log(new Date());
    fazqqcoisa();
}

function fazqqcoisa(){
    console.log("qq coisa");
}
//infinity(); cuidado
date();