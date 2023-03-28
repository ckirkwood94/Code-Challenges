function solution(input, markers) {
  let newArray = [];
  let result = '';

  newArray = input.split('\n');
  newArray = newArray.map((str) => {
    let temp = '';
    for (let marker of markers) {
      if (str.includes(marker)) {
        temp = str.split(marker)[0];
        break;
      } else {
        temp = str;
      }
    }
    return temp;
  });

  newArray = newArray.map((str) => str.trim());
  result += newArray[0];
  for (i = 1, j = newArray.length; i < j; i++) {
    console.log(newArray[i]);
    result += `\n${newArray[i]}`;
  }
  return result;
}

solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']);
