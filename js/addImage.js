
function createImage(
    src = '',
    alt = 'alternative',
    title = '',
) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.title = title;
    return img;
}

setTimeout(
    () => {
        const body = document.querySelector('body');
        body.insertBefore(
            createImage('images/techwall.png', 'techwall', 'techwall'),
            body.firstChild
        );
    }, 2000
);
