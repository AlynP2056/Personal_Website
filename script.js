function expandSidebar(event) {
    event.preventDefault(); // stop page from navigating immediately

    const nav = document.querySelector("nav");
    nav.classList.add("expanded");

    setTimeout(() => {
        window.location.href = event.target.href;
    }, 600);
}

function closeSidebar(event) {
    event.preventDefault(); // stop page from navigating immediately

    const nav = document.querySelector("nav");
    nav.classList.remove("expanded");

    setTimeout(() => {
    window.location.href = event.target.href;
  }, 600);
}

function slideLeft(event) {
    event.preventDefault(); // stop page from navigating immediately

    const card = document.querySelector("card");
    card.classList.add("class_expanded");

    setTimeout(() => {
    window.location.href = event.target.href;
  }, 600);
}


document.addEventListener('DOMContentLoaded', function() {

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const msgInput = document.getElementById('msgInput'); 
    const sendButton = document.querySelector('.send');
 
    if (sendButton) {
        sendButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const msg = msgInput.value.trim();

        if (!name || !email || !msg) {
            alert("Please make sure to fill in all the forms!");
            return;
        }

        console.log('Form submitted:', { name, email, msg });

        alert("Thank you for sending me a message!");

        nameInput.value = '';  
        emailInput.value = '';
        msgInput.value = '';

        });
    }
    
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.grids').forEach(p => p.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(this.dataset.btn).classList.add('active');
        });
    });
});

