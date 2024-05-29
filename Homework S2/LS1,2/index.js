// bai 1
console.log("bai 1");
let a = (x) => {
  return Math.pow(x, 2);
};
console.log(a(4));

// bai 2
console.log("bai 2");
let b = ["Hello world!", "world", "nothing"];
let b1 = b.map((x) => {
  if (x.includes("world")) return true;
  else return false;
});
console.log(b1);

// bai 3
console.log("bai 3");
let c = ["one", "two", "three"];
let c1 = "number: ";
let d = c.map((item) => {
  return c1 + item;
  // item.unshift("number: ")
});
console.log(d);

// bai 4
console.log("bai 4");
let e = [1, 2, 3, 4, 5, 6];
let f = e.map((item) => {
  return item * 2;
});
console.log(f);

// bai 5
console.log("bai 5");
let g = e.filter((item) => {
  return item % 2 !== 0;
});
console.log(g);

// bai 6
console.log("bai 6");
const employees1 = [
  { id: 1, name: "John", workingDays: 22 },
  { id: 2, name: "Jane", workingDays: 20 },
  { id: 3, name: "Mark", workingDays: 25 },
];
// let totalWorkingDays = () => {
let sum = 0;
//   for (let i = 0; i < employees1.length; i++) {
//     sum += employees1[i].workingDays;
//   }
//   return sum;
// };

// let totalWorkingDays = employees1.map((item) => {
//   return (sum += item.workingDays);
// });
// console.log(totalWorkingDays.slice(-1));
let workingDays = employees1.map((item) => item.workingDays);
let totalWorkingDays = workingDays.reduce(
  (sum, workingDays) => sum + workingDays
);
console.log(totalWorkingDays);
// bai 7
console.log("bai 7");
const employees2 = [
  { id: 1, name: "John", salary: 2000 },
  { id: 2, name: "Jane", salary: 2500 },
  { id: 3, name: "Mark", salary: 3000 },
];
let h = employees2.map((item) => {
  return item.salary;
});
// for (let i = 0; i < employees2.length; i++) {
//   h.push(employees2[i].salary);
// }
console.log(Math.max(...h));

// bai 8
console.log("bai 8");
const employees3 = [
  { id: 1, name: "John", workingDays: 22, lateDays: 2 },
  { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
  { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
];
// let Cong = [];
// for (let i = 0; i < employees3.length; i++) {
//   Cong.push(employees3[i].workingDays - employees3[i].lateDays);
// }
let Cong = employees3.map((item) => {
  return item.workingDays - item.lateDays;
});
console.log(employees3[Cong.indexOf(Math.max(...Cong))]);

// bai 9
console.log("bai 9");
const employees4 = [
  { id: 1, name: "John", salary: 2000 },
  { id: 2, name: "Jane", salary: 2500 },
  { id: 3, name: "Mark", salary: 3000 },
  { id: 4, name: "John", salary: 2200 },
];
// let j = [];
// let k = [];
// let l = [];
// for (let i = 0; i < employees4.length; i++) {
//   let Ten = employees4[i].name;
//   if (Ten === "John") {
//     j.push(employees4[i]);
//   } else if (Ten === "Jane") {
//     k.push(employees4[i]);
//   } else if (Ten === "Mark") {
//     l.push(employees4[i]);
//   }
// }          MORE EFFICIENT
let j = employees4.filter((item) => {
  if (item.name === "John") return item;
});
let k = employees4.filter((item) => {
  if (item.name === "Jane") return item;
});
let l = employees4.filter((item) => {
  if (item.name === "Mark") return item;
});
let m = { John: j, Jane: k, Mark: l };
console.log(m);

// bai 10
console.log("bai 10");
const employees5 = [
  { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
  { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
  { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
];
// let hieuSuat = [];
// for (let i = 0; i < employees5.length; i++) {
//   hieuSuat.push(employees5[i].workingDays / employees5[i].salary);
// }
// console.log(hieuSuat);
let hieuSuat = employees5.map((item) => item.workingDays / item.salary);
console.log(employees5[hieuSuat.indexOf(Math.max(...hieuSuat))]);

// bai 11
console.log("bai 11");
const employees6 = [
  { id: 1, name: "John", workingDays: 20 },
  { id: 2, name: "Jane", workingDays: 22 },
  { id: 3, name: "Mark", workingDays: 20 },
  { id: 4, name: "Sam", workingDays: 24 },
  { id: 5, name: "Lucy", workingDays: 22 },
];
// let n = 0;
// let o = 0;
// let p = 0;
// for (let i = 0; i < employees6.length; i++) {
//   if (employees6[i].workingDays === 20) {
//     n++;
//   } else if (employees6[i].workingDays === 22) {
//     o++;
//   } else if (employees6[i].workingDays === 24) {
//     p++;
//   }
// }        MORE EFFICIENT

// let n = employees6.map((item) => {
//   let x = 0;
//   if (item.workingDays === 20) {
//     x++;
//     return x;
//   }
// });
// let o = employees6.map((item) => {
//   let x = 0;
//   if (item.workingDays === 22) {
//     x++;
//     return x;
//   }
// });
// let p = employees6.map((item) => {
//   let x = 0;
//   if (item.workingDays === 24) {
//     x++;
//     return x;
//   }
// });      NOT EFFICIENT

let X = 0;
let n = employees6.filter((item) => {
  if (item.workingDays === 20) return item;
});
let o = employees6.filter((item) => {
  if (item.workingDays === 22) return item;
});
let p = employees6.filter((item) => {
  if (item.workingDays === 24) return item;
});
let histogram = { "20: ": n.length, "22: ": o.length, "24: ": p.length };
console.log(histogram);
// bai 12
console.log("bai 12");
const employees7 = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    workingDays: 22,
    lateDays: 2,
    salary: 2000,
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
    workingDays: 20,
    lateDays: 0,
    salary: 2500,
  },
  {
    id: 3,
    name: "Mark",
    email: "mark@example.com",
    workingDays: 25,
    lateDays: 1,
    salary: 3000,
  },
];
let q = () => {
  
}
console.log(employees7[0]);
console.log(q);

// bai 13
console.log("bai 13")
let tasks = [ 
  { name: "Hoàn thành bài tập JavaScript", description: "Làm xong bài tập về Array và Object", completed: false },
  { name: "Đọc sách", description: "Đọc xong chương 3", completed: true },
  { name: "Đi mua hàng", description: "Mua thêm thức ăn cho tuần", completed: false }
];
