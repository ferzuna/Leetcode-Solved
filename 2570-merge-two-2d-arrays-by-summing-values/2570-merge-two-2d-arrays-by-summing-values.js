/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let i = 0,
        j = 0,
        m = nums1.length,
        n = nums2.length,
        result = [];
    while (i < m && j < n) { //Kondisi kalo 2 2 nya punya length yg sama
        let [id1, v1] = nums1[i];
        let [id2, v2] = nums2[j];
        
        if (id1 === id2) {
            result.push([id1, v1+v2])
            i++;
            j++;
        }
        else if (id1 < id2) {
            result.push([id1, v1]);
            i++;
        } else {
            result.push([id2,v2]);
            j++;
        }
    }
    for(0; i<m; i++) result.push(nums1[i]) //Sisa nums1
    for(0; j<n; j++) result.push(nums2[j]) //Sisa nums2
    return result
};