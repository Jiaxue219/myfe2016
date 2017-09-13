 Dialog.prototype.open = function(options){
        $.extend(this.defaultSettings, options);
        this.item.html(this.defaultSettings.title);
        this.title.append(this.item).append(this.close);
        this.content.css({
            height : this.defaultSettings.height - 30
        }).load(this.defaultSettings.content);
        this.box.append(this.title).append(this.content).css({
            width: this.defaultSettings.width,
            height : this.defaultSettings.height
        });
        this.container.append(this.mask).append(this.box);
        $(document.body).append(this.container);

        var that = this;
        this.close.on("click", function(){
            that.closeDialog();
        });
    };
    Dialog.prototype.closeDialog = function(){
        this.container.remove();
    };
    return Dialog;