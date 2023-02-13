module.exports = function toReadable(number) {

    let num = number.toString();
    let result = '';

  if (num.length == 3){
    switch (num[0]) {
        case '1':
            result += 'one hundred';
            break;
        case '2':
            result += 'two hundred';
            break;
        case '3':
            result += 'three hundred';
            break;
        case '4':
            result += 'four hundred';
            break;
        case '5':
            result += 'five hundred';
            break;
        case '6':
            result += 'six hundred';
            break;
        case '7':
            result += 'seven hundred';
            break;
        case '8':
            result += 'eight hundred';
            break;
        case '9':
            result += 'nine hundred';
            break;
        
    }
  }
  if (num[(num.length - 2)] !== '0' && num.length == 3) {
    result += ' ';
  }
  if (num[(num.length - 2)] == '1') {
    switch (num[num.length - 1]) {
        case '0':
            result += 'ten';
            break;
        case '1':
            result += 'eleven';
            break;
        case '2':
            result += 'twelve';
            break;
        case '3':
            result += 'thirteen';
            break;
        case '4':
            result += 'fourteen';
            break;
        case '5':
            result += 'fifteen';
            break;
        case '6':
            result += 'sixteen';
            break;
        case '7':
            result += 'seventeen';
            break;
        case '8':
            result += 'eighteen';
            break;
        case '9':
            result += 'nineteen';
            break;
    }
} else {
    switch (num[(num.length - 2)]) {
        case '2':
            result += 'twenty';
            break;
        case '3':
            result += 'thirty';
            break;
        case '4':
            result += 'forty';
            break;
        case '5':
            result += 'fifty';
            break;
        case '6':
            result += 'sixty';
            break;
        case '7':
            result += 'seventy';
            break;
        case '8':
            result += 'eighty';
            break;
        case '9':
            result += 'ninety';
            break;

    }
    if (num[(num.length - 1)] !== '0' && num.length !== 1) {
        result += ' ';
      }
    switch (num[(num.length - 1)]) {
        case '1':
            result += 'one';
            break;
        case '2':
            result += 'two';
            break;
        case '3':
            result += 'three';
            break;
        case '4':
            result += 'four';
            break;
        case '5':
            result += 'five';
            break;
        case '6':
            result += 'six';
            break;
        case '7':
            result += 'seven';
            break;
        case '8':
            result += 'eight';
            break;
        case '9':
            result += 'nine';
            break;

    }
}
if (number == 0) {
    result = 'zero';
}
  
  return (result);
}
