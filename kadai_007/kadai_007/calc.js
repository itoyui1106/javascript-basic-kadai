// 変数(num)に1以上の正の数を代入
let num = 5;

//変数(num)が3と5の倍数の場合： “3と5の倍数です”
if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と5の倍数です');
} 

//変数(num)が3の倍数の場合： “3の倍数です”
else if (num % 3 === 0) {
    console.log('3の倍数です');
}

//変数(num)が5の倍数の場合： “5の倍数です”
else if (num % 5 === 0) {
    console.log('5の倍数です');
}

else {
    console.log(num);
}