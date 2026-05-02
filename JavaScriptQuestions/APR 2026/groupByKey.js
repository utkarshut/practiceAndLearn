const users = [
  { name: "A", city: "Bangalore" },
  { name: "B", city: "Delhi" },
  { name: "C", city: "Bangalore" },
];

function groupBy(arr, key) {
  return arr.reduce((acc, curr) => {
    const groupKey = curr[key];

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    acc[groupKey].push(curr);
    return acc;
  }, {});
}

console.log(groupBy(users, "city"));
