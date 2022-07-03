var n=prompt("please enter the number to find factorial","e.g 0,1,2....");
var d=1;
var r=1;
for(r=1;r<=n;r=r+1){
d=d*r;
};
document.getElementById("display").innerHTML="the factorial of the number "+d;

