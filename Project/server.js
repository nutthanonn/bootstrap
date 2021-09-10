a = [1, 3, 44, 5];
a.map((e, index) => {
  let a = index % 2 ? "even" : "odd";
  console.log(a, e);
});
