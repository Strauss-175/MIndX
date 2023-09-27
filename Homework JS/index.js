// // const chieuCao = parseInt(prompt("Nhap chieu cao (cm)"));
// // const canNang = parseInt(prompt("Nhap can nang (kg)"));
// // let BMI = canNang / (chieuCao/100)**2;
// // switch (true) {
// //   case BMI < 16: {
// //     console.log(`${BMI} => Gay do III`);
// //     break;
// //   }
// //   case BMI < 17: {
// //     console.log(`${BMI} => Gay do II`);
// //     break;
// //   }
// //   case BMI < 18.5: {
// //     console.log(`${BMI} => Gay do I`);
// //     break;
// //   }
// //   case BMI < 25: {
// //     console.log(`${BMI} => Binh thuong`);
// //     break;
// //   }
// //   case BMI < 30: {
// //     console.log(`${BMI} => Thua can`);
// //     break;
// //   }
// //   case BMI < 35: {
// //     console.log(`${BMI} => Beo phi do I`);
// //     break;
// //   }
// //   case BMI < 40: {
// //     console.log(`${BMI} => Beo phi II`);
// //     break;
// //   }
// //   case BMI > 40: {
// //     console.log(`${BMI} => Beo phi do III`);
// //     break;
// //   }
// //   default: {
// //     console.log("Loi, hay nhap lai...");
// //     break;
// //   }
// // }
// let x = parseInt(prompt("Nhap mot so nguyen X"));
// if (x < 2) {
//   console.log("x khong phai la so nguyen to");
// }
// {
//   for (let i = 0; i < x-1; i++) {
//     if (x % i == 0) {
//       console.log("x khong phai la so nguyen to");
//     } else {
//       console.log("x la so nguyen to");
//     }
//   }
// }
// {
//   let giaiThua =1
//   for (let i = 1; i <= x; i++) {
//     giaiThua *=i;
//   }
//   console.log("Giai thua x =", giaiThua);
// }
// let y = parseInt(prompt("Nhap mot so nguyen Y"));
// let N = 0;
// for (let i = 1; i < y; i++) {
//   if (i%2 == 0) {N++}}
// console.log(`Y cos ${N} so le`)

// const a = parseInt(prompt("Nhap so thu nhat:"));
// const b = parseInt(prompt("Nhap so thu hai:"));
// const c = parseInt(prompt("Nhap so thu ba"));
// const d = parseInt(prompt("Nhap so thu tu:"));
// const e = parseInt(prompt("Nhap so thu nam:"));
// let X = [a, b, c, d, e];
// let soChan = [];
// let soLe = [];
// for (let i = 0; i < X.length; i++) {
//   if (X[i] % 2 == 0) {
//     soChan.push(X[i]);
//   } else {
//     soLe.push(X[i]);
//   }
// }
// console.log("So chan bao gom:", soChan);
// console.log("So le bao gom:", soLe);

const A = parseInt(prompt("Nhap so mot so chan"));
const B = parseInt(prompt("Nhap so mot so chan"));
const C = parseInt(prompt("Nhap so mot so chan"));
const D = parseInt(prompt("Nhap so mot so chan"));
const E = parseInt(prompt("Nhap so mot so LE"));
const array = [A, B, C, D, E];
let outLier = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 != 0) {
    outLier.push(array[i]);
  }
}
if (outLier.length >= 2) {
  console.log("Co nhieu hon 1 so le, hay nhap lai");
} else if (outLier.length == 0) {
  console.log("Khong co so le, hay nhap lai");
} else {
  console.log("So le la:", outLier);
}
