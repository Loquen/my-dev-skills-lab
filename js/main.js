
// Remove existing items
$('ul').on('click','li', function(){
    //console.log(evt);
    $(this).remove();
});

$('button').on('click', function(evt){
    //evt.preventDefault();
    let input = $('input').val();
    $('ul').append(`<br><li><span>x</span>${input}<li>`);
    $(input).val('');
});