jQuery(document).ready(function($){

//  include jBox
    new jBox('Modal', {
        attach: '._r-main-logo',
        width: 'auto',
        title: 'The Title',
        overlay: false,
        createOnInit: true,
        content: 'Penatibus cras odio. Mauris magnis tincidunt. Nullam imperdiet lacinia. Odio a luctus egestas egestas a pretium neque justo consectetuer libero tincidunt tellus eu enim. At proin aliquam aenean ut posuere luctus habitasse mollis porttitor lectus sodales mauris ac aliquam ac vulputate gravida et viverra sodales. Elit libero eleifend lacus dolor vehicula. Tempus sunt in ante platea ac. Accumsan integer porttitor ut proin porta non dictum imperdiet sollicitudin libero eget viverra ut sed. Velit orci ut. Amet vel amet. Auctor arcu dui. Sem ut vel in iste ut. Molestie vel per diam posuere at. Orci id praesent. Donec mattis penatibus. Amet ullamcorper penatibus. Mi nisl a elit suspendisse sed duis nec suscipit. Malesuada pharetra scelerisque viverra eget felis. Sollicitudin ipsum risus id suspendisse mus leo eu urna. Massa magna arcu. Donec sit nibh. Nec erat mauris convallis leo tempus id quis pulvinar. Diam amet tortor. Eros con mi. Mauris provident luctus. Pulvinar egestas est. Ad ad interdum ut enim id. Habitasse vehicula blandit. Pellentesque tempus eu pellentesque sed nullam bibendum irure vestibulum erat elit turpis nec leo mollis. Mus tortor dolor.',
        draggable: '#dragElement',
        repositionOnOpen: false,
        repositionOnContent: false,
        position: {
            y: 56
        }
    });

//  show mobile menu
    $("._r-mobile-menu").click(function(){
        $("ul").addClass("_r-show-mobile");
        $("._r-menu-item").addClass("animated slideInRight");
    });

//  change button
    $("._r-mobile-menu").click(function(){
        $("._r-mobile-menu").hide();
    });
    $("._r-mobile-menu").click(function(){
        $("._r-mobile-menu-cross").show();
    });


    $("._r-mobile-menu-cross").click(function(){
        $("._r-mobile-menu-cross").hide();
    });
    $("._r-mobile-menu-cross").click(function(){
        $("._r-mobile-menu").show();
    });

//  remove mobile menu
    $("._r-mobile-menu-cross").click(function(){
        $("ul").removeClass("_r-show-mobile");
    });




        //  click on logo and remove mobile menu also icon change
        $("._r-main-logo").click(function(){

            $("ul").removeClass("_r-show-mobile");
        });

        $("._r-main-logo").click(function(){
            if($(window).width() < 768){
            $("._r-mobile-menu-cross").hide();}
        });
        $("._r-main-logo").click(function(){
            if($(window).width() < 768){
            $("._r-mobile-menu").show();}
        });

});