
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