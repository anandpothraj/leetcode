var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    return Array.from(new Set([...set1].filter(x => set2.has(x))));
};

console.log(intersection([1,2,2,1], [2,2]));        // [2]
console.log(intersection([4,9,5], [9,4,9,8,4]));    // [9,4]