$('.codebtn').on( 'click' , function (){
    let url = 'http://localhost:3000/user/verify';
    let email = $('.email').val();
    
    $.post( url , { email } , function ( data ){
        if( data.err !== 3 ){
            alert( data.msg );
        }
        else{
            alert( data.msg );
        }
    } )
} )

$('.register').on( 'click' , function (){
    let url = 'http://localhost:3000/user/register';
    let user = $('.phone').val();
    let pass = $('.cipher').val();
    let email = $('.email').val();
    let code = $('.code').val();

    $.post( url , { user , pass , email , code } , function ( data ){
        if( data.err !== 1 ){
            alert( data.msg );
        }
        else{
            alert( data.msg );
        }
    } )
} )