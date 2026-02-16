document.addEventListener("DOMContentLoaded", () => {
    const link = document.getElementById("external-link");

    if (link) {
        link.addEventListener("click", function (event) {
            const confirmLeave = confirm("Are you sure you want to leave the Badminton CCA website?");
            if (!confirmLeave) {
                event.preventDefault(); // Stop navigation if user clicks Cancel
            }
        });
    }
});



