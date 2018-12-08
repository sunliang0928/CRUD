require(['../js/config'],function(){
	require(['jquery','mui'],function($,mui){
		mui.init();
		$.ajax({
			url:'/users',
			type:'get',
			success:function(data){
				var str=``; 
			  data.result.forEach(function(itme){
					str+=`<li class="mui-table-view-cell">${itme.name}
					<button type="button" class="mui-btn mui-btn-primary" id="btn" data-set="${itme.id}">查看详情</button>
					<button type="button" class="mui-btn mui-btn-danger" id="red" data-set="${itme.id}">删除</button></li>`
				})
				$('.list').html($(str));
				//点击查看详情
			$('.mui-table-view-cell').on('tap','#btn',function(){
				 var id=$(this).attr('data-set');
				 location.href='address.html?id='+id;
			  })
			$('.mui-table-view-cell').on('tap','#red',function(){
				     var id=$(this).attr('data-set');
						 var that=this;
						 var Arr=['否','是']
						 mui.confirm('','您确认要删除吗？',Arr,function(e){
							 if(e.index===1){
								$.ajax({
										url:'/users/api/delete',
										data:{
										id:id
										},
										dataType:'json',
										success:function(res){
										if(res.code===1){
												$(that).parents('.mui-table-view-cell').remove();
										}
									}
								})
							 }
						})
				})
			 },
		 })
		 $('.mui-icon').on('tap',function(){
			 location.href='add.html';
		 })
	})
})