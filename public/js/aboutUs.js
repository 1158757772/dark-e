$('.licence').on( 'click' , function (){
    $('.box img').show();

    $('.box img').on( 'mouseout' , function ( ev ){
        let dix = Math.abs( ev.pageX - $('.box img').width() );
        
        if( dix ){
            $('.box img').hide();
        }
    } )
} )

$('.service').on( 'click' , function (){
    location.href = '../html/service.html';
} )

$('.weibo').on( 'click' , function (){
    location.href = 'https://weibo.com/blackswanluxury?is_all=1';
} )

$('.weixin').on( 'mouseover' , function (){
    $('.QRcode').show();

    $('.QRcode').on( 'mouseout' , function ( ev ){
        let disX = Math.abs( ev.pageX - $('.QRcode').width() );
        let disY = Math.abs( ev.pageY - $('.QRcode').height() );
        
        if( disX && disY ){
            $('.QRcode').hide();
        }
    } )
} )


