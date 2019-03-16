/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let y = 0;  
  for (let i = 0; i<preferences.length; i++) { 
      let k = preferences[i];
      let l = preferences[k-1];
      if (k == l) continue;
      let z = preferences[l-1];
      if (z == i+1) {
          y++;
      }
   }
   return y / 3;
}
