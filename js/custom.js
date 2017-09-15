$("#massage")
    .mouseenter(function () {
        $(this).animate({
            opacity: 1,
            right: '75%'
        }, 300, function () {
            $('#champagne').css('right', '40%');
            $('#fireworks').css('right', '61%');
        });

        $("#champagne").animate({
            opacity: 0
        }, 100);
        $("#fireworks").animate({
            opacity: 0
        }, 100);
    });

$("#champagne")
    .mouseenter(function () {
        $(this).animate({
            opacity: 1,
            right: '75%'
        }, 300, function () {
            $('#massage').css('right', '20%');
            $('#fireworks').css('right', '61%');
        });

        $("#massage").animate({
            opacity: 0
        }, 100);
        $("#fireworks").animate({
            opacity: 0
        }, 100);
    });


$("#fireworks")
    .mouseenter(function () {
        $(this).animate({
            opacity: 1,
            right: '75%'
        }, 300, function () {
            $('#champagne').css('right', '40%');
            $('#massage').css('right', '20%');
        });

        $("#champagne").animate({
            opacity: 0
        }, 100);
        $("#massage").animate({
            opacity: 0
        }, 100);
    });

$('#change-text-location').click(function(e){
    e.preventDefault();

    $("#test-1").hide(300, function() {
        $("#test-2").show(300);
    });

    return false;
});

$('#change-text-location-2').click(function(e){
    e.preventDefault();

    $("#test-2").hide(300, function() {
        $("#test-1").show(300);
    });

    return false;
});