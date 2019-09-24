var duration = 600; //'slow'
$(".item").each(function(index) {
    $(this).delay(duration * index).fadeIn(duration);
});