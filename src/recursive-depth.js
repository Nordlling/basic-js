module.exports = class DepthCalculator {
    constructor(count = 0) {
        this.count = count;
    }
    calculateDepth(arr) {
        var mass = []
        var s = 0
        this.count++
        for(var i=0;i<arr.length;i++){
            if (Array.isArray(arr[i])){
                for(var j=0;j<arr[i].length;j++){
                    mass.push(arr[i][j])
                }
            }
        }
        for(i=0;i<arr.length;i++){
            if (Array.isArray(arr[i])) s = 1
        }
        if (s==0){
        	var res = this.count;
        	this.count = 0
        	return res        	
        } else return this.calculateDepth(mass)	
    }
};