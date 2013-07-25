;(function($,window){
  var methods,opt,option_default;
  var data_i ='indexing-multiple';
  option_default = {
    selector_cheked : "input[type='checkbox]",
    event_click: 'click',
    before_click: function(element){},
    after_click: function(element){}
    
  };

  methods = {
    "init" : function(options){
      opt = jQuery.extends({},options_default,options)       
      return this.each(function(index){
       var $this = $(this);
       $this.data(data_i,index);
       opt[index] = {'last-clicked': undefined};
       $this.multiselect('_events');
      });
    },
    '_events' : function(){
      opt.before_click();
      this.on(opt['event_click'],opt['selector_checked'],function(){
        
        var parent = $(this).parents('[data-'+data_i+']');
        index = parent.data(data_i);
        last_clicked = opt[index]['last-clicked'];
      opt.after_click();
      });
    }
  }
  $.fn.multiselect = function( method ) {  
    if ( methods[method] ) {  
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {  
      return methods.init.apply( this, arguments );  
    } else {  
      $.error( "Something was wrong. Method called " + method );
    }
  }
})(jQuery,window,undefined);
  
