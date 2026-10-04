document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll("#star-rating .star");
    const ratingSelect = document.getElementById("review-rating");
    const reviewForm = document.getElementById("review-form");
    const reviewList = document.getElementById("review-list");

    // Star click event
    stars.forEach(star => {
        star.addEventListener("click", function () {
            const value = this.getAttribute("data-value");
            ratingSelect.value = value;

            // Remove previous selections
            stars.forEach(s => s.classList.remove("selected"));

            // Highlight stars up to the selected value
            for (let i = 0; i < value; i++) {
                stars[i].classList.add("selected");
            }
        });
    });

    // Dropdown change event
    ratingSelect.addEventListener("change", function () {
        const value = this.value;

        // Remove previous selections
        stars.forEach(s => s.classList.remove("selected"));

        // Highlight stars up to the selected value
        for (let i = 0; i < value; i++) {
            stars[i].classList.add("selected");
        }
    });

    // Form submission event
    reviewForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("reviewer-name").value;
        const reviewText = document.getElementById("review-text").value;
        const rating = ratingSelect.value;

        if (!name || !reviewText || !rating) {
            alert("Please fill out all fields and select a rating.");
            return;
        }

        // Create review element
        const reviewItem = document.createElement("div");
        reviewItem.classList.add("review");
        reviewItem.innerHTML = `
            <p class="name"><strong>${name}</strong></p>
            <p class="rating">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</p>
            <p>${reviewText}</p>
        `;

        // Append review to the list
        reviewList.prepend(reviewItem);

        // Reset form
        reviewForm.reset();
        stars.forEach(s => s.classList.remove("selected"));
    });
});
