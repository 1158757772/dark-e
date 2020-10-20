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

// $('.buy').click(function (){
//     let num = $('.ipt').val();
//     let prices = num * $('.price span').text();

//     let tmp = `<span>${num}</span>x叉子`;
//     let cmp = `￥<span>${prices}</span><span>x</span>`;

//     let $p1 = $('<p>').addClass('p1');
//     let $p2 = $('<p>').addClass('p2');

//     $p1.html( tmp );
//     $p2.html( cmp );

//     $('dt').append( $p1 );
//     $('dd').append( $p2 );
// })

$('.buy').click(function (){
    let num = Number($('.ipt').val()) + Number($('.p1 span').text());
    let prices = num * $('.price span').text();
    
    $('.p1 span').text( num );
    $('.p2 span').text( prices );
})


























































