$(function(){
    var lastScrollTop = 0, delta = 5;
    $('.foreground-view').scroll(function(event){
       var st = $(this).scrollTop();
       
       if(Math.abs(lastScrollTop - st) <= delta)
          return;
       
       if (st > lastScrollTop){
           $('.navbar').addClass('scroll-up');
       } else {
          $('.navbar').removeClass('scroll-up');
       }
       lastScrollTop = st;
    });
});