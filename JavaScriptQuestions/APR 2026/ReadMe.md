Here’s a **clean, interview-focused README (revision sheet)** you can use before interviews.
It includes **concept → mistakes → fix → code → memory tricks**.

---

# 📘 JS Interview Quick Revision Guide (Core Patterns)

---

# 🧠 1. String Reverse

## ✅ Best Approaches

```js
// Quick
str.split("").reverse().join("")

// Interview (two pointer)
function reverseString(str){
    let arr = str.split("");
    let l = 0, r = arr.length - 1;

    while(l < r){
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++; r--;
    }
    return arr.join("");
}
```

## ❌ Mistakes

* Modifying string directly ❌
* Using wrong variable

## 🧠 Trick

👉 **String → Array → Modify → Join**

---

# 🧠 2. Palindrome

```js
function isPalindrome(str){
    let l = 0, r = str.length - 1;

    while(l < r){
        if(str[l] !== str[r]) return false;
        l++; r--;
    }
    return true;
}
```

## ❌ Mistake

```js
str.indexOf(left) ❌
```

## 🧠 Trick

👉 Compare **characters, not indexOf**

---

# 🧠 3. Second Largest

```js
function secondLargest(nums){
    let max = -Infinity;
    let second = -Infinity;

    for(let n of nums){
        if(n > max){
            second = max;
            max = n;
        } else if(n > second && n !== max){
            second = n;
        }
    }
    return second;
}
```

## ❌ Mistakes

* Missing `else if`
* Losing old max

## 🧠 Trick

👉 **New max → push old max down**

---

# 🧠 4. Array Rotate

```js
function rotate(nums, k){
    let n = nums.length;
    k = k % n;
    let res = new Array(n);

    for(let i=0;i<n;i++){
        res[(i+k)%n] = nums[i];
    }
    return res;
}
```

## 🥇 Optimal (O(1) space)

```js
reverse(nums,0,n-1)
reverse(nums,0,k-1)
reverse(nums,k,n-1)
```

---

# 🧠 5. Debounce

```js
function debounce(fn, delay){
    let timer;

    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fn.apply(this,args);
        }, delay);
    }
}
```

## 🧠 Trick

👉 **Clear → Set → Call**

---

# 🧠 6. Throttle

```js
function throttle(fn, delay){
    let last = 0;

    return function(...args){
        let now = Date.now();
        if(now - last >= delay){
            last = now;
            fn.apply(this,args);
        }
    }
}
```

## 🧠 Trick

👉 **Run → Wait → Ignore**

---

# 🧠 7. Deep Clone

## ✅ Best (modern)

```js
structuredClone(obj)
```

---

## 🥇 Interview (manual)

```js
function deepClone(obj, map = new WeakMap()){
    if(obj === null || typeof obj !== "object") return obj;

    if(map.has(obj)) return map.get(obj);

    let res = Array.isArray(obj) ? [] : {};
    map.set(obj, res);

    for(let key in obj){
        res[key] = deepClone(obj[key], map);
    }

    return res;
}
```

---

## ❌ Mistakes

* `obj != 'object'` ❌
* `Array.map` ❌
* Missing `map.set` ❌

---

## 🧠 Trick

👉
**BASE → SEEN → CREATE → SET → RECURSE**

---

## ❓ Why WeakMap?

👉 Avoid memory leak + handle circular refs

---

# 🧠 8. Group By

```js
function groupBy(arr, key){
    return arr.reduce((acc, curr)=>{
        (acc[curr[key]] = acc[curr[key]] || []).push(curr);
        return acc;
    },{});
}
```

## 🧠 Trick

👉 **Find key → create bucket → push**

---

# 🧠 9. Flatten Array

```js
function flatten(arr){
    let res = [];

    for(let el of arr){
        if(Array.isArray(el)){
            res.push(...flatten(el));
        } else {
            res.push(el);
        }
    }
    return res;
}
```

---

# 🧠 10. Java vs JS Length

| Language | Array  | String   |
| -------- | ------ | -------- |
| JS       | length | length   |
| Java     | length | length() |

👉 Trick:
**Only Java String uses ()**

---

# 🔥 FINAL INTERVIEW STRATEGY

## If stuck:

Say:

👉
“I’ll solve this using recursion / two pointers / hashmap…”

Then build step-by-step.

---

# 🧠 GOLDEN RULES

* Don’t memorize code → remember pattern
* Speak logic while coding
* Handle edge cases

---

# ⚡ 1-MIN QUICK RECALL

```text
Reverse → two pointer
Palindrome → compare ends
Second largest → shift max
Rotate → (i+k)%n
Debounce → clear + set
Throttle → time check
Deep clone → recursion + WeakMap
GroupBy → reduce bucket
```

---