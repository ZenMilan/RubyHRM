(function(){jQuery(function(){var t;return t=$("#contact_detail_state").html(),console.log(t),$("#contact_detail_country").change(function(){var c,e;return c=$("#contact_detail_country :selected").text(),e=$(t).filter("optgroup[label='"+c+"']").html(),e?$("#contact_detail_state").html(e):void 0})})}).call(this);