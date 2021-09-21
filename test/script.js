//Regular Expression
let re = new RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const email = [
  "nutthanon.tho@gmail.com",
  "JavaScript@mail",
  "Python@com",
  "ReactJS@gmail.hello",
];

email.forEach((e) => {
  return console.log(re.test(e));
});

// console.log(re.test("nutthanon.tho@gmail.com"));
