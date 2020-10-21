$ul=$('#city-list');
$city=$('#city');
$op=$('#op');
$bg=$('#bg');
$op.fadeToggle(1000);
$city.on('click',()=>{
    $ul.slideToggle(500);
})
$ul.on('click','li',function(){
    
    turn($(this)).then(()=>{
        localStorage.setItem("city", $(this).html());
        return turn_2()
    }).then(()=>{
        location.href="./index.html"
    })
});
function turn(_this){
    return new Promise((resolve,reject)=>{
        $city.children().eq(0).html(_this.html());
        $ul.slideToggle(500);
        
        $op.fadeToggle(1000);
        setTimeout(resolve,1500);
    })
  }
  function turn_2(){
    return new Promise((resolve,reject)=>{
        $bg.css({
            background: `url("http://www.blackswancake.com/statics/images/loging.gif") no-repeat center `
        });
        setTimeout(resolve,1200);
    })
    
  }
