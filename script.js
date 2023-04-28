function preNodePopup() {
    // 「Copy code」ボタンをクリックしたときに、preタグの中身をクリップボードにコピーする
    var preElements = document.querySelectorAll('pre.note');
    for (var i = 0; i < preElements.length; i++) {
        preElements[i].addEventListener('click', function (event) {
            var code = event.target.innerText;
            navigator.clipboard.writeText(code).then(function () {
                var popup = document.createElement('div');
                popup.innerHTML = 'コードがクリップボードにコピーされました';
                popup.classList.add('popup');
                popup.classList.add('visible');
                document.body.appendChild(popup);
                setTimeout(function () {
                    popup.classList.remove('visible');
                }, 1000);
            }, function () {
            });
        });
    }
}



// ロード時の処理
window.addEventListener('load', function() {
    preNodePopup();
});
