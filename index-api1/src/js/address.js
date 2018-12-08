require(['./js/config.js'],function(){
	require(['jquery','mui','search'],function($,mui,search){
		mui.init();
		 var id=search.id;
		 if(id){
			 mui.ajax('/users/api/detail',{
			 	type:'post',
				data:{
					id:id
				},
				dataType:'json',
			 	success:function(res){
			 		if(res.code===1){
						var data=res.msg[0]
						$('.username').html(data.name),
						$('.phone').html(data.phone||'无'),
						$('.address').html(data.address||'无')
					}
			 	}
			 })
		 }
		 //点击修改信息
		 
		$('.btn').on('tap',function(){
			location.href='add.html?id='+id
		})
	})
})	