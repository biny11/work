for(let i=1;i<=3;i++){
    document.querySelector('.slide-'+i).addEventListener('click',function(){
        let x = -100 * (i-1)
        console.log(x)
        document.querySelector('.slide-container').style.transform = 'translateX('+x+'vw)';
    })
}

let index = 0;
document.querySelector('.slide-before').addEventListener('click',function(){
    if(index == 0){
        index = 2;
    }else{
        index--;
    }
    let x = -100 * (index)
    document.querySelector('.slide-container').style.transform = 'translateX('+x+'vw)';
})

document.querySelector('.slide-next').addEventListener('click',function(){
    if(index == 2){
        index = 0;
    }else{
        index++;
    }
    let x = -100 * (index)
    document.querySelector('.slide-container').style.transform = 'translateX('+x+'vw)';
})