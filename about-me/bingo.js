$(document).ready(function() {
    // Set up draggable behavior for each circle
    $('.draggable-circle').draggable({
      drag: function(event, ui) {
        var draggable = $(this);
        var offset = draggable.offset();
        var x = offset.left;
        var y = offset.top;
        var minX = 0;
        var minY = 0;
        var maxX = $(window).width() - draggable.outerWidth();
        var maxY = $(window).height() - draggable.outerHeight();
        
        // Constrain the x-axis movement within the visible area
        if (x < minX) {
          draggable.css('left', minX);
        } else if (x > maxX) {
          draggable.css('left', maxX);
        }
        
        // Constrain the y-axis movement within the visible area
        if (y < minY) {
          draggable.css('top', minY);
        } else if (y > maxY) {
          draggable.css('top', maxY);
        }
      }
    });
  
    // Set initial positions for each circle
    $('#circle1').css({ left: '3%', top: '80%' });
    $('#circle2').css({ left: '5%', top: '70%' });
    $('#circle3').css({ left: '10%', top: '50%' });
    $('#circle4').css({ left: '20%', top: '78%' });
    $('#circle5').css({ left: '38%', top: '57%' });
    $('#circle6').css({ left: '24%', top: '60%' });
    $('#circle7').css({ left: '30%', top: '44%' });
    $('#circle8').css({ left: '32%', top: '38%' });
    $('#circle9').css({ left: '4%', top: '47%' });
    $('#circle10').css({ left: '8%', top: '35%' });
    $('#circle11').css({ left: '28%', top: '68%' });
    $('#circle12').css({ left: '14%', top: '69%' });
    $('#circle13').css({ left: '21%', top: '42%' });
    $('#circle14').css({ left: '35%', top: '81%' });
    $('#circle15').css({ left: '37%', top: '36%' });
    $('#circle16').css({ left: '18%', top: '53%' });
  });
  