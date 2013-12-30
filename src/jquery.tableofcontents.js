(function ($) {
    $.fn.tableofcontents = function(options) {
        var settings = $.extend({
            id: 'container' // target element id
        }, options);

        options = $.extend(settings, options);
        var target = $(options.id).append("<ul></ul>");
        var prev_level = 0;

        var getLevel = function(tagname) {
            switch(tagname) {
                case 'H1': return 1;
                case 'H2': return 2;
                case 'H3': return 3;
                case 'H4': return 4;
                case 'H5': return 5;
                case 'H6': return 6;
            }

            return 0;
        };

        var getUniqId = function() {
            return "__tocid-" + Math.floor(Math.random() * 100000);
        };

        this.find('h1, h2, h3, h4, h5, h6').each(function() {
            var current_level = getLevel($(this)[0].tagName);
            if(current_level > prev_level) {
                var tmp = $("<ul></ul>").data("level", current_level);
                target = target.append(tmp);
                target = tmp;
            }else {
                while(target.parent().length && current_level <= target.parent().data("level")) {
                    target = target.parent();
                }
            }

            var txt = $(this).html();
            var txtId = $(this).attr("id");
            if(!!!txtId) {
                txtId = getUniqId();
                $(this).attr({ "id": txtId });
            }

            var alink = $("<a></a>").text(txt).attr({ "href": "#" + txtId });

            target.append($("<li></li>").append(alink));
            prev_level = current_level;
        });
        return this;
    };
}(jQuery));