
$.ajax({
    url: 'localhost:3000/cake/getType',
    type: 'POST',
    data: {type:'全新系列'},
    success: function (data){
		console.log(data)
		//  for(var i=0;i<data.list.length;i++){
			
		// 	$('tbody').append(`
		// 	<tr class="text-c">
		// 			<td><input name="" type="checkbox" value=""></td>
		// 			<td class="_id">${data.list[i]._id}</td>
		// 			<td class="_dataName">${data.list[i].name}</td>
		// 			<td class="_url"><a href="javascript:;" onClick="picture_edit('图库编辑','picture-show.html','10001')"><img width="210" class="picture-thumb" src="${data.list[i].imgurl}"></a></td>
		// 			<td class="text-l _desc"><a class="maincolor" href="javascript:;" onClick="picture_edit('图库编辑','picture-show.html','10001')">${data.list[i].desc}</a></td>
		// 			<td class="text-c _price">${data.list[i].price}</td>
		// 			<td class="_type">${data.list[i].type}</td>
		// 			<td class="td-manage"><a style="text-decoration:none" onClick="picture_stop(this,'10001')" href="javascript:;" title="下架"><i class="Hui-iconfont">&#xe6de;</i></a> <a style="text-decoration:none" class="ml-5" onClick="picture_edit('图库编辑','picture-add.html','10001')" href="javascript:;" title="编辑"><i class="Hui-iconfont">&#xe6df;</i></a> <a style="text-decoration:none" class="ml-5" onClick="picture_del(this,'10001')" href="javascript:;" title="删除"><i class="Hui-iconfont">&#xe6e2;</i></a></td>
		// 		</tr>
		// 	`)
		// }
    }
  })