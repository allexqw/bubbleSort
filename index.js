let length=20;
let array=[];
let left=0;
let right=0;

rnd(length);
console.log(array);
bubblesort(array,length);
console.log(array);

function rnd(length) {
    for (let i=0; i<length;i++){
        array[i]=Math.floor(Math.random() * Math.floor(length));     
    }
    return array;
}

function bubblesort(array,length) {
    for(let i =0;i<length-1;i++){
        for(let j= length-1;j>0;j--){
            if(array[j] < array[j-1]){
                left=array[j];
                right=array[j-1];
                array[j-1]=left;
                array[j]=right;   
            }
            else if(array[j]>array[j-1]) {
                continue;     
            }
        }
    }
    return array;
}