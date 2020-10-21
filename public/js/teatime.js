var num = 0;

$('section').eq( 0 ).addClass('active').siblings().removeClass('active');

$('section').eq( 0 ).find('div').fadeIn(2000);

$('.right').click(function (){
    if( num >= $('section').length - 1 ){
        num = 0;
    }
    else{
        num++;
    }
    //console.log(num);
    $('section').eq( num ).addClass('active').siblings().removeClass('active');
    
    $('section').eq( num ).find('div').fadeIn(2000);
    $('section').eq( num ).siblings().find('div').fadeOut();
})

$('.left').click(function (){
    if( num <= 0 ){
        num = $('section').length - 1;
    }
    else{
        num--;
    }
    //console.log(num);
    $('section').eq( num ).addClass('active').siblings().removeClass('active');
    
    $('section').eq( num ).find('div').fadeIn(2000);
    $('section').eq( num ).siblings().find('div').fadeOut();
})
























