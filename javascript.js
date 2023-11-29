let input=document.querySelector(".input");
let işaretler=document.querySelectorAll(".işaretler");
let numbers=document.querySelectorAll(".numbers");
let temizle=document.querySelector(".temizle");
let esittir=document.querySelector(".esittir");

 $(".temizle").click(function(){
     $(".input").val("0");
 });

 
$(".esittir").click(function(){
    $(".input").val(eval(input.value));
});


numbers.forEach(function(element){
    element.onclick=function(e){
        if(input.value==0){
            input.value="";
        }
        input.value+=this.value;
    }
});

işaretler.forEach(function(element){
    element.onclick=function(e){
        if(input.value==0){
            input.value="";
        }
        input.value+=this.value;
    }
});

   




























// function toplama(a,b){
//     toplamaSonuc=a+b;
//     input.value=toplamaSonuc;
// }
// function cikarma(a,b){
//     return a-b;
// }
// function carpma(a,b){
//     return a*b;
// }
// function bolme(a,b){
//     return a/b;
// }



// function ekranTemizle(){
//     input.value="";
// }

// function sayiYazdir(val){  
//     input.value+=val;
// }






