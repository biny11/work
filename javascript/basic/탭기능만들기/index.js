
document.querySelector('.list').addEventListener('click',function(e){
    let index;
    document.querySelectorAll('.tab-button').forEach(function(v, i){
        v.classList.remove('active')
        if(e.target == v){
            index = i;
        }
    });
    document.querySelectorAll('.tab-content').forEach(function(v){
        v.classList.remove('show')
    });

    e.target.classList.add('active');
    document.querySelectorAll('.tab-content')[index].classList.add('show')
})