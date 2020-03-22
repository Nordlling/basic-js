 module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw 'Error';
    for(i=0;i<arr.length;i++){
    	if (arr[0] == "--discard-prev" || arr[0] == "--double-prev"){
            arr.splice(0,1) 
            i--
            continue;
        }
        if (arr[arr.length-1] == "--double-next" || arr[arr.length-1] == "--discard-next"){
             arr.splice(arr.length-1,1)
             i = i-2
             continue;
        }
        if (arr[i] == '--discard-next' && arr[i+2] == '--double-prev'){
        	arr.splice(i+2,1)
        	arr.splice(i,1)
        	continue
        }
        if(arr[i] == "--discard-prev"){
         arr.splice(i-1,2)
         i = i - 2
         continue;
        }
        if(arr[i] == "--discard-next"){
         arr.splice(i,2)
         i--
         continue;
        }
        if(arr[i] == "--double-prev"){
         arr[i] = arr[i-1]
         continue;
        }
        if(arr[i] == "--double-next"){
         arr[i] = arr[i+1]
         continue;
        }
    }
    return arr
};


// module.exports = function transform(arr) {
//     if (!Array.isArray(arr)) throw 'Error';
//     var newArr = []
//     for(i=0;i<arr.length;i++){
//         if (arr[0] == "--double-prev"){
//          arr.splice(0,1)
//         }
//         if (arr[arr.length-1] == "--double-next" || arr[arr.length-1] == "--discard-next"){
//          arr.splice(arr.length-1,1)
//         }
//         if(arr[i+1] == '--discard-prev'){
//          i++
//          continue;
//         }
//         if(arr[i] == '--discard-next'){
//          i++
//          continue;
//         }
//         if(arr[i] == '--double-prev'){
//          newArr.push(arr[i-1])
//          continue;
//         }
//         if(arr[i] == '--double-next'){
//          newArr.push(arr[i+1])
//          continue;
//         }
//         if(arr[i] == '--discard-prev'){
//          continue;
//         }
//         newArr.push(arr[i])
//     }

    
//     return newArr
// };
