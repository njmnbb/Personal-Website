$(document).ready( function() {

    //  Changing fade in/out properties //
    //  depending on window size        //

    // If browser is > 1000px, fade in/out
    if($(window).width() > 1000) {
        $("#headerBox img").addClass("hidden").fadeIn(1700);
        $("#headerBox ul").addClass("hidden").delay(1000).fadeIn(1700);
        $("#contentContainer").addClass("hidden").delay(2000).fadeIn(1700);
    }
    // Otherwise, remove the .hidden class
    else {
        $("#headerBox img").removeClass("hidden");
        $("#headerBox ul").removeClass("hidden");
        $("#contentContainer").removeClass("hidden");
    }

    // $("#headerBox a").click(function() {
    //     var tabName = $(this).attr('id');
    //     $("#information").fadeOut(500);
    //     $("#information").load("text/" + tabName + ".txt");

    // });
    //  Fading in/out each tab and  //
    //  loading its content         //

    var activeWindow = "blah";

    //When a tab is clicked, this function runs
    $("#headerBox a").click(function() {

        //Create a variable for the name of the clicked tab
        var tabName = $(this).attr('id');

        //If the clicked tab is already active, ignore this function
        if (activeWindow != tabName) {

            //Remove the .active class from all tabs
            $("#headerBox a").removeClass("active");

            //Give the active tab the .active class for visual effect
            $(this).addClass("active");

            //Change activeWindow to tabName for next tab click, then change the <title> appropriately
            activeWindow = tabName;
            document.title = "Nick Martini - " + tabName.charAt(0).toUpperCase() + tabName.slice(1);

            //Fade out information, load new content, then fade back in
            $("#information").fadeOut(500);
            setTimeout(function() {
                $("#information").load("text/" + tabName + ".txt");
            }, 500);
            $(document).ajaxComplete(function() {
                $("#information").fadeIn(500);
            });
        }
    });           
}); 