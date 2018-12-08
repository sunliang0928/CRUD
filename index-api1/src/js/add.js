require(['./js/config.js'],function(){
	require(['jquery','mui','search'],function($,mui,search){
		var id = search.id;
		if(id){
			$.ajax({
				url:'/users/api/detail',
				type:'post',
				data:{
					id:id
				},
				dataType:'json',
				success:function(res){
					var data = res.msg[0];
					$('.username').val(data.name);
					$('.phone').val(data.phone);
					$('.address').val(data.address);
				}
			})
		}

		$('.btn1').on('click',function(){
			var name=$('.username').val(),
				phone=$('.phone').val(),
				address=$('.address').val();
			if(!name){
				alert('请输入用户名')
			}else{		
				var url = id ? '/users/api/updata' : '/users/api/add';
				$.ajax({
					url:url,
					data:{
						id:id,
						name:name,
						phone:phone,
						address:address,
					},
					type:'post',
					dataType:'json',
					success:function(res){
						if(res.code===1){
							alert(res.msg);
							location.href='../index.html'
						}
					}
				})
			}
		})
	})
})