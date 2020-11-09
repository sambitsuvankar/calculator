console.log("This is my calculator project");

let screen = document.getElementById('screen');
button = document.querySelectorAll("button")

let screenValue = ""
for(items of button){
    items.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        // console.log(buttonText)
        // screen.value += buttonText
        if(buttonText == 'x'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '='){
            screen.value = eval(screenValue);
        }
        else if (buttonText == '⌫'){
            screenValue = screen.value.slice(0,screenValue.length - 1)
            screen.value = screenValue
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
