document.addEventListener("DOMContentLoaded", function () {
    const snowContainer = document.querySelector('.cssnow');
    const fragment = document.createDocumentFragment();

    // 创建并添加雪花元素
    for (let i = 0; i < 9; i++) {
        const snowflake = document.createElement('span');
        fragment.appendChild(snowflake);
    }

    snowContainer.appendChild(fragment);
    document.body.classList.add('blurred'); // 默认添加模糊效果
    // 按钮点击切换模糊效果
    const toggleBlurButton = document.getElementById('toggle-blur');
    toggleBlurButton.addEventListener('click', function () {
        document.body.classList.toggle('blurred');
    });
});
