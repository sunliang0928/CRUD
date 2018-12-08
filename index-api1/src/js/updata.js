require(['./js/config.js'],function(){
	require(['jquery','mui','search'],function($,mui,search){
	     var id=search.id;
		 console.log(id)
		 var name=$('.username').val();
		     phone=$('.phone').val();
			 address=$('address').val();
		 if(!id){
			 mui.ajax('/users/api/updata',{
				 type:'post',
				 data:{
					 id:id
				 },
				 success:function(res){
					 console.log(res);
				 }	
			 })
		 }
	})
})