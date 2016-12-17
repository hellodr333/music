
	var app = angular.module('myApp',['ui.router','ngMessages']);
//------------------------------配置路由----------------------------
	app.config(function($stateProvider,$urlRouterProvider){
		// when(url显示的地址，state中配置的)
		$urlRouterProvider.when('/','/home/menu1').otherwise('/home/menu1');
		$stateProvider.state('index',{
			url:'/',
			views:{
				'head':{
					templateUrl:'views/head.html'
				},
				'cont':{
					templateUrl:'views/cont.html'
				},
				'footer':{
					templateUrl:'views/footer.html'
				}
			}
		})
		.state('index.home',{
			url:'home',
			views:{
				'menu':{
					templateUrl:'views/menu.html'
				}
			}
		})
		.state('index.home.menu1',{
			url:'/menu1',
			views:{
				'info@index':{
					templateUrl:'views/menu1.html'
				}
			}
		})
		.state('index.home.menu2',{
			url:'/menu2',
			views:{
				'info@index':{
					templateUrl:'views/menu2.html'
				}
			}
		})
		.state('index.home.menu3',{
			url:'/menu3',
			views:{
				'info@index':{
					templateUrl:'views/menu3.html'
				}
			}
		})
		.state('index.home.menu4',{
			url:'/menu4',
			views:{
				'info@index':{
					templateUrl:'views/menu4.html'
				}
			}
		})
		.state('index.home.menu5',{
			url:'/menu5',
			views:{
				'info@index':{
					templateUrl:'views/menu5.html'
				}
			}
		})
	});


	app.controller('leftCtrl',function($scope,$element){
		$scope.arr = [
			{state:'index.home.menu1',src:'img/search1.png',title:'搜索'},
			{state:'index.home.menu2',src:'img/music.png',title:'发现音乐'},
			{state:'index.home.menu3',src:'img/friend.png',title:'朋友'},
			{state:'index.home.menu4',src:'img/love.png',title:'我喜欢的音乐'},
			{state:'index.home.menu5',src:'img/member.png',title:'成为会员'},

		];

		$scope.setIndex = function(which){
			$scope.current = which;
		}
		
	});


	app.controller('menu1Ctrl',function($scope){
		$scope.hotItems = [
			{state:'index.home.menu1',src:'img/search.png',title:'搜索'},
			{state:'index.home.menu2',src:'img/music.png',title:'发现音乐'},
			{state:'index.home.menu3',src:'img/friend.png',title:'朋友'},
			{state:'index.home.menu4',src:'img/love.png',title:'我的歌单'},
			{state:'index.home.menu5',src:'img/member.png',title:'成为会员'},
		];
		$scope.historyItems = [
			{title:'朱之文'},
			{title:'学习'},
			{title:'许嵩'},
			{title:'新娘不是我'},
			{title:'她不爱我'},
			{title:'你的名字'}
			
		];
		$scope.removeHistory= function(which){
			$scope.historyItems.splice(which,1)
		}
	});

	app.controller('menu2Ctrl',function($scope){
		$scope.current ='';
		$scope.songListCat = ['华语','流行','摇滚','民谣','电子','轻音乐','影视原声','ACG'];
		$scope.songListItems = [
			{src:'img/songList1.jpg',title:'【古典器乐 】 不得错过的好音乐',author:'chongweiwei'},
			{src:'img/songList2.jpg',title:'【古典器乐 】 不得错过的好音乐',author:'chongweiwei'},
			{src:'img/songList3.jpg',title:'【古典器乐 】 不得错过的好音乐',author:'chongweiwei'},
			{src:'img/songList4.jpg',title:'【古典器乐 】 不得错过的好音乐',author:'chongweiwei'},
			{src:'img/songList5.jpg',title:'【古典器乐 】 不得错过的好音乐',author:'chongweiwei'},
			{src:'img/songList6.jpg',title:'【古典器乐 】 不得错过的好音乐',author:'chongweiwei'},
			{src:'img/songList7.jpg',title:'【古典器乐 】 不得错过的好音乐',author:'chongweiwei'},
			{src:'img/songList8.jpg',title:'【古典器乐 】 不得错过的好音乐',author:'chongweiwei'},
			{src:'img/songList1.jpg',title:'【古典器乐 】 不得错过的好音乐',author:'chongweiwei'},
			{src:'img/songList2.jpg',title:'【古典器乐 】 不得错过的好音乐',author:'chongweiwei'},
			{src:'img/songList3.jpg',title:'【古典器乐 】 不得错过的好音乐',author:'chongweiwei'},
			{src:'img/songList4.jpg',title:'【古典器乐 】 不得错过的好音乐',author:'chongweiwei'},
			{src:'img/songList5.jpg',title:'【古典器乐 】 不得错过的好音乐',author:'chongweiwei'},
			{src:'img/songList6.jpg',title:'【古典器乐 】 不得错过的好音乐',author:'chongweiwei'},
			{src:'img/songList7.jpg',title:'【古典器乐 】 不得错过的好音乐',author:'chongweiwei'}
		];

		$scope.setList = function(which){
			$scope.current = which;
		};
		$scope.isShow = function(which){
			if(which==$scope.current){
				return true
			}else{
				return false;
			}
		}
	});


	app.controller('menu3Ctrl',function($scope){
		
	});


	app.controller('menu4Ctrl',function($scope){
		$scope.loveSongItems = [
			{songName:'你在终点等我',singer:'王菲',cdName:'专辑名称',time:'05:20'},
			{songName:'Zoobi Doobi',singer:'徐仁国/Zia',cdName:'Remember You',time:'05:20'},
			{songName:'心跳 - (电影《女汉子真爱公式》',singer:'汪苏泷',cdName:'心跳',time:'05:20'},
			{songName:'在,也不见 - From "Distance" ',singer:'孙燕姿',cdName:'在,也不见',time:'05:20'},
			{songName:'你在终点等我',singer:'王菲',cdName:'专辑名称',time:'05:20'},
			{songName:'Zoobi Doobi',singer:'徐仁国/Zia',cdName:'Remember You',time:'05:20'},
			{songName:'心跳 - (电影《女汉子真爱公式》',singer:'汪苏泷',cdName:'心跳',time:'05:20'},
			{songName:'在,也不见 - From "Distance" ',singer:'孙燕姿',cdName:'在,也不见',time:'05:20'}
		]
	});

	app.controller('menu5Ctrl',function($scope){
		$scope.user={};
		$scope.user.hobby = [];
		$scope.setHobby = function(which){
			$scope.user.hobby.push(which);
		};
		$scope.submitForm = function(json){
			$scope.user = json;
			console.log(json)
			//$http.get('url',{params:$scope.user}).success(function(){}).error(function(){})
			
		};

	
	});




	var srcArr=[
		{musicSrc:'audios/remix.mp3',imgSrc:'img/cd1.jpg',songName:'remix',singer:'钢琴曲'},
		{musicSrc:'audios/all.mp3',imgSrc:'img/cd2.jpg',songName:'all',singer:'音乐'},
		{musicSrc:'audios/memories.mp3',imgSrc:'img/cd3.jpg',songName:'memories',singer:'海泽王'},
		{musicSrc:'audios/mm.mp3',imgSrc:'img/cd4.jpg',songName:'猛犸',singer:'后海大鲨鱼'}
	];		
	
	app.run(function($rootScope){
		$rootScope.srcArr = srcArr;
	
	})

	// =================================底部===================================

	app.controller('footerCtrl',function($scope,$sce,$interval){
		$scope.musicSrc = 'audios/mm.mp3';
		$scope.imgSrc = 'img/cd4.jpg';
		$scope.songName = '猛犸';
		$scope.singer = '后海大鲨鱼';

		var oA=document.getElementById('audio');
		var speedBtn = document.getElementById('speed_this')
		var num = 0;
		var timer = '';
		var oTotal = '';
		var curTime = '';

		function fillZero(n){
	        if(n<10){
	            return '0'+n;
	        }else{
	            return ''+n
	        }
	    }


		var setCur = function(arr,index){
			if(index<0){
				index = -index;
			}
			index=index%arr.length;
			return {
						musicSrc:arr[index].musicSrc,
						imgSrc:arr[index].imgSrc,
						songName:arr[index].songName,
						singer:arr[index].singer
					}
		};

		$scope.toHide = true;
		$scope.play = function(){
			document.getElementById('audio').play();
			// 初始化 时间
			oA.ontimeupdate();
			timer = $interval(function(){
				oA.ontimeupdate();
				if(oTotal==curTime){
					$interval.cancel(timer);
				}
			},1000)

			$scope.toHide = !$scope.toHide;
			
		};
		$scope.pause = function(){
			document.getElementById('audio').pause();
			$scope.toHide = !$scope.toHide;
			$interval.cancel(timer);
		};

		$scope.next = function(){
			speedBtn.style.width=0;
			if($scope.toHide){
				document.getElementById('audio').removeAttribute('autoplay');
			}else{
				document.getElementById('audio').setAttribute('autoplay',true);
				oA.ontimeupdate();
				timer = $interval(function(){
					oA.ontimeupdate();
					if(oTotal==curTime){
						$interval.cancel(timer);
					}
				},1000)
			};
			num++;
			$scope.musicSrc = setCur(srcArr,num).musicSrc;
			$scope.imgSrc = setCur(srcArr,num).imgSrc;
			$scope.songName = setCur(srcArr,num).songName;
			$scope.singer = setCur(srcArr,num).singer;
			
		};
		$scope.prev = function(){
			speedBtn.style.width=0;
			if($scope.toHide){
				document.getElementById('audio').removeAttribute('autoplay');
			}else{
				document.getElementById('audio').setAttribute('autoplay',true);
				oA.ontimeupdate();
				timer = $interval(function(){
					oA.ontimeupdate();
					if(oTotal==curTime){
						$interval.cancel(timer);
					}
				},1000)

			};
			num--;
			$scope.musicSrc = setCur(srcArr,num).musicSrc;
			$scope.imgSrc = setCur(srcArr,num).imgSrc;
			$scope.songName = setCur(srcArr,num).songName;
			$scope.singer = setCur(srcArr,num).singer;
		
		};

		// 进度条 
		$scope.totalTime = '00:00';
		$scope.curTime = '00:00';
		
		oA.ontimeupdate = function(){
			 oTotal = parseInt(oA.duration);
			 curTime = parseInt(oA.currentTime)
			$scope.totalTime = fillZero(parseInt(oTotal/60))+':'+fillZero(oTotal%60);;
			curTime<60?$scope.curTime = '00:'+fillZero(curTime):$scope.curTime = fillZero(parseInt(curTime/60))+':'+fillZero(curTime%60)
			// 进度条
			var b=oA.currentTime/oA.duration;
       		 speedBtn.style.width=b*100+'%';

		};



	})

	app.filter('fillZero',function(){
		return function(value){
			value++
			if(value<10){
				return '0'+value;
			}else{
				return value;
			}
		}
	})


	


