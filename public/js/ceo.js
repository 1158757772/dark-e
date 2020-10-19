let num=0;
$item=$('.page04-item');
$prev=$('.prev');
$next=$('.next');
$bg=['http://www.blackswancake.com/statics/images/ceo-1.jpg','http://www.blackswancake.com/statics/images/ceo-2.jpg','http://www.blackswancake.com/statics/images/ceo-3.jpg','http://www.blackswancake.com/statics/images/ceo-4.jpg']
$item.each(function(i,elem){
console.log($bg[i])
$item.eq(i).css('background','url('+$bg[i]+')');
})

 $prev.css('display','none');
$next.click(function(){
    if(num==$item.length-2){
        num=$item.length-1;  
        $next.css('display','none');
    }
    else{
        num++;
        $next.fadeIn();
    }
    $prev.fadeIn();
    console.log(num)
    run();
})
$prev.click(function(){
    if(num==1){
        num=0;  
        $prev.css('display','none');
    }
    else{
        num--;
        $prev.fadeIn();
    }
    $next.fadeIn();console.log(num)
    run();
})

function run(){
    $item.eq(num).stop().fadeIn().siblings('.page04-item').fadeOut();
    
}