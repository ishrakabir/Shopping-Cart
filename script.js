function updateAmount(inputId, id1, id2, id3, id4) {
    document.getElementById(id1).removeAttribute('disabled');
    const getInput = parseInt(document.getElementById(id2).value);
    console.log(getInput);
    let newVal;
    if (inputId)
        newVal = getInput + 1;
    else {
        {
            if (getInput > 1)
                newVal = getInput - 1;
            else {
                {
                    newVal = 0;
                    document.getElementById(id1).setAttribute('disabled', true);
                }
            }
        }
    }
    // console.log(newVal);
    document.getElementById(id2).value = newVal;
    // console.log(document.getElementById(id2).value);
    const amount = newVal * id4;
    document.getElementById(id3).innerText = amount;
}
let subtotal = 0;
function calculateTotal() {
    const phoneTotal = parseFloat(document.getElementById('amount1').innerText);
    const caseTotal = parseFloat(document.getElementById('amount2').innerText);
    subtotal = phoneTotal + caseTotal;
    // console.log(subtotal);


    document.getElementById('subTotal').innerText = subtotal;
    const tax=document.getElementById('tax').innerText =  parseFloat((subtotal * 0.1).toFixed(1));
    const totalAmount = document.getElementById('total').innerText = subtotal + tax;
    return totalAmount;
}

function defaults()
{
    document.getElementById('amount1').innerText = 0;
    document.getElementById('amount2').innerText = 0;
    document.getElementById('subTotal').innerText = 0;
    document.getElementById('tax').innerText = 0;
    document.getElementById('total').innerText = 0;
    document.getElementById('input1').value = 0;
    document.getElementById('input2').value = 0;
}

document.getElementById('fa-plus-1').addEventListener('click', function () {

    updateAmount(true, 'fa-minus-1', 'input1', 'amount1', 118);
    calculateTotal();
});

document.getElementById('fa-minus-1').addEventListener('click', function () {


    updateAmount(false, 'fa-minus-1', 'input1', 'amount1', 118);
    calculateTotal();
});

document.getElementById('fa-plus-2').addEventListener('click', function () {
    updateAmount(true, 'fa-minus-2', 'input2', 'amount2', 59);
    calculateTotal();
});

document.getElementById('fa-minus-2').addEventListener('click', function () {
    updateAmount(false, 'fa-minus-2', 'input2', 'amount2', 59);
    calculateTotal();
});


document.getElementById('check-out').addEventListener('click', function () {
    const amount= calculateTotal();
    alert("Total Paid = "+ amount); 
    defaults();
});