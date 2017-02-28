$(function() {
  var $input = $("[title]");
  var titles = []; //  Тайтлы
  for (var i = 0; i < $input.length; i++) {
    titles.push($($input[i]).attr('title'));
  }
  $input.mouseenter(function() {
    $('.tooltip').remove();
    $(this).after('<div class="tooltip">' + $(this).attr('title') + '</div>');
    $input.removeAttr('title');
  });
  $input.mouseout(function() {
    $('.tooltip').remove();
    for (var i = 0; i < $input.length; i++) {
      $($input[i]).attr('title',titles[i]);
    }
  });
  $('label + input').click(function() {
    $('.tooltip').remove();
    $(this).after('<div class="tooltip">' + $(this).attr('title') + '</div>');
  });
  var $btn = $('button');
  $btn.click(function() {
    $('.tooltip').remove();
    $input.after('<div class="tooltip"></div>');
    for (var i = 0; i < $input.length; i++) {
      $num = $('.tooltip')[i];
      $($num).text($($input[i]).attr('title'));
    }
  });
});
