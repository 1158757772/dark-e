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

            location.href = '../html/index.html'
        }
    } )
} )