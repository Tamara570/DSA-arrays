function urlifyString(string) {
    string = string.trim();
    let output = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        output += '%20';
      } else {
        output += string[i];
      }
    }
    return output;
  }
  
  console.log(urlifyString('  tauhida parveen'));

  
  
  
  function myFilter(arr, filter = 5) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= filter) {
        output.push(arr[i]);
      }
    }
    return output;
  }
  
  console.log(myFilter(arr));
  
  
  
  function maxSum(arr){
    let maxSum = 0;
    let sum=0;
    for(let i=0; i<arr.length;i++){
      sum = 0;  
      sum = arr[i];
      for(let j=i+1; j<arr.length;j++){
        sum += arr[j];
        if(sum>maxSum){
          maxSum = sum;
        }
      }
    }
    return maxSum;
  }
  
   
   
   
  function mergeArrays(arr1,arr2){
    let output=[];
    let index1 = 0;
    let index2 = 0;
    let current = 0;
    while(current<(arr1.length+arr2.length)){
      
      let depleted1 = (index1>=arr1.length);
      let depleted2 = (index2>=arr2.length);
  
      //if next item comes from arr1
      if(!depleted1 && (depleted2 || (arr1[index1]<arr2[index2]))){
        output.push(arr1[index1]);
        index1++;
      //if next item comes from arr2
      } else {
        output.push(arr2[index2]);
        index2++;
      }
      current++;
    }
  
    return output;
  }
   
   
   
   
  
  function removeCharacters(string, chars) {
    let output = '';
    for (let i = 0; i < string.length; i++) {
      let contained = true;
      for (let j = 0; j < chars.length; j++) {
        if (string[i] === chars[j]) {
          contained = false;
        }
      }
      if (contained) {
        output += string[i];
      }
    }
    return output;
  }
  
  
  
  function products(arr){
    let output=[];
    for(let i=0;i<arr.length;i++){
      let product=1;
      for(let j=0;j<arr.length;j++){
        if(i!==j){
          product *= arr[j];
        }
      }
      output.push(product);
    }
    return output;
  }