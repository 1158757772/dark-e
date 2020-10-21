var str=''
$.ajax({
    url: 'http://localhost:3000/cake/getType',
    type: 'POST',
    data: {type:'经典系列'},
    success: function (data){
		 for(var i=0;i<data.list.length;i++){
            if(i==1){
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
    
      $.ajax({
        url: 'http://localhost:3000/cake/getId',
        type: 'POST',
        data: {_id:$(this).attr('data-id')},
        success: function (data){
            //  data.item--->根据id查询到数据
            
            let idStr=`
            <div class="wh-mask">
            <div class="box" style=" position:fixed;top:8%;left:50%;margin-left:-275px; width: 550px;">
                <div class="close">X</div>
                <p></p>
                    <h3>${data.item.name}</h3>
                    <table border="0" cellspacing="0" cellpadding="0" width="100%" style="margin-bottom:20px;">
                    <tbody>
                        <tr style="height:40px;margin-bottom:10px;">
                            <td class="tds">规格(cm)</td>
                            <td class="tds">重量(克)</td>
                            <td class="tds">可供食用人数</td>
                            <td style="padding-left:2%;">价格(元)</td>
                        </tr>
                        <tr style="height:20px;">
                            <td style="font-size:12px;line-height:25px" class="cakeSize"></td>
                            <td style="font-size:12px;line-height:25px">${data.item.weight}</td>
                            <td style="font-size:12px;line-height:25px">${data.item.people}</td>
                            <td style="padding-left:2%;font-size:12px;line-height:25px">￥${data.item.price}.00</td>
                        </tr>
                        </tbody>
                    </table>
                    <ul style="margin-top:30px;">
                            <select class="do-li select-cake">
                                
                            </select>
                        <li class="do-li buy-cake"> <a>立即购买</a>  </li>
                    </ul>
                
                    <div>
                        <p>&nbsp; &nbsp;<span style="font-size: 9pt; font-family: &quot;Heiti SC Light&quot;;">-</span></p>
                        <p><span style="font-size: smaller;"><span style="font-family: 宋体; font-weight: 700;">口味</span></span></p>
                        <p>${data.item.taste}</p>
                        <p>-</p>
                        <p><span style="font-weight: bold; font-size: 9pt; font-family: 宋体;">主要原料</span></p>
                        <p class="p1">${data.item.rawMaterial}</p>
                        <p class="p1">-</p>
                        <p class="p1"><strong><span style="font-family: &quot;Heiti SC Light&quot;;">冷藏保存</span></strong><span lang="EN-US" style="font-size: 9pt; font-family: Arial;"><o:p></o:p></span></p>
                        <p class="p1">&nbsp;</p>
                        <p class="p1"><span lang="EN-US" style="font-size: 9pt; font-family: Arial;">${data.item.coldStorage}</span></p>
                        <p class="p1"><span style="font-family: &quot;Heiti SC Light&quot;;">-</span></p>
                        <p class="p1"><strong>&nbsp; &nbsp; 配送费用</strong></p>
                        <p class="p1">北京市五环内免费配送；</p>
                        <p class="p1">成都市三环内免费配送；</p>
                        <p class="p1">沈阳市三环内免费配送；</p>
                        <p class="p1">长春市三环内免费配送；</p>
                        <p class="p1">石家庄市二环内免费配送；</p>
                        <p class="p1">天津市外环线内免费配送；</p>
                        <p class="p1">大连市配送费详情咨询客服；</p>
                        <p class="p1">哈尔滨市江北平房除外的三环内免费配送。</p>
                        <p>&nbsp;-</p>	
                    </div>
                
                    </div>
        </div>
            `
            $('body').append(idStr);
        }
      }).then((data)=>{
        for (var key in data.item.size) {
            $('.cakeSize').html(key)    //获取key值
            $('.select-cake').append(`<option data-key="${key}">${key}--${data.item.size[key]}</option>`)
        }
        $('.wh-mask').css('display','block');
        $('.wh-mask').on('click','.close',function(){
          $('.wh-mask').remove();
          
        })
        $('.wh-mask').on('click','.buy-cake',function(){
            let kk="";
            for(var i=0;i<$(' .select-cake').children().length;i++){
                if($(' .select-cake').children().eq(i).val()==$('.select-cake').val()){
                    kk=$(' .select-cake').children().eq(i).attr("data-key");
                }
            }
            
            localStorage.setItem("_id", data.item._id);
            localStorage.setItem("size", kk);
          alert('添加购物车成功')
        })
      })
  })
  