var str=''
$.ajax({
    url: 'http://localhost:3000/cake/getType',
    type: 'POST',
    data: {type:'全新系列'},
    success: function (data){
		 for(var i=0;i<data.list.length;i++){
            if(i==1||i==2){
                str+=`<div class="page" style="background: url(${data.list[i].imgurl}) center;background-size: cover;">
            <div class="page-content" style="top:32%;left:72.9%;;cursor:pointer;">
                <div class="logo"><img src="http://www.blackswancake.com/statics/images/ms-logo.png" style="width: 130px; margin-bottom: 20px;"></div>
                <h3>${data.list[i].name}</h3>
                <p>-</p>
                <p style="line-height: 20px;"  class="desc"></p>
                <p>-</p>
                <div class="x-d" data-id="${data.list[i]._id}"><a class="iconfont icon-tianjia" style="color:#7d7d7d ;font-size: 24px;"></a></div>
            </div>
        </div>`
            }else{
                str+=`<div class="page" style="background: url(${data.list[i].imgurl}) center;background-size: cover;" >
            <div class="page-content" style="top:32%;left:22.9%;;cursor:pointer;">
                <div class="logo"><img src="http://www.blackswancake.com/statics/images/ms-logo.png" style="width: 130px; margin-bottom: 20px;"></div>
                <h3>${data.list[i].name}</h3>
                <p>-</p>
                <p style="line-height: 20px;" class="desc"></p>
                <p>-</p>
                <div class="x-d" data-id="${data.list[i]._id}"><a class="iconfont icon-tianjia" style="color:#7d7d7d ;font-size: 24px;"></a></div>
            </div>
        </div>`
			}
			
        }
        $('#container').html(str);
    }
  }).then((data)=>{
      
      for(var i=0;i<data.list.length;i++){
        let p='';
          for(var n=0;n<data.list[i].desc.length;n++){
            p+=`
            <p>${data.list[i].desc[n]}</p>
            `
          }
          $('.desc').eq(i).html(p);
      }
  })
  $('#container').on('click','.x-d',function(){
      console.log($(this).attr('data-id'))
      $.ajax({
        url: 'http://localhost:3000/cake/getId',
        type: 'POST',
        data: {_id:$(this).attr('data-id')},
        success: function (data){
             for(var i=0;i<data.list.length;i++){
            }
            $('#container').html(str);
        }
      })
  })