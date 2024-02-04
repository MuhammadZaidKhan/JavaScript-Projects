const input = document.getElementById("zakaat");
const button = document.getElementById("result");
const payableSpan = document.getElementById("payable");

function calculate(){
    const zakaat = input.value * 0.025;
    payableSpan.innerHTML = `Zakkat Payable:${zakaat}`;
}

