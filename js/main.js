for(var i = 0; i < localStorage.length; i++){
    $('ul').append(`<li><span>x</span>${localStorage.getItem(localStorage.key(i))}</li>`);
}

// Remove existing items
$('ul').on('click','li', function(){
    $(this).remove();
});

$('button').on('click', function(evt){
    let input = $('input').val();
    $('ul').append(`<li><span>x</span>${input}</li>`);
    localStorage.setItem(input, input);
    //console.log(localStorage);
    //$(input).val('');
});