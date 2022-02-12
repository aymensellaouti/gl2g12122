const regions = ['Djerba', 'Tunis', 'Nabeul', 'Jendouba', 'Mednine', 'Sousse'];
const mesRegions = regions.join(' ');
const ol = document.querySelector('ol');

    ol.innerHTML = '';
    let i = 0;
    const index = setInterval(
        () => {
            if (i < regions.length) {
                let li = `<li>${regions[i++]}</li>`;
                ol.innerHTML += li;
            } else {
                i = 0;
                ol.innerHTML = '';
            }
        }, 1500
    )

