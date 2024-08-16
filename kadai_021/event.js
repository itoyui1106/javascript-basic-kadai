// btnというidを持つHTML要素を取得し、定数に代入する
const buttonBtn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
buttonBtn.addEventListener('click', () => {

    const h2Text = document.getElementById('text').textContent;

    // 2秒（2000ミリ秒）の待ち時間を設定し、処理を実行する
    setTimeout(() => {
        document.getElementById('text').textContent = 'ボタンをクリックしました';
    }, 2000);

});
