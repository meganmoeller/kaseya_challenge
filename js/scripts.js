
/* lazy loading of services */

//[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
//	img.setAttribute('src', img.getAttribute('data-src'));
//	img.onload = function() {
//		img.removeAttribute('data-src');
//	};
//});


/* Resonsive Nav Bar */

function ToggleNavBarResponsive() {
    var nav_links = $(".nav-links");
    if(nav_links.css('display')!="block")
        nav_links.css('display', "block");
    else
        nav_links.css('display', "none");
}

  /* Carousel */
(function($) {
        var carousel_items = $('.carousel li');
        
        //hide all but the first one
        for (i = 0; i < carousel_items.length; i++)
        {
            if(i==0)
                continue;
            $(carousel_items[i]).css("display", "none");
        }
        var current_carousel_item=0;
        
        setInterval(function(){
            
            //for swapping them out
           /* current_carousel_item++;
            if(current_carousel_item>carousel_items.length-1)
                    current_carousel_item=0;
            
            for (i = 0; i < carousel_items.length; i++)
            {
                if(i==current_carousel_item)
                    $(carousel_items[i]).css("display", "block");
                else
                    $(carousel_items[i]).css("display", "none");
            }*/
            
            //for fading out nicely, but doesn't work on IE
            $(carousel_items[current_carousel_item]).fadeOut('slow', function()
            {
                current_carousel_item++;
                if(current_carousel_item>carousel_items.length-1)
                    current_carousel_item=0;

                $(carousel_items[current_carousel_item]).fadeIn();
            });

            
            
        }, 4000);
    
    
    /* lazy loading of services */
   var images =  $('img[data-src]');
    for (i = 0; i < images.length; i++)
    {
        var image = images[i];
        image.setAttribute('src', image.getAttribute('data-src'));
        image.onload = function() {
        this.removeAttribute('data-src');
        };
    }

    /*[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function() {
            img.removeAttribute('data-src');
        };
    });*/

})(jQuery);  

//need to show the menu bar if resized ---broken somehow, code below won't work
window.onresize = function(event) 
{
    var icon_responsive = $(".icon_responsive");
     var nav_links = $(".nav-links");

    if(icon_responsive.css('display')=="none")            
        nav_links.css('display', "block");            
    else            
        nav_links.css('display', "none");

}

        
