var gulp=require('gulp');
var server=require('gulp-webserver');
gulp.task('server',function(req,res,next){
	gulp.src('./src')
	.pipe(server({
		port:9090,
		proxies:[
			{source:'/users',target:'http://localhost:3000/users'},
			{source:'/users/api/detail',target:'http://localhost:3000/users/api/detail'},
			{source:'/users/api/add',target:'http://localhost:3000/users/api/add'},
			{source:'/users/api/updata',target:'http://localhost:3000/users/api/updata'},
			{source:'/users/api/delete',target:'http://localhost:3000/users/api/delete'}
		]
	}))
})


