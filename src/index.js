module.exports = function toReadable (number) {
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundred = 'hundred';

  function getWord(number) {
      if (number < 20) word.push(units[+number]);
      else {
          word.push(tens[+number[0]-2]);
          if (number[1] == 0) return word.join(' ');
          word.push(units[+number[1]]);
      }
  }

  const num = number.toString();
  let word = [];
  if (num.length == 3) {
      word.push(units[+num[0]]);
      word.push(hundred);
      let balance = num[1] + num[2];
      if (balance == '00') return word.join(' ');
      getWord(balance)
  } else {
    getWord(num);
    }
    return word.join(' ');
}
