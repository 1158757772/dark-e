let num=0;
$item=$('.page04-item');
$bg=['http://www.blackswancake.com/statics/images/store/1.jpg','http://www.blackswancake.com/statics/images/store/2.jpg','http://www.blackswancake.com/statics/images/store/3.jpg']
$item.each(function(i,elem){
console.log($bg[i])
$item.eq(i).css({
    'background':'url('+$bg[i]+')',
    'background-size':'cover',
    'background-position':'center'
});
})
setInterval(run,4000)

function run(){
    
    if(num==$bg.length){
        num=0;
    }
    console.log(num)
    $item.eq(num).stop().fadeIn().siblings('.page04-item').stop().fadeOut();
    num++;
}