!function(e,i,t){function l(i,t){this.element=e(i),this.settings=e.extend({},a,t),this._defaults=a,this._name=o,this.init()}var o="metisMenu",a={toggle:!0,doubleTapToGo:!1};l.prototype={init:function(){var i=this.element,l=this.settings.toggle,a=this;this.isIE()<=9?(i.find("li.active").has("ul").children("ul").collapse("show"),i.find("li").not(".active").has("ul").children("ul").collapse("hide")):(i.find("li.active").has("ul").children("ul").addClass("collapse in"),i.find("li").not(".active").has("ul").children("ul").addClass("collapse")),a.settings.doubleTapToGo&&i.find("li.active").has("ul").children("a").addClass("doubleTapToGo"),i.find("li").has("ul").children("a").on("click."+o,function(i){return i.preventDefault(),a.settings.doubleTapToGo&&a.doubleTapToGo(e(this))&&"#"!==e(this).attr("href")&&""!==e(this).attr("href")?(i.stopPropagation(),void(t.location=e(this).attr("href"))):(e(this).parent("li").toggleClass("active").children("ul").collapse("toggle"),void(l&&e(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide")))})},isIE:function(){for(var e,i=3,l=t.createElement("div"),o=l.getElementsByTagName("i");l.innerHTML="<!--[if gt IE "+ ++i+"]><i></i><![endif]-->",o[0];)return i>4?i:e},doubleTapToGo:function(e){var i=this.element;return e.hasClass("doubleTapToGo")?(e.removeClass("doubleTapToGo"),!0):e.parent().children("ul").length?(i.find(".doubleTapToGo").removeClass("doubleTapToGo"),e.addClass("doubleTapToGo"),!1):void 0},remove:function(){this.element.off("."+o),this.element.removeData(o)}},e.fn[o]=function(i){return this.each(function(){var t=e(this);t.data(o)&&t.data(o).remove(),t.data(o,new l(this,i))}),this}}(jQuery,window,document);