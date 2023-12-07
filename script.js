window.addEventListener('scroll',show);
function show(){
    var all=document.querySelectorAll('.rev');
    for(let i=0;i<all.length;i++){
        var wh=window.innerHeight;
        var rt=all[i].getBoundingClientRect().top;
        var rp=100;
        if(rt<wh-rp){
           all[i].style.opacity=1;
        }
        else{
            all[i].style.opacity=0;
        }
    }
}