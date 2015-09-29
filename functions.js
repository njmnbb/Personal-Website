$(document).ready( function() {

    //  Changing fade in/out properties //
    //  depending on window size        //

    // If browser is > 1000px, fade in/out
    if($(window).width() > 1000) {
        $("#headerBox img").fadeIn(1700);
        $("#headerBox ul").delay(1000).fadeIn(1700);
        $("#contentContainer").delay(2000).fadeIn(1700);
    }
    // Otherwise, remove the .hidden class
    else {
        $("#headerBox img").removeClass("hidden");
        $("#headerBox ul").removeClass("hidden");
        $("#contentContainer").removeClass("hidden");
    }

    //  Fading in/out each tab and  //
    //  loading its content         //

    var activeWindow = "blah";

    //When a tab is clicked, this function runs
    $("#headerBox a").click(function() {

        //Create a variable for the name of the clicked tab
        var tabName = $(this).attr('id');

        //If the clicked tab is already active, ignore this function
        if (activeWindow != tabName) {

            //Change activeWindow to tabName for next tab click, then change the <title> appropriately
            activeWindow = tabName;
            document.title = "Nick Martini - " + tabName.charAt(0).toUpperCase() + tabName.slice(1);

            //Fade out information, load new content, then fade back in
            $("#information").fadeOut(500);
            setTimeout(function() {
                $("#information").load("text/" + tabName + ".txt");
            }, 500);
            $("#information").delay(200).fadeIn(500);
        }
    });           
}); 