// const chieuCao = parseInt(prompt("Nhap chieu cao (cm)"));
// const canNang = parseInt(prompt("Nhap can nang (kg)"));
// let BMI = canNang / (chieuCao/100)**2;
// switch (true) {
//   case BMI < 16: {
//     console.log(`${BMI} => Gay do III`);
//     break;
//   }
//   case BMI < 17: {
//     console.log(`${BMI} => Gay do II`);
//     break;
//   }
//   case BMI < 18.5: {
//     console.log(`${BMI} => Gay do I`);
//     break;
//   }
//   case BMI < 25: {
//     console.log(`${BMI} => Binh thuong`);
//     break;
//   }
//   case BMI < 30: {
//     console.log(`${BMI} => Thua can`);
//     break;
//   }
//   case BMI < 35: {
//     console.log(`${BMI} => Beo phi do I`);
//     break;
//   }
//   case BMI < 40: {
//     console.log(`${BMI} => Beo phi II`);
//     break;
//   }
//   case BMI > 40: {
//     console.log(`${BMI} => Beo phi do III`);
//     break;
//   }
//   default: {
//     console.log("Loi, hay nhap lai...");
//     break;
//   }
// }
let x = parseInt(prompt("Nhap mot so nguyen X"));
if (x < 2) {
  console.log("x khong phai la so nguyen to");
}
{
  for (let i = 0; i < x; i++) {
    if (x % i == 0) {
      console.log("x khong phai la so nguyen to");
    } else {
      console.log("x la so nguyen to");
    }
  }
}
{
  let giaiThua =1
  for (let i = 1; i <= x; i++) {
    giaiThua *=i;
  }
  console.log("Giai thua x =", giaiThua);
}
let y = parseInt(prompt("Nhap mot so nguyen Y"));
let N = 0;
for (let i = 1; i < y; i++) {
  if (i%2 == 0) {N++}}
console.log(`Y cos ${N} so le`)