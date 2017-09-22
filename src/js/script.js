//::: SCRIPT FOR DROP DOWN ::: //   
$('select.dropdown')
  .dropdown()
;
//::: SCRIPT FOR DROP DOWN ::: //   

//::: SCRIPT FOR CALENDER ::: //   

$('#start').dcalendar(); 
$('#end').dcalendar();//creates the calendar



$('#calender').click(function(){                                                                   

    $(".adn--layout__header__right__calender").toggle();     
});


 $(document).ready(function(){
    $('#start').dcalendarpicker({format: 'mm-dd-yyy'}).on('datechanged', function(e){
       $('#startDate').val(e.date);
       $('.adn--layout__header__right__calender__startdate').show();
    });
  });

   $(document).ready(function(){
    $('#end').dcalendarpicker({format: 'mm-dd-yyy'}).on('datechanged', function(e){
       $('#endDate').val(e.date);
       $('.adn--layout__header__right__calender__startdate').show();
    });
  });

//::: SCRIPT FOR CALENDER ::: //   


//::: SCRIPT FOR FILTER ::: //   

$('#filter').click(function(){                                                                   

    $(".adn--layout__header__right__filter-card").toggle();
    if($('#calender').css('display') == 'none')
    $('.adn--layout__header__right__filter-card').addClass('adn--layout__header__right__calender-edit');

})

//::: SCRIPT FOR FILTER ::: //   

//::: SCRIPT FOR HAMBURGER ::: //   

$('.adn--layout__header__menu__button').click(function(){                                                                   

    $(".adn--layout__header__menu__links-wrapper").toggle();   

});

//::: SCRIPT FOR HAMBURGER ::: //   


//::: SCRIPT FOR SEARCH MENU ::://


$('.adn--layout__header__right__icon.flaticon-tool-1').click(function(){                                                                   
  $('.adn--layout__header__right__search').trigger( "focus" );     
});


//::: SCRIPT FOR SEARCH MENU :://



 
