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
// writes the review
function appendReview(name, rating, comment) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-3 mb-4';
    col.innerHTML = `
        <div class="card review-card h-100 rounded-3">
            <div class="card-body">
                <p class="review-stars">${'⭐'.repeat(rating)}</p>
                <p class="review-text">"${comment}"</p>
                <p class="review-author">— ${name}</p>
            </div>
        </div>
    `;
    document.getElementById('reviewsList').appendChild(col);
}

const reviewForm = document.getElementById('reviewForm');
if (reviewForm) {
    // load saved reviews on page load
    const saved = JSON.parse(localStorage.getItem('nummyReviews') || '[]');
    saved.forEach(function(r) {
        appendReview(r.name, r.rating, r.comment);
    });

    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('reviewerName').value.trim();
        const rating = document.getElementById('reviewerRating').value.trim();
        const comment = document.getElementById('reviewerComment').value.trim();

        const review = { name, rating, comment };

        //get existing reviews and current reviews
        const existing = JSON.parse(localStorage.getItem('nummyReviews') || '[]');
        existing.push(review);
        localStorage.setItem('nummyReviews', JSON.stringify(existing));

        appendReview(name, rating, comment);

        reviewForm.reset();
    });
}


// menu search
const menuSearch = document.getElementById('menuSearch');
if(menuSearch){//prevents error
    menuSearch.addEventListener('input', function(){
        const term = menuSearch.value.toLowerCase().trim();
        const rows = document.querySelectorAll('.menu-table tr');
        rows.forEach(function(row){
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(term) ? '' : 'none';//tenary func (shortened if func)
        });
    });
}