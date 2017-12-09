$(document).ready(function(){
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if ( scroll > $(window).height() ) {
      $('#learning .section-header').addClass('fixed-lg');
    } else if ( scroll < $(window).height() ) {
      $('#learning .section-header').removeClass('fixed-lg');
    }
    if ( scroll > ($(window).height() + $('#learning').height()) ) {
      $('#accomplishment .section-header').addClass('fixed-lg');
    } else if ( scroll < ($(window).height() + $('#learning').height()) ) {
      $('#accomplishment .section-header').removeClass('fixed-lg');
    }
    if ( scroll > ($(window).height() + $('#learning').height() + $('#accomplishment').height()) ) {
      $('#contribution .section-header').addClass('fixed-lg');
    } else if ( scroll < ($(window).height() + $('#learning').height() + $('#accomplishment').height()) ) {
      $('#contribution .section-header').removeClass('fixed-lg');
    }
  });
});