//Area of Trapezoid Calculator 

// event listeners 
document.getElementById("btn").addEventListener("click", convert)
//event functions 

function convert () {
    //input 
    let b1 = Number (document.getElementById('num1').value);
    let b2 = Number (document.getElementById('num2').value);
    let h = Number (document.getElementById('num3').value);

    //process
    let total= (1/2)*(b1+b2)*h

    //output
    document.getElementById('result').innerHTML = total;
}