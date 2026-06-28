// contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) { //prevents errors
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const subject = document.getElementById('contactSubject').value.trim();
        const message = document.getElementById('contactMessage').value.trim();

        const toastEl = document.getElementById('contactToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show();

        contactForm.reset();
    });
}

// reservations storage
const reservationForm = document.getElementById('reservationForm');
if (reservationForm){ //prevents errors
    reservationForm.addEventListener('submit', function(e){
        e.preventDefault();
 
        const name = document.getElementById('reservationName').value.trim();
        const phone = document.getElementById('reservationPhone').value.trim();
        const branch = document.getElementById('reservationBranch').value.trim();
        const date = document.getElementById('reservationDate').value.trim();
        const time = document.getElementById('reservationTime').value.trim();
        const guests = document.getElementById('reservationGuests').value.trim();

        const toastEl = document.getElementById('reservationToast');
        const toast = new bootstrap.Toast(toastEl);
        toast.show();

        reservationForm.reset();
    });
}
// reviews storage
// menu search