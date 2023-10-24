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
        Subject : "Message from " + email.value +" "+ "Name: " + fname.value + " " + "Message: " + number.value,
        Body : 'This is a message!'
    }).then(
      message => alert('The message was successfully submitted!')
    );
}