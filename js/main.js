// contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
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
// reviews storage
// menu search