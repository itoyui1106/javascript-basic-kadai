// btnというidを持つHTML要素を取得し、定数に代入する
const buttonBtn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
buttonBtn.addEventListener('click', () => {
    
    const h2Text = document.getElementById('text').textContent; 
    
    document.getElementById('text').textContent = 'ボタンをクリックしました';
});
