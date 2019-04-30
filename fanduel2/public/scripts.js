$(function() {
   $('[data-role="expandable-content"]').hide();
   
   $('[data-role="expandable-heading"]').click(function() {
     $(this).next('[data-role="expandable-content"]').slideToggle(250),
     $(this).toggleClass('is-expanded');
   });
});
