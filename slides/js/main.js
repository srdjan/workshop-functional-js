$(function() {
    // Deck initialization
    $.deck('.slide');

    $('#style-themes').change(function() {
        $('#style-theme-link').attr('href', $(this).val());
    });

    $('#transition-themes').change(function() {
        $('#transition-theme-link').attr('href', $(this).val());
    });
		
		show();
});

function show() {
    var clock = new Date();
    var hours = clock.getHours();
    var minutes = clock.getMinutes();
    var seconds = clock.getSeconds();
    if (minutes <= 9) {
        minutes = "0" + minutes;
    }
    if (seconds <= 9) {
        seconds = "0" + seconds;
    }
    document.Tick.Clock.value = hours + ":" + minutes + ":" + seconds + ' ';
    setTimeout("show()", 1000);
}
