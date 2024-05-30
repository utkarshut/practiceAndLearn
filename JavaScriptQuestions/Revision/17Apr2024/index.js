function recursiveInsertionSort(nums, low, high) {
    if (low >= high) return; // base case
    let j = low;
    while (j >= 0 && nums[j - 1] >= nums[j]) {
      [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
      j--;
    }
    recursiveInsertionSort(nums, low + 1, high);
  }
  let num3 = [7, 5, 3, 43, 24, 76, 3, 33, 0];
  
  recursiveInsertionSort(num3, 0, 9);
  console.log(num3);
  
  function qs(nums, low, high) {
    if (low < high) {
      let pIndex = pivot(nums, low, high);
      qs(nums, low, pIndex - 1);
      qs(nums, pIndex + 1, high);
    }
  }
  
  function pivot(nums, low, high) {
    let pItem = nums[low];
    let i = low + 1;
    let j = high;
    while (i < j) {
      while (nums[i] <= pItem && i <= j) {
        i++
      }
      while (nums[j] >= pItem && i <= j) {
        j--
      }
      if (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
    let temp = nums[low];
    nums[low] = nums[j];
    nums[j] = temp;
    return j;
  }
  let nums2 = [4, 6, 2, 5, 7, 9, 1, 3];
  qs(nums2, 0, 7)
  //console.log(nums2);
  
  
  function lodashGroupBy(nums, key) {
    return nums.reduce((acc, curr) => {
      const keyValue = typeof key === 'function' ? key(curr) : curr[key];
      acc[keyValue] = [...(acc[keyValue] || []), curr];
      return acc;
    }, {});
  }
  //console.log(lodashGroupBy([1.2,3.3,1.5,2.5,3.4],Math.floor));
  //console.log(lodashGroupBy(["one","two","three"],"length"));
  
  
  function mergeSort(nums, low, high) {
    if (low === high) return;
    let mid = Math.floor((low + high) / 2);
    mergeSort(nums, low, mid);
    mergeSort(nums, mid + 1, high);
    merge(nums, low, mid, high);
  }
  
  function merge(nums, low, mid, high) {
    let temp = [];
    let left = low;
    let right = mid + 1;
    while (left <= mid && right <= high) {
      if (nums[left] < nums[right]) {
        temp.push(nums[left]);
        left++
      } else {
        temp.push(nums[right]);
        right++
      }
    }
    while (left <= mid) {
      temp.push(nums[left]);
      left++
  
    }
    while (right <= high) {
      temp.push(nums[right]);
      right++
  
    }
    for (let i = 0; i < temp.length; i++) {
      nums[low + i] = temp[i];
    }
  }
  const nums1 = [2, 30, 4, 1, 9, 6, 12, 33];
  mergeSort(nums1, 0, nums1.length - 1);
  //console.log(nums1); // [1, 2, 4, 6, 9, 12, 30, 33]
  
  
  
  
  
  
  
  class MethodChaining {
    constructor() {
      this.val = 0;
    }
    sum(...args) {
      this.val = args.reduce((acc, curr) => (acc += curr), 0);
      return this
    }
    add(val) {
      this.val += val;
      return this;
    }
  }
  const chain = new MethodChaining();
  //console.log(chain.sum(1,2,3).add(5));
  
  
  
  
  
  const createDummyTable = () => {
    const userList = Array.from({
      length: 100
    }, (_, index) => ({
      id: index + 1,
      user: `User_${index+1}`,
      email: `User_${index+1}@gmail.com`
    }));
    console.log(userList);
    const tableBody = document.getElementById('table-body');
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < userList.length; i++) {
      const user = userList[i];
      const elm = document.createElement('tr');
      elm.innerHTML = `<td>${user.id}</td><td>${user.user}</td><td>${user.email}</td>`;
      fragment.appendChild(elm);
  
    }
    tableBody.appendChild(fragment);
  }
  //createDummyTable();
  
  
  
  
  const buttonClick = () => {
    console.log("buttonClick");
  }
  // to avoid multiple time click 
  
  const throttleFunction = (fns, delay, ...args) => {
    let isRunning = false;
    let context = fns;
    let timer;
    return function() {
      if (!isRunning) {
        isRunning = true;
        timer = setTimeout(() => {
          context.apply(this, args);
          isRunning = false;
          clearTimeout(timer);
        }, delay)
      }
    }
  }
  const betterButtonClick = throttleFunction(buttonClick, 1000);
  
  const search = (text) => {
    console.log(text);
  }
  const debounceFunction = function(fns, delay, ...args) {
    let timer;
    let context = fns;
    return function(...param) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log(args, param)
        context.apply(this, [...param, ...args])
      }, delay)
    }
  }
  const betterFunction = debounceFunction(search, 1000);
  
  
  
  function getLongestSubarray(a, k) {
    let n = a.length; // size of the array
  
    let preSumMap = new Map();
    let sum = 0;
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
      // calculate the prefix sum till index i
      sum += a[i];
  
      // if the sum = k, update the maxLen
      if (sum === k) {
        maxLen = Math.max(maxLen, i + 1);
      }
  
      // calculate the sum of remaining part i.e. x - k
      let rem = sum - k;
  
      // calculate the length and update maxLen
      if (preSumMap.has(rem)) {
        let len = i - preSumMap.get(rem);
        maxLen = Math.max(maxLen, len);
      }
  
      // update the map checking the conditions
      if (!preSumMap.has(sum)) {
        preSumMap.set(sum, i);
      }
    }
  
    return maxLen;
  }
  //console.log(getLongestSubarray([1, 2, 3, 1, 1, 1, 1], 3))
  // two Pointer Technique
  const getSubArrayWithSumK = function(nums, k) {
    let currentSum = 0;
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
      currentSum += nums[i];
      while (currentSum > k) {
        currentSum -= nums[left];
        left++;
      }
      if (currentSum === k) {
        console.log(nums.slice(left, i + 1))
      }
    }
  
  }
  
  //getSubArrayWithSumK([1,2,3,1,1,1,1],3)
  
  
  const obj = {
    name: "utkarsh",
    age: 30,
    address: ["bettiah", 845438],
    phone: {
      mobile: 9513341599
    }
  }
  
  //console.log(JSON.stringify(obj))
  
  JSON.myStringify = function(obj) {
    let res = '{ ';
    for (let [key, value] of Object.entries(obj)) {
      if (typeof value === 'string') {
        res += `"${key}" : "${value}",`
      }
      if (typeof value === 'number') {
        res += `"${key}" : ${value},`
      }
      if (Array.isArray(value)) {
        let str = `[`
        for (let item of value) {
          str += `"${item}",`;
        }
        str = str.slice(0, str.length - 1);
        str += `]`;
        res += `"${key}" : ${str},`;
      }
      if (typeof value === 'object' && !Array.isArray(value)) {
        res += `"${key}" : ${JSON.myStringify(value)},`
      }
    }
    res = res.substring(0, res.length - 1)
    res += ' }';
    return res;
  }
  //console.log(JSON.myStringify(obj))
  
  
  String.prototype.countVowels = function() {
    let str = this.split('');
    let count = 0;
    for (let item of str) {
      if (["A", "I", "O", "E", "U"].includes(item.toUpperCase())) {
        count++;
      }
    }
    return count;
  }
  //console.log("DdDSaDieS".countVowels());
  
  
  
  
  
  function printInterval() {
    for (var i = 1; i <= 10; i++) {
      (function(i) {
        setTimeout(() => {
          var newNode = document.createElement("div");
          newNode.textContent = i;
          document.getElementById("context").appendChild(newNode);
        }, i * 1000);
      })(i)
    }
  }
  
  //printInterval();
  
  // call apply bind
  this.username = "as";
  
  function printName(age) {
    console.log(this.username, age);
  }
  
  Function.prototype.myApply = function(context, args) {
    let key = new Date();
    context[key] = this;
    return context[key](...args)
    //return this.call(context,...args);
  }
  //printName.myApply(this, [10]);
  Function.prototype.mycall = function(context, ...args) {
    return this.apply(context, args);
  }
  //printName.mycall(this,10)
  Function.prototype.mybind = function(...args) {
    let param = args.slice(1);
    return function() {
      this.apply(args[0], [...param]);
    }
  }
  
  
  const p = printName.mybind(this, 10);
  //p();
  
  
  
  let arr1 = [1, 21, 42, 5];
  let arr2 = [2, 45, 6, 56, 7, 8, 9, 10];
  
  function unionSorted(arr1, arr2) {
    const freq = new Map();
    const union = []
    for (let num of arr1) {
      freq.set(num, (freq.get(num) || 0) + 1);
    }
    for (let num of arr2) {
      freq.set(num, (freq.get(num) || 0) + 1);
    }
    console.log(freq)
    for (let [num, count] of freq) {
      for (let i = 0; i < count; i++) {
        union.push(num);
      }
    }
    return union.sort((a, b) => a - b);
  }
  //console.log(unionSorted(arr1,arr2));
  
  
  
  
  const nums = [0, 1, 0, 3, 12];
  
  function moveZeros(arr) {
    let count = 0;
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[j] = arr[i];
        j++;
      } else {
        count++
      }
    }
    for (let i = arr.length - count; i < arr.length; i++) {
      arr[i] = 0;
    }
    console.log(arr, count)
  }
  //moveZeros(nums)
  
  
  const sortedArray = [1, 2, 2, 3, 3, 3, 4, 4];
  
  function removeDuplicateInPlace(arr) {
    let j = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[j] !== arr[i]) {
        j++;
        arr[j] = arr[i];
      }
    }
    arr.length = j + 1;
    console.log(arr);
  }
  //removeDuplicateInPlace(sortedArray)
  function removeDuplicated(arr) {
    const set = new Set(arr);
    console.log(Array.from(set))
  }
  // take O(n) time and O(n) space
  //removeDuplicated(sortedArray)
  
  
  
  
  const pipe = (...functions) => (value) => {
    return functions.reduce((acc, fn) => {
      return fn(acc)
    }, value);
  };
  
  const multiply3 = (a) => a * 3;
  const add1 = (a) => a + 1;
  
  const data = pipe(add1, multiply3);
  //console.log(data(1));
  
  const nestedObject = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3
      }
    },
    f: [4, 5, 6]
  };
  
  function flatternObject(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      return (typeof value === 'object' && value !== null && !Array.isArray(value)) ? {
        ...acc,
        ...flatternObject(value)
      } : {
        ...acc,
        [key]: value
      }
    }, {})
  }
  //console.log(flatternObject(nestedObject))
  
  const nestedArray = [1, 2, [3, 4, [5, 6]]];
  
  function iterativeFlatten(arr) {
    const stack = [...arr];
    const result = [];
    while (stack.length) {
      const current = stack.pop();
      if (Array.isArray(current)) {
        stack.push(...current)
      } else {
        result.push(current)
      }
    }
    return result.reverse();
  }
  //console.log(iterativeFlatten(nestedArray))
  function recursiveFlatten(arr) {
    return arr.reduce((accu, val) => {
      return Array.isArray(val) ? accu.concat(recursiveFlatten(val)) : accu.concat(val)
    }, [])
  }
  //console.log(recursiveFlatten(nestedArray))
  
  
  //console.log(nestedArray.flat(2))
  
  
  let arr = [3, 90, 12, 35, 6, 1];
  const n = arr.length;
  
  function selectionSort(arr) {
    for (let i = 0; i <= n - 2; i++) {
      let min = i;
      for (let j = i + 1; j <= n - 1; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    console.log(arr)
  }
  //selectionSort(arr);
  arr = [3, 90, 12, 35, 6, 1];
  
  function bubbleSort(arr) {
    for (let i = 0; i <= n - 1; i++) {
      for (let j = 0; j <= n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    console.log(arr)
  }
  //bubbleSort(arr);
  arr = [3, 90, 12, 35, 6, 1];
  
  function insertionSort(arr) {
    for (let i = 1; i <= n - 1; i++) {
      let current = arr[i];
      let j = i - 1;
      // Move elements of arr[0..i-1] that are greater than current
      // to one position ahead of their current position
      while (j >= 0 && arr[j] > current) {
        // if current greater than current then 
        // shift item in sorted list to get postion 
        // where current can be place
        arr[j + 1] = arr[j];
        j--;
      }
      // j+1 as we do j-- to get exact postion
      arr[j + 1] = current;
    }
    console.log(arr);
  }
  //insertionSort(arr);
  //console.log(add(2, 3));
  
  function add(a, b) {
    console.log(a, b)
    return a + b;
  }
  