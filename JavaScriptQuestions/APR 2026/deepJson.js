const obj = {
  name: "Utkarsh",
  age: 28,
  skills: ["JS", "Angular"],
  address: { city: "Bangalore", pin: 560001 }
}
const deepClone = obj => JSON.parse(JSON.stringify(obj));
// ⚠️ Limitation
// ❌ Loses functions
// ❌ undefined removed
// ❌ Date becomes string
// ❌ Map/Set lost

// SOLUTION Modern Way
const clone = structuredClone(obj);

console.log(clone);

// We use WeakMap instead of Map to avoid memory leaks, as WeakMap allows garbage collection of unused object keys.
// 👉 WeakMap:

// Not iterable
// Only supports .get(), .set(), .has()

// 👉 That’s enough for deep clone ✔
function copyDeepJson(obj,map=new WeakMap()){
    if(obj == null || obj != 'object') return obj;
    // 🔥 circular reference handling
    if (map.has(obj)) return map.get(obj);
    let res = Array.isArray(obj) ? [] : {};
    map.set(obj,res);
    for(key in obj){
        res[key] = copyDeepJson(obj[key],map);
    }
    return res;
}

const customClone = copyDeepJson(obj);

console.log(customClone);