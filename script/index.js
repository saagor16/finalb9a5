
let totalTaka = 0;
let count =0;
let seat = 40;
const allButton = document.getElementsByClassName('primary');

for (const btn of allButton) {
    // console.log(button);
    //btn -color
    btn.addEventListener('click', function(){
        btn.style.backgroundColor = '#1DD100';
        btn.style.color = 'white';

        //count
        count = count+1;
        document.getElementById('ticket-count').innerText = count;

        // seat left
        seat = seat-1;
        document.getElementById('total-seat').innerText = seat;

        if (count >= 4) {
            disableButtons();
            document.getElementById("apply-btn").removeAttribute('disabled' );
        }

        if(count===1){
            document.getElementById("final-btn").removeAttribute('disabled');
        }
        btn.disabled = true;


         // seat-class-price
        const text= btn.innerText;
        const container = document.getElementById('seat-class');
        const div = document.createElement('div');
        const p1 = document.createElement('p');
        p1.innerText = text;
        const p2 = document.createElement('p');
        p2.innerText = 'Economy';
        const p3 = document.createElement('p');
        p3.innerText = parseFloat(document.getElementById('price').innerText);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.classList.add("my-div")     
        container.appendChild(div);

        //totalPrice
        const ticketPrice =parseFloat(document.getElementById('price').innerText);
        totalTaka += ticketPrice;
        document.getElementById('totalTaka').innerText = totalTaka ;
        document.getElementById("grand-total").innerText = totalTaka;
        
    })    
}
const apply = document.getElementById('apply-btn');
apply.addEventListener('click',function(){
    // console.log('my name');
    const couponText = document.getElementById('input-field').value;

    //input
    if(couponText === "NEW15"){
        const discountAmount = totalTaka * 0.15;
        const afterDiscount = totalTaka - discountAmount;
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = afterDiscount;
        document.getElementById("input-field").value = "";


      }
      else if(couponText === "Couple 20"){
        const discountAmount = totalTaka * 0.2;
        const afterDiscount = totalTaka - discountAmount;
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = afterDiscount;
        document.getElementById("input-field").value = "";
      }

      else{
        alert('invalid coupon')
        document.getElementById("input-field").value = "";
    }
    document.getElementById('label-input').style.display = 'none';
    
});

const next = document.getElementById('final-btn');
  
    next.addEventListener('click', function(){

      document.getElementById('totalTaka').innerText = 0;
      document.getElementById('grand-total').innerText = 0;
      document.getElementById('seat-class').innerText = "";
      document.getElementById("input-field").value = "";
      document.getElementById('total-seat').innerText = 40;
      document.getElementById('ticket-count').innerText = 0;
      
});



