// // Online Javascript Editor for free
// // Write, Edit and Run your Javascript code using JS Online Compiler

// let str = "name madam race2233235car le2v2el  refer pop wow5";

//     // let strArr =[]
//     let str1 ='';
// for(let i =0; i< str.length ; i++ ){
        
//     while(str[i] != ' ' && i < str.length){
//       if(str[i] >='a' && str[i]<= 'z'){
//             str1 += str[i]
//         }
//         i++
        
//     }
//         if(str1){
//             // strArr.push(str1)
//             if(checkPalindrome(str1)){
//                 console.log(str1);
//             }
//             str1 =''
//         }
// }
// function checkPalindrome(str){
//     let revStr = '';
//     for(let i = str.length-1; i>=0; i--){
//         revStr+= str[i]
//     }
//     if(revStr == str){
//     return true 
//     }
//     return false
// }



//////////////////////////////

// for(let i =0; i< strArr.length ; i++ ){
//     if(checkPalindrome(strArr[i])){
//         console.log(strArr[i]);
//     }
// }


// let strArr= ['floabcdwer', 'flaskabcd', 'fluteabcd']

// let result = {isCommen :false, str : '', length :0}
// // for(let i = 0; i < strArr.length ; i++){
// let string =strArr[0]
// // console.log(string)
    
//     for(let j=0;j< string.length; j++){
//         for(let k = string.length-1 ; k>=0; k--){
//         let curStr = '';
//         let newJv =j;
//         while(newJv<=k){
//             curStr += string[newJv]
//             newJv++
//             // console.log(newJv);
//         }
//         if(curStr){
//             console.log(curStr)
//               let isCommon =  checkCommen(curStr)
//               if(isCommon && result.length< curStr.length){
//                   result = {isCommen :true, str : curStr, length :curStr.length}
//               }
//             //   console.log(result);
//             }
//         }
//     }
//     console.log(result);
    
//     function checkCommen(str){
        
//             // console.log(str);
//             // console.log(result);
//         for(let i =0; i< strArr.length; i++){
//           let index = strArr[i].indexOf(str)
//             // console.log(index);
//           if(index == -1){
//               return false
//           }
//         }
//         return true
//     }


// let arr = [{a:3, b:4},{a:3, b:5},{a:1,b:6},{a:3, b:7},5,6];


// console.log(arr.find(i => i.a == 3))
// // console.log(rra)

// let arr = [1, [2, 3, [4, 5, [6]]], 7];

// function printArr(arr){
//     let normalisedArr = []
//     arr.forEach((item)=>{
//         if(item instanceof Array){
//           let newArr = printArr(item)
//             normalisedArr = [...normalisedArr, ...newArr]
//         }else{
//             // console.log(item)
//             normalisedArr.push(item)
//         }
//     })
//     // console.log('res', normalisedArr)
//     return normalisedArr
// }
let i =0
let abc =()=>{
    i+=1
}
console.log(abc())
// printArr(arr)

































