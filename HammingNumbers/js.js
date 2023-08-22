// function hamming(n) {
//   let possible = [1];
//   let i = 1;
//   // let max = 2 ** n * 3 ** n * 5 ** n;
//   let max = 5 ** n;

//   while (possible[possible.length - 1] < max) {
//     console.log('while: ', possible[possible.length - 1], 5 ** n);
//     possible.forEach((num) =>
//       !possible.includes(num * 2 ** i) ? possible.push(num * 2 ** i) : null
//     );
//     possible.forEach((num) =>
//       !possible.includes(num * 3 ** i) ? possible.push(num * 3 ** i) : null
//     );
//     possible.forEach((num) =>
//       !possible.includes(num * 5 ** i) ? possible.push(num * 5 ** i) : null
//     );
//     i += 1;
//   }

//   possible.sort((a, b) => a - b);
//   console.log('length: ', possible.length);
//   console.log(possible);
//   console.log('result: ', possible[n - 1]);
//   return possible[n - 1];
// }

function hamming(n) {}

hamming(6);
hamming(4);

let test =
  '1 2 3 4 5 6 8 9 10 12 15 16 18 20 24 25 27 30 32 36 40 45 48 50 54 60 64 72 75 80 81 90 96 100 108 120 125 128 135 144 150 160 162 180 192 200 216 225 240 243 250 256 270 288 300 320 324 360 375 384 400 405 432 450 480 486 500 512 540 576 600 625 640 648 675 720 729 750 768 800 810 864 900 960 972 1000 1024 1080 1125 1152 1200 1215 1250 1280 1296 1350 1440 1458 1500 1536 1600 1620 1728 1800 1875 1920 1944 2000 2025 2048 2160 2187 2250';

test = test.split(' ');
console.log(test[64]);
