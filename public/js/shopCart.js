let now = 0;

$('.minus').click(function (){
    if( now <= 1 ){
        now = 1;
    }
    else{
        now--;
    }

    $('.ipt').val( now );
})

$('.add').click(function (){
    now++;
    
    $('.ipt').val( now );
})





























































