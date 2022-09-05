

// function capitalizeFirstOnly(word){
// var container=[];
// container=word.split('');
// // console.log(container);

// for(i=0;i<=container.length;i++){
// if(i==0){
// var capital=container[i].toUpperCase();
// console.log(capital);
// }
// else{
//  var small=container[i].toLowerCase();
// console.log(small);
// }

// } 
// var result=capital+small;
// console.log(result);
// }
// capitalizeFirstOnly('HOLLA');


// var arr=[
// "Hello i am a winner",
// "let everyone accept me",
// "I have triumphed",
// "God is good always"
// ]
var arr=[
 "Hello i am a winner",
 "let everyone accept me",
"I am a good girl"


]

// console.log(arr[0].split(''));
// let sep=arr[0].split('');
// console.log(sep.length);
// console.log(sep.slice(sep.length-1,sep.length));


// var container=[joint];
// container=joint;

// let container=[];
// container=joint;
// console.log(joint);

// console.log(joint);
function get(line){
 var container=[line];
var lastLetters=container.map((item)=>{
 var sep=item.split('');
var lasts=sep.slice(sep.length-1,sep.length);
var joint=lasts.join('');
return joint;
})
console.log(lastLetters);
}
get('where is she','i saw men')