$(document).ready(function() {
    var addItem = function() {
        var toAdd = $('input[name=checkListItem]').val();
        if(toAdd.length != 0){
        $('.list').append('<li class="item">' + toAdd + '</li>');
        $('.item').sortable();
        status();
        $('input').val("");
        }
        else {
            alert("Blanks are not valid entries!")
        }
    };
    $('#add').click(function() {
        addItem();
    });
    $('input').keypress(function(e) {
        if (e.keyCode == '13') {
            e.preventDefault();
           addItem();
        }
    });
    $('#clearAll').mousedown(function() {
         $('.item').remove();
         status(); 
    });
    $('#clearChecked').mousedown(function() {
         $('.checked').remove();
         status();
    });
    $(document).on('click', '.item', function() {
        $(this).toggleClass('checked');
         status();
    });
    $(document).on('dblclick', '.item', function() {
        $(this).remove();
         status();
    });
    var status = function() {
        total = $('.item').length;
        console.log(total);
        done = $('.checked').length;
        console.log(done);
        $('span').html('<span>' + (total-done) + '/' + total + '</span>');
    };
    var verify = function() {
        $('toAdd').trim().length
    }
    $('ol').sortable();
});