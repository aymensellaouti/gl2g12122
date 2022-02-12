// Get element to handle
const ol = document.querySelector('ol');

setInterval(
    () => {
        ol.classList.toggle('allumee');
    },
    1500
);
