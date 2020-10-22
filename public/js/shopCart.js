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

$('.buy').click(function (){
    if( $('dt p').eq(2).attr('class') == 'p1' && $('dd p').eq(2).attr('class') == 'p2' ){
        let num = Number($('.ipt').val()) + Number($('.p1 span').text());
        let prices = num * $('.price span').text();
        
        $('.p1 span').text( num );
        $('.p2 span').text( prices );
    }
    else{
        let num = $('.ipt').val();
        let prices = num * $('.price span').text();

        let tmp = `<span>${num}</span>x 叉子`;
        let cmp = `￥<span>${prices}</span><strong>x</strong>`;

        let $p1 = $('<p>').addClass('p1');
        let $p2 = $('<p>').addClass('p2');

        $p1.html( tmp );
        $p2.html( cmp );

        $('dt').append( $p1 );
        $('dd').append( $p2 );
    }
})

$('dd').on('click' , 'strong' , function (){
    createPopUpAd();

    $('body').on('click' , '#popUpAd .affirm' , function (){
        location.href = '../html/shopCart.html';
    })

    $('body').on('click' , '#popUpAd .cancel' , function (){
        $(this).parent().remove();
        $('#mk').remove();
    })
    
    $('body').on('click' , '#popUpAd strong' , function (){
        $(this).parent().remove();
        $('#mk').remove();
    })
})

function createPopUpAd (){
    let $popUpAd = $('<div>').attr( 'id' , 'popUpAd' );
    let $mk = $('<div>').attr( 'id' , 'mk' );

    let text = `
        <div>确定从购物车删除该物品吗？</div>
        <strong>x</strong>
        <button class="affirm">确认</button>
        <button class="cancel">取消</button>
    `;

    $popUpAd.html( text );

    $('body').append( $popUpAd );
    $('body').append( $mk );
}
























































