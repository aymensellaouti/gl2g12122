function compareInteger(a,b) {
    return a-b;
}
console.log(
    [1,11,3,21,2,31,4].sort(compareInteger)
);
console.log([1,11,3,21,2,31,4].reduce(
    (accumalateur, actual) => accumalateur+= actual
));
