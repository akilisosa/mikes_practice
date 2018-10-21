var CoppeWeb = window.CoppeWeb || {};
CoppeWeb.ui = (function($){
	var ui = {
		init : function(){
		},
		hideDialog : function(){
			$(".dialog").fadeOut(300);
		}
	};
	return ui;
})(jQuery);