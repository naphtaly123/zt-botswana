const futureDate = new Date(2025, 2, 23, 0, 0, 0); // setting the future date to May 21, 2024 at 00:00:00 Mid Night
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const now = new Date().getTime();
    const distance = futureTime - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements with id's
    document.getElementById("dayTen").innerHTML = Math.floor(days / 10);
    document.getElementById("dayUnit").innerHTML = days % 10;
    document.getElementById("hourTen").innerHTML = Math.floor(hours / 10);
    document.getElementById("hourUnit").innerHTML = hours % 10;
    document.getElementById("minuteTen").innerHTML = Math.floor(minutes / 10);
    document.getElementById("minuteUnit").innerHTML = minutes % 10;
    document.getElementById("secondTen").innerHTML = Math.floor(seconds / 10);
    document.getElementById("secondUnit").innerHTML = seconds % 10;

    // If the countdown is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}

// Update the countdown every 1 second
const x = setInterval(getRemainingTime, 1000);

// Responsive navigation functionality
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active');
});
