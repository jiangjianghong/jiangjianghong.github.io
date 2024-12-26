document.addEventListener("DOMContentLoaded", function () {
    const snowContainer = document.querySelector('.cssnow');
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 9; i++) {
        const snowflake = document.createElement('span');
        fragment.appendChild(snowflake);
    }

    snowContainer.appendChild(fragment);
});
document.addEventListener("DOMContentLoaded", function () {
    const snowContainer = document.querySelector('.cssnow');
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 9; i++) {
        const snowflake = document.createElement('span');
        fragment.appendChild(snowflake);
    }

    snowContainer.appendChild(fragment);

    const toggleBlurButton = document.getElementById('toggle-blur');
    toggleBlurButton.addEventListener('click', function () {
        document.body.classList.toggle('blurred');
    });
});