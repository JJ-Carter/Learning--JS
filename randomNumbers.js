var html = '';
var numbers;
var urNum = 69;

function randomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

function number () {
  var nums = '(';
  nums += randomNumber(urNum) + ', ';
  nums += randomNumber(urNum) + ', ';
  nums += randomNumber(urNum) + ', ';
  nums += randomNumber(urNum) + ', ';
  nums += randomNumber(urNum) + ')';
  return nums;
}

function print(message) {
  document.write(message);
}

for (var i=0; i<8; i+=1) {
  var numbers = number();
  html += 'Your numbers are ' + numbers + '<br/>';
}

print(html);
