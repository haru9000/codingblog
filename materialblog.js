import preNote from 'https://haru9000.github.io/codingblog/src/preNote/preNote.js';

// preNoteインスタンスを作成して、preNodePopup()メソッドを呼び出す
const preNoteInstance = new preNote();
preNoteInstance.preNodePopup();
console.log('1');
// ロード時の処理
window.addEventListener('load', function() {
    preNoteInstance.preNodePopup();
    console.log('2');
});
