// bai 1
console.log("bai 1");
let a = (x) => {
  return Math.pow(x, 2);
};
console.log(a(4));

// bai 2
console.log("bai 2");
let b = (word1, word2, word3) => {
  if (word1.includes("world") == true) {
    console.log(word1);
  }
  if (word2.includes("world") == true) {
    console.log(word2);
  }
  if (word3.includes("world") == true) {
    console.log(word3);
  } else return "";
};
console.log(b("Hello world!", "world", "nothing"));

// bai 3
console.log("bai 3");
let c = ["one", "two", "three"];
let d = c.map((item) => {
  return "number: " + item;
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
let totalWorkingDays = () => {
  let sum = 0;
  for (let i = 0; i < employees1.length; i++) {
    sum += employees1[i].workingDays;
  }
  return sum;
};
console.log(totalWorkingDays());

// bai 7
console.log("bai 7");
const employees2 = [
  { id: 1, name: "John", salary: 2000 },
  { id: 2, name: "Jane", salary: 2500 },
  { id: 3, name: "Mark", salary: 3000 },
];
let h = [];
for (let i = 0; i < employees2.length; i++) {
  h.push(employees2[i].salary);
}
console.log(Math.max(...h));

// bai 8
console.log("bai 8");
const employees3 = [
  { id: 1, name: "John", workingDays: 22, lateDays: 2 },
  { id: 2, name: "Jane", workingDays: 20, lateDays: 0 },
  { id: 3, name: "Mark", workingDays: 25, lateDays: 1 },
];
let Cong = [];
for (let i = 0; i < employees3.length; i++) {
  Cong.push(employees3[i].workingDays - employees3[i].lateDays);
}
console.log(employees3[Cong.indexOf(Math.max(...Cong))]);

// bai 9
console.log("bai 9");
const employees4 = [
  { id: 1, name: "John", salary: 2000 },
  { id: 2, name: "Jane", salary: 2500 },
  { id: 3, name: "Mark", salary: 3000 },
  { id: 4, name: "John", salary: 2200 },
];
let j = [];
let k = [];
let l = [];
for (let i = 0; i < employees4.length; i++) {
  let Ten = employees4[i].name;
  if (Ten === "John") {
    j.push(employees4[i]);
  } else if (Ten === "Jane") {
    k.push(employees4[i]);
  } else if (Ten === "Mark") {
    l.push(employees4[i]);
  }
}
let m = { John: j, Jane: k, Mark: l };
console.log(m);

// bai 10
console.log("bai 10");
const employees5 = [
  { id: 1, name: "John", workingDays: 22, lateDays: 2, salary: 2000 },
  { id: 2, name: "Jane", workingDays: 25, lateDays: 0, salary: 2500 },
  { id: 3, name: "Mark", workingDays: 20, lateDays: 1, salary: 3000 },
];
let hieuSuat = [];
for (let i = 0; i < employees5.length; i++) {
  hieuSuat.push(employees5[i].workingDays / employees5[i].salary);
}
console.log(hieuSuat);
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
let n = 0
let o = 0
let p = 0
for (let i = 0; i < employees6.length; i++) {
    if (employees6[i].workingDays === 20) {
        n++
    }
    else if (employees6[i].workingDays === 22) {
        o++
    }
    else if (employees6[i].workingDays === 24) {
        p++
    }
}
let histogram = {20: n, 22: o, 24: p}
console.log(histogram)

// bai 12
console.log("bai 12")
const employees7 = [
    { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
    { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
    { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
];
let contact = []
let workInfo = {}
for (let i = 0; i < employees7.length; i++) {
    workInfo = 
}
console.log(workInfo)