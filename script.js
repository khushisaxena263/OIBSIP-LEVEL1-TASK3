const calculatetemp = () => {
    const numberTemp = document.getElementById('temp').value;
    /*console.log(numberTemp);*/

    const tempSelected =document.getElementById('tempdiff');
    const valuetemp = tempdiff.options[tempSelected.selectedIndex].value;

    const ctof = (celcius) => {
        if(celcius != 0){
            let Fehrenheitv = Math.round((celcius * 9/5) + 32);
            return Fehrenheitv;
        }
        else{
            return ' '
        }
    }

    const ftoc = (Fahrenheit) => {
        if(Fahrenheit!=0){
            let celciusv = Math.round(5/9*(Fahrenheit - 32));
            return celciusv;
        }
        else{
            return ' '
        }
    }
    


    let result;
    

    if(valuetemp == 'cel'){
        result = ctof(numberTemp);
        document.getElementById('resultContain').innerHTML ='Answer:  ' + result + ' &#8457';
    }
    else{
        result=ftoc(numberTemp);
        document.getElementById('resultContain').innerHTML = 'Answer:  '+ result + ' &#8451';
    }

}
const clear_inputs = () => {
    inputs=document.getElementsByClassName('inputs')
    for(input of inputs){
        input.value=' ';
        $("span").html("");
    }
  }