function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

let fname = document.getElementById('name');
let email = document.getElementById('email');
let number = document.getElementById('phone');
let quantity = document.getElementById('productCode');
let address = document.getElementById('productName');





function sendEmail() {
    Email.send({
        SecureToken : "115fe041-6594-4860-8628-9540b5dd59ec",
        To : 'flavourfeast007@gmail.com',
        From : 'hardiksachan70@gmail.com',
        Subject : "Orders from " + email.value +" "+ "Name: " + fname.value + " " + "number: " + number.value + " " + "Quantity: " + quantity.value + " " + "Address: " + address.value,
        Body : 'Buknu'
    }).then(
      message => alert('The Order was completed!')
    );
}

function disp() {
    let button = document.getElementById('orderButton');
    let cont = document.getElementById('cont');
    let card = document.getElementById('card');
    card.style.display = 'none'
    cont.style.display = 'block'
}
