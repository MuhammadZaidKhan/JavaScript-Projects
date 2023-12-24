document.addEventListener("DOMContentLoaded",()=>{

    const et2000 = document.getElementById('et2000');
    const et500 = document.getElementById('et500');
    const et200 = document.getElementById('et200');
    const et100 = document.getElementById('et100');
    const et50 = document.getElementById('et50');
    const et20 = document.getElementById('et20');
    const et10 = document.getElementById('et10');
    const et5 = document.getElementById('et5');
    const et2 = document.getElementById('et2');
    const et1 = document.getElementById('et1');
    
    const text2000 = document.getElementById('text2000');
    const text500 = document.getElementById('text500');
    const text200 = document.getElementById('text200');
    const text100 = document.getElementById('text100');
    const text50 = document.getElementById('text50');
    const text20 = document.getElementById('text20');
    const text10 = document.getElementById('text10');
    const text5 = document.getElementById('text5');
    const text2 = document.getElementById('text2');
    const text1 = document.getElementById('text1');
    
    const finalresult = document.getElementById('finalresult');
    const finalresultinwords = document.getElementById('finalresultinwords');
    const rstbtn = document.getElementById('rstbtn');
    
    const cashInputs = [et2000,et500,et200,et100,et50,et20,et10,et5,et2,et1];
    const cashTexts = [text2000,text500,text200,text100,text50,text20,text10,text5,text2,text1]; 
    
    finalresultinwords.textContent = "Total Cash in Words: Zero";
    
    cashTexts.forEach((text) => {
        text.textContent = ""; // Clear text content
      });
    
    cashInputs.forEach((input,index)=>{
        input.addEventListener('input',()=>{
            cashCalculate(index);
        })
    });
    
    
    function cashCalculate(index){
        const denomination = [2000,500,200,100,50,20,10,5,2,1];
        const inputValue = cashInputs[index].value.trim();
        const rowValue = inputValue !== "" ? inputValue * denomination[index] : ""; // Check if input is not empty
        cashTexts[index].textContent = rowValue !== "0" && rowValue !== "" ? rowValue.toFixed(0) : "";
        
        totalCash();
    }
    

    function totalCash() {
        let totalCashValue = 0;
        cashTexts.forEach((text) => {
          const value = parseInt(text.textContent);
          if (!isNaN(value)) { // Only add valid numbers
            totalCashValue += value;
          }
        });
        finalresult.textContent = "Total Cash: " + totalCashValue;

        finalresultinwords.textContent = `Total Cash in Words: ${convertToWords
        (totalCashValue)}`;
      }

    rstbtn.addEventListener("click",resetAll);
    function resetAll(){
        cashInputs.forEach((input)=>{
            input.value = "";
            finalresult.textContent = "Total Cash: 0 ";
            finalresultinwords.textContent = "Total Cash in Words: Zero ";
        });

        cashTexts.forEach((text)=>{
            text.textContent = "";

        });
    }

    cashInputs.forEach(input => {
        input.addEventListener("input",()=>{
            const value = parseInt(input.value,10);
            if(isNaN(value) || value < 0){
                input.value = "";
            }
        })
    })

    function convertToWords(number){

        const units = ['', "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

        const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

        const tens = ['', "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

        if(number === 0){
            return "Zero";
        }

        let words = "";

        if(Math.floor(number/10000000)>0){
            words += convertToWords(Math.floor(number/10000000)) + ' Crore '
            number %= 10000000;
        }
        if(Math.floor(number/100000)>0){
            words += convertToWords(Math.floor(number/100000)) + ' Lakh '
            number %= 100000;
        }
        if(Math.floor(number/1000)>0){
            words += convertToWords(Math.floor(number/1000)) + ' Thousand '
            number %= 1000;
        }
        if(Math.floor(number/100)>0){
            words += convertToWords(Math.floor(number/100)) + ' Hunderd '
            number %= 100;
        }

        if(number > 0){

            if(number < 10){
                words += units[number];
            }
            else if(number < 20) {
                words += teens[number - 10];
            }
            else{
                words += tens[Math.floor(number / 10)];
                if(number % 10 > 0){
                    words += ' ' + units[number % 10]
                }
            }
        }
    return words.trim ();
    }

    

});