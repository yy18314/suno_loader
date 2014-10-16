/**
 * Created by yuyou on 14-10-16.
 */

var Resource = function(url,type){
    this.type = type?type:"image";
    this.url = url;
}
var Loader = function(_config){
    this.loading = document.getElementById(_config.loading);    //loading
    this.loadList = new Array();
    this.total = 0;
}
Loader.prototype = {
    queue:function(successCallback){
        //执行列队操作
        this.total = this.loadList.length;
        for(var i = 0 ; i < this.total ; i ++){
            var _res = this.loadList[i];
            this.loadRes(_res);
        }
    },
    add:function(res){
        //增加列队
        this.loadList.push(res);
    },
    loadImage: function (url) {
        //加载一张图片
        var image = new Image();
        var self = this;
        image.src = url;
        image.addEventListener('load',function(e){
            //图片加载成功
        });
        image.addEventListener('error',function(e){
            //图片加载失败
        });
    },
    loadScript: function (url){
        //加载JavaScript
    },
    loadCSS: function(url){
        //加载CSS样式表
    },
    loadRes:function(res){
        switch(res.type){
            case "image":this.loadImage(res.url);break;
            case "script":this.loadScript(res.url);break;
            case "css":this.loadCSS(res.url);break;
            default:break;
        }
    },
    loadSuccess:function(){
        //所有资源加载完毕
    }
}