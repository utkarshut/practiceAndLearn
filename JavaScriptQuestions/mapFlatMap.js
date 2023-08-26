const a  = [1, 2, [3, [4, 5, 6], 7], 8]

console.log(a.flat());
console.log(a.flat(2));

const friends = [
    {name: 'Dave', kids: ['Max', 'Jack']},
    {name: 'Max', kids: ['Sam', 'Alex', 'Megan']},
    {name: 'Jordan', kids: ['Mason', 'Cameron', 'Kaylin']}
];
const mapFunction = p => p.kids;
const names = friends.map(mapFunction);

// FLAT MAP ==> FLATTEN the mapped output array
const kidNames = friends.flatMap(mapFunction);
console.log(names);
console.log(kidNames);

// friends.flatMap(function(currentValue, index, arr){
//     console.log(currentValue)
// },this)