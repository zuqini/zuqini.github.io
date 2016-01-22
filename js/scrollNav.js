$(function(){
    var lastScrollTop = 0, delta = 5;
    $('.foreground-view').scroll(function(event){
       var st = $(this).scrollTop();
       
       if(Math.abs(lastScrollTop - st) <= delta)
          return;
       
       if (st > lastScrollTop){
           $('.navbar').addClass('scroll-up');
           console.log('scroll down');
       } else {
          $('.navbar').removeClass('scroll-up');
          console.log('scroll up');
       }
       lastScrollTop = st;
    });
});