jQuery.jsbyz =  {
    /*****************************
    *  通知插件,显示操作结果。
    * 参数:{content:"text"，style:"default | success |warning | error", 
    * position :"top |left |right | bottom | right-bottom",
    * timeout : seconds(int), 
    ******************************/
    notify: {
        container:$("<div>"),
        //创建一个容器
        create: function() {
            var option = arguments[0];
            if(!option) {
                option = {
                    width:"60%",
                    top:"30px"
                }
            }
            var showWidth = option.width ? option.width : "%60";
            var pTop = option.top ? option.top : "30px";

            this.container.addClass("jsbyz-notify-container");
            this.container.css({
                width:showWidth,
                top:pTop
                });
            $("body").append(this.container);
            return this;
        },
        show:function() {
            if(!arguments[0]) {
                return;
            }
                var option = arguments[0];
                var message = option.message ? option.message : "write your mesage here";
                var style = option.style ? option.style:"default";
                var textColor = option.textColor ? option.textColor : "#000";
                var timeout = option.timeout   != undefined ? option.timeout : 10;
                var item = $("<div>");
                var close = $("<a href='#' onclick='this.parentNode.remove()'>x</a>");
                item.addClass('jsbyz-notify-'+style);
                item.css({
                    color:textColor
                });
                item.html(message);
                this.container.append(item);
                item.append(close);
                item.slideDown(300);
                 if(timeout != 0 ) {
                 setTimeout(function() {
                            item.slideUp(300,function(){item.remove();});
                        },timeout*1000);       
                }           
            }
    }
}