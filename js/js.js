  $(function() {
    var $tabs = $('ul li a');
    $tabs.on('click', function() {
      $display = $(this).attr('href');
      var $all = $('[id*="tabs-"]');
      var $active = $($display);
      $tabs.css({background: '#001942',color: '#fff'});
      $(this).css({background: '#d0daea',color: '#001942'});
      $all.hide();
      $active.show();
      $tabs.removeAttr('href');
    });

    $tabs.on('mouseup', function(){
      for (var i = 0; i < 3; i++) {
        $($tabs[i]).attr('href', '#tabs-'+(i+1));
      }
      $tabs.css({cursor: 'pointer'});
    });
  });
