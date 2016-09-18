/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/e6a2455ae1e4b75e350f88b8e71fb958", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(1);
	__webpack_require__(6);

	;
	  var utils = __webpack_require__(5)
	  __weex_module__.exports = {
	    data: function () {return {
	      title: "全部"
	    }},
	    ready: function () {
	      var _this = this;
	      var enumTitle = utils.tabEnum;
	      this.$on('loadList', function(e){
	        console.log(e.detail.tab)
	        _this.title = enumTitle[e.detail.tab]['text'];
	        _this.$broadcast('loadPage', {tab: e.detail.tab});
	      });
	    }
	  }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "header",
	      "attr": {
	        "title": function () {return this.title}
	      }
	    },
	    {
	      "type": "lists"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "ct": {
	    "width": 750,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "img": {
	    "marginBottom": 20
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/e6a2455ae1e4b75e350f88b8e71fb958", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/header", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(2);

	;
		__webpack_require__(3);
		__weex_module__.exports = {
			data: function () {return {
				backgroundColor: "#fff",
				title: "全部",
				titleColor: "#333",
				leftItemSrc: "img/left.png",
				showCover: false
			}},
			ready: function () {
				var animation = __weex_require__('@weex-module/animation');
				var headNav = this.$el('headNav');
				this.$on('naviBar.leftItem.click', function(e){
					// console.log('left')
					this.showCover = true;
					this.$broadcast('showNav', {});
					animation.transition(headNav, {
						styles: {
							transform: 'translateX(450px)'
						},
						duration: 600,
						timingFunction: 'ease',
						delay: .3
					}, function(){})
				});
				var _this = this;
				this.$on('loadPage', function(){
					this.hideCover();
				});
			},
			methods: {
				hideCover: function () {
					this.showCover = false;
					this.$broadcast('moveHeader', {});
					var animation = __weex_require__('@weex-module/animation');
					var headNav = this.$el('headNav');
					animation.transition(headNav, {
						styles: {
							transform: 'translateX(0)'
						},
						duration: 600,
						timingFunction: 'ease',
						delay: .3
					}, function(){})
				}
			}
		}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "head-nav"
	      ],
	      "id": "headNav",
	      "children": [
	        {
	          "type": "wxc-navpage",
	          "classList": [
	            "nav"
	          ],
	          "attr": {
	            "height": "88",
	            "backgroundColor": function () {return this.backgroundColor},
	            "titleColor": function () {return this.titleColor},
	            "leftItemSrc": function () {return this.leftItemSrc},
	            "title": function () {return this.title}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "page-cover"
	      ],
	      "shown": function () {return this.showCover},
	      "events": {
	        "click": "hideCover"
	      }
	    },
	    {
	      "type": "tool-nav"
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "head-nav": {
	    "height": 88,
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "zIndex": 7
	  },
	  "nav": {
	    "boxShadow": "0 0 4px rgba(0,0,0,25)",
	    "borderBottom": "1px solid #ccc",
	    "height": 88,
	    "WebkitTransition": "all .3s ease",
	    "transition": "all .3s ease",
	    "transform": "translateX(0px)",
	    "WebkitTransform": "translateX(0px)"
	  },
	  "page-cover": {
	    "width": 750,
	    "position": "fixed",
	    "flex": 1,
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "background": "rgba(0, 0, 0, 0.4)",
	    "zIndex": 7
	  }
	})
	})

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/tool-nav", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
		var utils = __webpack_require__(5);
		__weex_module__.exports = {
			data: function () {return {
				show: false,
				loginUrl: "img/login.png",
				navList: [
					{
						imageUrl: 'img/sort_light.png',
						text: '全部',
						tab: 'all'
					},
					{
						imageUrl: 'img/appreciate_fill.png',
						text: '精华',
						tab: 'good'
					},
					{
						imageUrl: 'img/share.png',
						text: '分享',
						tab: 'share'
					},
					{
						imageUrl: 'img/wang_fill.png',
						text: '问答',
						tab: 'ask'
					},
					{
						imageUrl: 'img/friend_fill.png',
						text: '招聘',
						tab: 'job'
					},
					{
						imageUrl: 'img/notification_fill.png',
						text: '消息',
						tab: 'info'
					},
					{
						imageUrl: 'img/info_fill.png',
						text: '关于',
						tab: 'about'
					}

				],
				styles: {
					transform: false
				}
			}},
			methods: {
				loadPage: function(index){
					var tab = this.navList[index].tab;
					var _this = this;
					var storage = __weex_require__('@weex-module/storage');
					storage.setItem('tab', tab, function(){});
					storage.getItem('pageName', function(e){
						console.log(e.data)
						if(e.data == 'detail'){
							var base = utils.getBaseUrl(_this);
							var params = {
								'url': base + 'main.js',
								'animated': 'true'
							}
							_this.$call('navigator', 'push', params, function(){
								storage.setItem('pageName', 'main', function(){})
							});
						}else{
							_this.$dispatch('loadList', {tab: tab});
						}
					});
				}
			},
			ready: function(){
				this.$on('showNav', function(e){
					// console.log("showNav");
					this.show = true;
				});
				this.$on('moveHeader', function(e){
					this.show = false;
				});
			}
		}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return ['container', this.show?'show':'']},
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "logo-container"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "logo"
	          ],
	          "attr": {
	            "src": function () {return this.loginUrl}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "logo-title"
	          ],
	          "attr": {
	            "value": "登录"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "nav-container"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": function () {return ['nav-item', this.$index==5?'line':'']},
	          "repeat": function () {return this.navList},
	          "attr": {
	            "index": function () {return this.$index}
	          },
	          "events": {
	            "click": function ($event) {this.loadPage(this.$index,$event)}
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "nav-img"
	              ],
	              "attr": {
	                "src": function () {return this.imageUrl}
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "nav-text"
	              ],
	              "attr": {
	                "value": function () {return this.text}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "bottom": 0,
	    "width": 450,
	    "zIndex": 8,
	    "backgroundColor": "#ffffff",
	    "WebkitTransition": "all .6s ease",
	    "transition": "all .6s ease",
	    "transform": "translateX(-600px)",
	    "WebkitTransform": "translateX(-600px)"
	  },
	  "show": {
	    "transform": "translateX(0)",
	    "WebkitTransform": "translateX(0)"
	  },
	  "logo-container": {
	    "padding": 45,
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "logo": {
	    "width": 48,
	    "height": 48,
	    "marginRight": 20
	  },
	  "nav-container": {
	    "marginLeft": 45,
	    "marginRight": 45,
	    "borderTop": "1px solid #d4d4d4"
	  },
	  "nav-item": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "paddingTop": 30,
	    "paddingBottom": 30
	  },
	  "nav-img": {
	    "width": 48,
	    "height": 48,
	    "marginRight": 40
	  },
	  "line": {
	    "borderTop": "1px solid #d4d4d4"
	  }
	})
	})

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/wxc-navpage", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(4);

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          dataRole: 'navbar',
	          backgroundColor: 'black',
	          height: 88,
	          title: "",
	          titleColor: 'black',
	          rightItemSrc: '',
	          rightItemTitle: '',
	          rightItemColor: 'black',
	          leftItemSrc: '',
	          leftItemTitle: '',
	          leftItemColor: 'black',
	        }}
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "wxc-navbar",
	      "attr": {
	        "dataRole": function () {return this.dataRole},
	        "height": function () {return this.height},
	        "backgroundColor": function () {return this.backgroundColor},
	        "title": function () {return this.title},
	        "titleColor": function () {return this.titleColor},
	        "leftItemSrc": function () {return this.leftItemSrc},
	        "leftItemTitle": function () {return this.leftItemTitle},
	        "leftItemColor": function () {return this.leftItemColor},
	        "rightItemSrc": function () {return this.rightItemSrc},
	        "rightItemTitle": function () {return this.rightItemTitle},
	        "rightItemColor": function () {return this.rightItemColor}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "wrapper"
	      ],
	      "style": {
	        "marginTop": function () {return this.height}
	      },
	      "children": [
	        {
	          "type": "content"
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrapper": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "width": 750
	  }
	})
	})

/***/ },
/* 4 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/wxc-navbar", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	          dataRole: 'navbar',

	          //导航条背景色
	          backgroundColor: 'black',

	          //导航条高度
	          height: 88,

	          //导航条标题 
	          title: "",

	          //导航条标题颜色
	          titleColor: 'black',

	          //右侧按钮图片
	          rightItemSrc: '',

	          //右侧按钮标题
	          rightItemTitle: '',

	          //右侧按钮标题颜色
	          rightItemColor: 'black',

	          //左侧按钮图片
	          leftItemSrc: '',

	          //左侧按钮标题
	          leftItemTitle: '',

	          //左侧按钮颜色
	          leftItemColor: 'black',
	        }},
	        methods: {
	          onclickrightitem: function (e) {
	            this.$dispatch('naviBar.rightItem.click', {});
	          },
	          onclickleftitem: function (e) {
	            this.$dispatch('naviBar.leftItem.click', {});
	            var animation = __weex_require__('@weex-module/animation');
	            var headNav = this.$el('headNav');
	            animation.transition(headNav, {
	              styles: {
	                transform: 'translateX(0px)'
	              },
	              duration: 600,
	              timingFunction: 'ease',
	              delay: .3
	            }, function(){})
	          }
	        },
	        ready:  function (e) {
	          this.$on('moveHeader', function(e){
	            var animation = __weex_require__('@weex-module/animation');
	            var headNav = this.$el('headNav');
	            animation.transition(headNav, {
	              styles: {
	                transform: 'translateX(0)'
	              },
	              duration: 600,
	              timingFunction: 'ease',
	              delay: .3
	            }, function(){})
	          })
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "id": "headNav",
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "attr": {
	    "dataRole": function () {return this.dataRole}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "right-text"
	      ],
	      "style": {
	        "color": function () {return this.rightItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "shown": function () {return !this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "right-image"
	      ],
	      "attr": {
	        "naviItemPosition": "right",
	        "src": function () {return this.rightItemSrc}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftItemTitle}
	      },
	      "shown": function () {return !this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "left-image"
	      ],
	      "attr": {
	        "naviItemPosition": "left",
	        "src": function () {return this.leftItemSrc}
	      },
	      "shown": function () {return this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor}
	      },
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "right": 28,
	    "width": 50,
	    "height": 50
	  }
	})
	})

/***/ },
/* 5 */
/***/ function(module, exports) {

	
	exports.getBaseUrl = function(obj){
		var config = obj.$getConfig();
		var bundleUrl = config.bundleUrl;
	        bundleUrl = new String(bundleUrl);
	    var nativeBase;
	    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

	    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('weexdemo.app') > 0;
	    if (isAndroidAssets) {
	      nativeBase = 'file://assets/';
	    }
	    else if (isiOSAssets) {
	      nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
	    }
	    else {
	     //http://127.0.0.1:12580/examples/build/reading.js
	      var host = 'localhost:8080';
	      var matches = /\/\/([^\/]+?)\//.exec(obj.$getConfig().bundleUrl);
	      if (matches && matches.length >= 2) {
	        host = matches[1];
	      }
	      //nativeBase = 'http://' + host + '/weex_tmp/h5_render/';
	      // http:// + host + /dist/index.html?page=./dist/ + pagename
	      nativeBase = 'http://' + host + '/' + obj.dir + '/dist/';
	    }
	    //需要考虑下
	    var h5Base = './index.html?page=./dist/';
	    // var h5Base = './index.html?page=./' + obj.dir + '/dist/';
	    //Native端
	    var base = nativeBase;
	    //H5端
	    if (typeof window === 'object') {
	      base = h5Base;
	    }
	    return base;
	}

	exports.tabEnum = {
		'all': {'text':'全部', 'backgroundColor':'none'},
	    'good': {'text':'精华', 'backgroundColor':'#E67E22'},
	    'share': {'text':'分享', 'backgroundColor':'#1ABC9C'},
	    'ask': {'text':'问答', 'backgroundColor':'#3498DB'},
	    'job': {'text':'招聘', 'backgroundColor':'#9B59B6'},
	    'info': {'text':'消息', 'backgroundColor':'none'},
	    'about': {'text':'关于', 'backgroundColor':'none'}
	}

	exports.lastData = function(date){
		var date = new Date(date).getTime();
		var now = new Date().getTime();
		var time = parseFloat(now - date) / 1000;
	    var str ="";
	    if (null != time && "" != time) {

	        if (time > 60 && time < 3600) {
	            str = parseInt(time / 60.0) + " 分钟前";
	        }
	        else if (time >= 3600 && time < 86400) {
	            str = parseInt(time / 3600.0) + " 小时前" ;
	        }
	        else if (time >= 86400 && time < 86400*30) {
	            str = parseInt(time / 86400.0) + " 天前" ;
	        }
	        else if (time >= 86400*30 && time < 86400*365) {
	            str = parseInt(time / (86400.0*30)) + " 个月前" ;
	        } 
	        else if(time >= 86400*365){
	            str = parseInt(time / (86400.0*365)) + " 年前" ;
	        }
	        else {
	            str = parseInt(time) + " 秒前";
	        }
	    }
	    return str;
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/lists", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
		var utils = __webpack_require__(5);
		__weex_module__.exports = {
			data: function () {return {
				list: [],
				loading_display: 'hide',
				refresh_display: 'hide',
				tab: 'all',
				page: 1,
				baseURL: ''
			}},
			ready: function(){
				var storage = __weex_require__('@weex-module/storage');
				var tab = 'all';
				var _this = this;
				storage.getItem('tab', function(e){
					if(e.data  != 'undefined'){
						tab = e.data;
					}
					_this.loadData({page:1, tab:tab});
					storage.removeItem('tab', function(){});
				});
				this.$on('loadPage', function(e){
					var tab = e.detail.tab;
					if(tab !='info' && tab != 'about' && tab != this.tab){
						this.tab = tab;
						this.loadData({
							page: 1,
							tab: tab
						});
					}
				});
			},
			methods: {
				loadData: function(opt){
					var _this = this;
					var stream = __weex_require__('@weex-module/stream');
					var url = 'https://cnodejs.org/api/v1/topics?limit=20&mdrender=true&page='+opt.page+'&tab='+opt.tab;
					stream.fetch({
						method: 'GET',
						url: url,
						type: 'json'
					}, function(res){
						if(res.status == 200){
							var data = _this.filterData(res.data.data);
							if(opt.page == 1){
								_this.list = data;
							}else{
								_this.list = _this.list.concat(data);
							}
							//回调处理loading和refresh显示
							if(opt.cb){
								opt.cb();
							}
						}
					}, function(err){
						console.log(err);
						//回调处理loading和refresh显示
						if(opt.cb){
							opt.cb();
						}
					});
				},
				//使用该方法自动加载下一页数据
				loadmore: function(){
					var _this = this;
					this.loadData({
						page: ++this.page,
						tab: this.tab,
						cb: function(){
							// _this.loading_display = 'hide';
						}
					});
				},
				//暂时不适用来加载数据
				onloading: function(){
					var _this = this;
			        _this.loading_display = 'show';
			        // _this.loadmore();
			        setTimeout(function(){
			        	_this.loading_display = 'hide';
			        }, 1000);
				},
				onrefresh: function(){
					var _this = this;
					_this.refresh_display = 'show';
					_this.page = 1;
					_this.loadData({
						tab: _this.tab,
						page: 1,
						cb: function(){
							_this.refresh_display = 'hide';
						}
					});

				},
				goTop: function(){
					var dom = __weex_require__('@weex-module/dom');
					dom.scrollToElement(this.$el('first'), {offset: 10});
				},
				filterData: function(data){
					var tabEnum = utils.tabEnum;
					data.forEach(function(item){
						if(item.top){
							item.tab = '置顶';
							item.backgroundColor = '#E74C3C';
						}else if(item.good){
							item.tab = '精华';
							item.backgroundColor = '#E67E22';
						}else if(!item.tab){
							item.backgroundColor = '#e7e7e7';
							item.tab = '暂无';
						}else{
							item.backgroundColor = tabEnum[item.tab]['backgroundColor'];
							item.tab = tabEnum[item.tab]['text'];
						}
						// console.log(item.backgroundColor)
						item.create_at = utils.lastData(item.create_at);
						item.last_reply_at = utils.lastData(item.last_reply_at);
					});
					return data;
				},
				todetail: function(index){
					var id = this.list[index].id;
					var storage = __weex_require__('@weex-module/storage');
					storage.setItem('pageId', id, function(){});
					var _this = this;
					var base = utils.getBaseUrl(_this);
					var params = {
						'url': base + 'detail.js',
						'animated': 'true'
					}
					storage.setItem('pageName', 'detail', function(e){
							console.log(e)
					});
					this.$call('navigator', 'push', params, function(){});
				}
			}
		}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "list",
	      "id": "scrollList",
	      "classList": [
	        "list"
	      ],
	      "attr": {
	        "loadmoreoffset": "2000"
	      },
	      "events": {
	        "loadmore": "loadmore"
	      },
	      "children": [
	        {
	          "type": "cell",
	          "append": "tree",
	          "classList": [
	            "cell"
	          ],
	          "repeat": function () {return this.list},
	          "attr": {
	            "ids": function () {return this.id}
	          },
	          "id": function () {return this.$index==0?'first':''},
	          "events": {
	            "click": function ($event) {this.todetail(this.$index,$event)}
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "title-cont"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "tab-text"
	                  ],
	                  "style": {
	                    "background": function () {return this.backgroundColor}
	                  },
	                  "attr": {
	                    "value": function () {return this.tab}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "title"
	                  ],
	                  "attr": {
	                    "value": function () {return this.title}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "avatar-cont"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "avatar"
	                  ],
	                  "attr": {
	                    "src": function () {return this.author.avatar_url}
	                  }
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "detail"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "classList": [
	                        "author-cont"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "loginname"
	                          ],
	                          "attr": {
	                            "value": function () {return this.author.loginname}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "count"
	                          ],
	                          "attr": {
	                            "value": function () {return (this.reply_count) + '/' + (this.visit_count)}
	                          }
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "classList": [
	                        "time-cont"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "classList": [
	                            "create"
	                          ],
	                          "attr": {
	                            "value": function () {return this.create_at}
	                          }
	                        },
	                        {
	                          "type": "text",
	                          "classList": [
	                            "last-reply"
	                          ],
	                          "attr": {
	                            "value": function () {return this.last_reply_at}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "refresh",
	          "classList": [
	            "refresh-view"
	          ],
	          "events": {
	            "refresh": "onrefresh"
	          },
	          "attr": {
	            "display": function () {return this.refresh_display}
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "loadtxt"
	              ],
	              "shown": function () {return this.refresh_display=='hide'},
	              "attr": {
	                "value": "刷新一下"
	              }
	            },
	            {
	              "type": "loading-indicator",
	              "classList": [
	                "loadic"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "loading",
	          "classList": [
	            "loading-view"
	          ],
	          "attr": {
	            "display": function () {return this.loading_display}
	          },
	          "events": {
	            "loading": "onloading"
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "loadtxt"
	              ],
	              "shown": function () {return (this.loading_display==='hide')},
	              "attr": {
	                "value": "无更多数据"
	              }
	            },
	            {
	              "type": "loading-indicator",
	              "classList": [
	                "loadic"
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "totop"
	      ],
	      "events": {
	        "click": "goTop"
	      },
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "totop-img"
	          ],
	          "attr": {
	            "src": "img/top.png"
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "container": {
	    "paddingTop": 88
	  },
	  "list": {
	    "height": 1246
	  },
	  "cell": {
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderBottom": "1px solid #d4d4d4"
	  },
	  "title-cont": {
	    "flexDirection": "row",
	    "marginBottom": 10,
	    "alignItems": "center"
	  },
	  "tab-text": {
	    "width": 80,
	    "padding": 5,
	    "marginRight": 20,
	    "borderRadius": 5,
	    "color": "#ffffff",
	    "textAlign": "center"
	  },
	  "title": {
	    "width": 590,
	    "lines": 1,
	    "textOverflow": "ellipsis"
	  },
	  "avatar-cont": {
	    "flexDirection": "row"
	  },
	  "avatar": {
	    "width": 80,
	    "height": 80,
	    "borderRadius": 40,
	    "marginRight": 20
	  },
	  "author-cont": {
	    "width": 590,
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  "time-cont": {
	    "width": 590,
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  "loginname": {
	    "fontSize": 28
	  },
	  "count": {
	    "fontSize": 28
	  },
	  "create": {
	    "fontSize": 28
	  },
	  "last-reply": {
	    "fontSize": 28
	  },
	  "totop": {
	    "position": "fixed",
	    "right": 30,
	    "bottom": 200,
	    "width": 100,
	    "height": 100,
	    "zIndex": 6
	  },
	  "totop-img": {
	    "width": 100,
	    "height": 100,
	    "borderRadius": 50,
	    "border": "2px solid #11cd6e",
	    "backgroundColor": "#eeeeee"
	  },
	  "refresh-view": {
	    "height": 120,
	    "width": 750,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "backgroundColor": "rgba(0,0,0,0)"
	  },
	  "loading-view": {
	    "height": 120,
	    "width": 750,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "backgroundColor": "rgba(0,0,0,0)"
	  },
	  "loadic": {
	    "width": 60,
	    "height": 60,
	    "color": "#3bafda"
	  },
	  "loadtxt": {
	    "fontSize": 26,
	    "color": "#3bafda",
	    "marginBottom": 5
	  }
	})
	})

/***/ }
/******/ ]);