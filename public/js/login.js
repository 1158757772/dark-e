$('input').on( 'click' , function (){
    let value = $(this).attr('data-value');

    $(this).val('').siblings().val( value );
} )

$('.login').on( 'click' , function (){
    

    let url = 'http://localhost:3000/user/login';
    let user = $('.user').val();
    let pass = $('.pass').val();

    $.post( url , { user , pass } , function ( data ){
        if( data.err !== 2 ){
            alert( data.msg );
        }
        else{
            alert( data.msg );

            location.href = '../html/city.html'
        }
    } )
} )