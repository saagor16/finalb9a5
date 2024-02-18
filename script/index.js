// scrolling
document.getElementById('first-btn').addEventListener('click', function() {
    document.getElementById('main-section').scrollIntoView({ behavior: 'smooth' });
});
let totalTaka = 0;
const allButton = document.getElementsByClassName('primary');

for (const btn of allButton) {
    // console.log(button);
    //btn -color
    btn.addEventListener('click', function(){
        btn.style.backgroundColor = '#1DD100';
        btn.style.color = 'white';
        // seat-class-price
        const seatClass = document.getElementById('seat-class');
        const title = btn.innerText;
        const p = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        p.innerText = title;
        p2.innerText ='Economy'
        p3.innerText = parseFloat(document.getElementById('price').innerText);
        seatClass.appendChild(p);
        seatClass.appendChild(p2);
        seatClass.appendChild(p3);


        //totalPrice
        const ticketPrice =parseFloat(document.getElementById('price').innerText);
        totalTaka += ticketPrice;
        document.getElementById('totalTaka').innerText = totalTaka ;
    })

  
}
const apply = document.getElementById('apply-btn');
apply.addEventListener('click',function(){
    // console.log('my name');

    //input
    const inputTeg = document.getElementById('input').value;
    // console.log(inputTeg.value)

})