const allCard = document.querySelectorAll("button");
const display = document.getElementById('display')
let value = 0;
let result = 0;
let method = "";

allCard.forEach((item, index)=>{
    item.addEventListener("click", ()=>{
        let text = item.innerHTML
        if(text != "AC" && text != "+" && text != "-" && text != "*" && text != "/" && text != "=" && text != "0" ){
            display.value = display.value + text
            value = Number(display.value)
        }
        else if(text == "0" && display.value != "") {
            display.value = display.value + text
            value = Number(display.value)
        }

        else if(text == "+"){
            method = "+"
            display.value = ""
            result = value
        }

        else if(text == "-"){
            method = "-"
            display.value = ""
            result = value
        }

        else if(text == "*"){
            method = "*"
            display.value = ""
            result = value
        }

        else if(text == "/"){
            method = "/"
            display.value = ""
            result = value
        }

        else if( text == "="){ 
            if(method == "+"){
                result = result + value;
            }
            else if(method == "-"){
                result = result - value;
            }
            else if(method == "*"){
                result = result * value;
            }
            else if(method == "/"){
                result = result / value;
            }
            display.value = result;
        }

        else if(text == "AC"){
            display.value = ""
            result = 0;
        }
    })
})