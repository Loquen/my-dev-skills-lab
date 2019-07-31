
// Remove existing items
$('ul li').on('click', function(){
    $(this).remove();
});

$('button').on('click', function(evt){
    //evt.preventDefault();
    let input = $('input').val();
    $('ul').append(`<br><li><span>x</span>${input}<li>`);
});