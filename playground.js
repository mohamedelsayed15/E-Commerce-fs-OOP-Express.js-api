score = [[10,6,9,1],[4,8,3,15],[7,5,11,2]], k = 2

// var sortTheStudents = function (score, k) {//bubble sort
    
//     for (let i = 0; i < score.length; i++){
            
//         for(let j = 0; j < ( score.length - i -1 ); j++){

//             if(score[j][k] < score[j+1][k]){
//                 let temp = score[j]
//                 score[j] = score[j + 1]
//                 score[j+1] = temp
//             }
//         }
//     }
//         return score
//         }
//console.log(sortTheStudents(score, k))
var sortTheStudents = function (score, k) {
    
    let hold;
    for (let i = 0; i <= score.length; i++) { 

        let current = score[i][k] 

        if (!score[i + 1]) { break }
        
        let next = score[i +1][k]

        if (next > current) { 
            hold = score[i]
            score[i] = score[i +1]
            score[i + 1] = hold
            i = -1//my sort X D
        }
    }
    return score
};
console.log(sortTheStudents(score, k))