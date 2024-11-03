// Write code code for given dictionary/objc which maps key/values,return the top 3 keys for the top 3 values.
// To acheive this we have to ietrates the array and compare the values first,if we got top three values,next task is to retraive that


function getTopThreeValues(dict) {
    // returns array of array
    const entries = Object.entries(dict)
    // sort array in dsc order for numerics
    entries.sort((a, b) => b[1] - a[1]);
    // after sorting, we want top 3 key value pairs. so we are using slice
    const newarr = entries.slice(0, 3);
    // returns only key
    const topKeys = newarr.map(([key]) => key);
    // rteurns pnly value
    const topValues = newarr.map(([key, value]) => value);
    console.log("Top three values==== ", topValues);
    return topKeys;
}

const myDict = { a: 10, b: 20, c: 10, d: 30, e: 20, f: 30 }
const topThereeKeys = getTopThreeValues(myDict);
console.log("topThereeKeys=== ", topThereeKeys)

// Op:
// Top three values==== 30,30,20
// topThereeKeys===  d,f,b