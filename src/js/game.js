// buttons = game.getElementsByClassName("block")

function startGame(gameName) {
    button11 = document.getElementById("button11");
    button12 = document.getElementById("button12");
    button13 = document.getElementById("button13");
    button14 = document.getElementById("button14");
    button21 = document.getElementById("button21");
    button22 = document.getElementById("button22");
    button23 = document.getElementById("button23");
    button24 = document.getElementById("button24");
    button31 = document.getElementById("button31");
    button32 = document.getElementById("button32");
    button33 = document.getElementById("button33");
    button34 = document.getElementById("button34");
    button11.className = "block";
    button12.className = "block";
    button13.className = "block";
    button14.className = "block";
    button21.className = "block";
    button22.className = "block";
    button23.className = "block";
    button24.className = "block";
    button31.className = "block";
    button32.className = "block";
    button33.className = "block";
    button34.className = "block";
    // button11.addEventListener('click', onClickButton("button11"), false)
}


let trueId = [["button11", "button12", "button13"], ["button21", "button23"],["button32", "button33"]];
let allId = [["button11", "button12", "button13", "button14"], ["button21", "button22", "button23", "button24"],
    ["button31", "button32", "button33", "button34"]];
let playerId = [];


function onClickButton(buttonId) {
    thisButton = document.getElementById(buttonId);

    if (thisButton.className == "block") {
        thisButton.className = "block correct";
        playerId.push(buttonId);

        console.log(playerId);
    } else if(thisButton.className = "block correct"){
        thisButton.className = "block";

        _.pull(playerId,buttonId);
        console.log(playerId);

    } else {
        thisButton.className = "block";

        _.pull(playerId,buttonId);
        console.log(playerId);
    }

    playerId.forEach(element => console.log(element));
}

function onCheckButton() {

    let gg = _.xor(playerId, trueId.flat(2)); //Массив с неверно выбранными или не поставленными вариантами

    if (gg.length === 0) {
        console.log(gg);
        console.log("Все заголовки горят");  //Подсвечиваются все заголовки
        console.log("SUCCESSFUL"); //Тут кнопка взломать перевдит на страницу с описанием

    } else {
        console.log("BAD");

        gg.forEach(el => {
            idx = onCheckLine(el);
            setStyleLine(idx);

            thisBut = document.getElementById(el);
            thisBut.className = "block incorrect";

            if (trueId.flat(2).find(i => el === i)) {
                console.log("НЕ ХВАТАЕТ " + el);
                no_but = document.getElementById(el);
                no_but.className = "block"
            }
        })
        console.log(gg);
    }

}

//Не верная функция, она должна подсвечивать ряд в зависимости от правильности выбора)
function setStyleLine(idx) {
    if (idx === 0) {
        console.log("Первый ряд потух");
    }
    else if (idx === 1) {
        console.log("Потух второй ряд");
    }
    else if (idx === 2) {
        console.log("Потух третий ряд");
    } else {
        console.log("Все горят");
    }
}


//Функция определяет в каком ряду находится элемент
function onCheckLine(key){
    console.log(key, allId);
    const a = allId.findIndex(arrEl => {
        console.log('arrEl', arrEl, key)
        return arrEl.find(i => i === key)
    });
    console.log(a);
    return a
}
