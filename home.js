/*function x(){
    var a=10,b=20;
    return function(){
        console.log(a)
    }
}
let p=x()
p();
    
setTimeout(function(){
    console.log("timer")
},5000);
function x(y){
    console.log("x")
    y() 
}
x(function y(){
    console.log("y")
})  
*/

function attachEventListeners(){
    let count=0;
    document.getElementById("click").addEventListener("click",function xyz(){
        console.log("clicked",count++);
    });
}
attachEventListeners();