const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity != "string") return false
  sampleActivity = sampleActivity.split("")
  for(i=0;i<sampleActivity.length;i++){
    if (sampleActivity[i]=="."){
      for (j=i+1;j<sampleActivity.length;j++){
        if (sampleActivity[j]=="."){
          sampleActivity.splice(j,1)
          break
        }
      }
    }
  }
  sampleActivity = sampleActivity.join("")
  var a = Number(sampleActivity);
  if(isNaN(a)) return false
  if(a>15 || a<1) return false
  return Math.ceil(Math.log(MODERN_ACTIVITY/a)/(0.693/HALF_LIFE_PERIOD))
};
