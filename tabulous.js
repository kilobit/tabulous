// tabulous.js //

var tabulous = (function($) {

    var defaults = {
	selected_class: "selected",
	tabrow_class: "tabrow",
	tab_class: "tab",
	tabcontent_class: "tabcontent"
    };

    var options = {};

    function init(options) {

	this.options = $.extend({}, defaults, options);

    }


    $.fn.tabulize = function() {
	return this.each(function() {

	    $("li.tab").click(function(e) {
                e.preventDefault();
                $("li.tab").removeClass("selected");
                $(this).addClass("selected");
		$("li.tabcontent").removeClass("selected");
		$('.' + $(this).attr('id') + '_content').addClass("selected");
            });

	});
    }


    return {init: init,
	    options: options};
    
})(jQuery);

$(document).ready(function() {

    tabulous.init();

    console.log("Tabulizing...");
    $(".tab").tabulize();
    console.log("Done Tabulizing.");
    
});
