require.config({
    paths : {
        "jquery" : "jquery-1.12.4"
    }
});
define("jquery", function(){
    function Dialog(){
        this.defaultSettings = {
            width : 400,
            header : 300,
            title : "µ¯³ö²ã",
            content : "content"
        };
        this.container = $('<div class="dialog-container"></div>');
        this.mask = $('<div class="dialog-mask"></div>');
        this.box = $('<div class="dialog-box"></div>');
        this.header = $('<div class="dialog-header"></div>');
        this.title = $('<div class="dialog-title"></div>');
        this.close = $('<div class="dialog-close">[X]</div>');
        this.content = $('<div class="dialog-content"></div>');
        Dialog.prototype.open = function(options){
            $.extend(this.defaultSettings, options);
            this.title.html(this.defaultSettings.title);
            this.header.append(this.title).append(this.close);
            this.content.css({
                height : this.defaultSettings.height - 30
            })
        };
    }
});







