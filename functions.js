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

    var activeWindow = "blah";

    //When a tab is clicked, this function runs
    $("#headerBox a").click(function(e) {

        //Prevents default href behavior from reloading page
        e.preventDefault();

        //Create a variable for the name of the clicked tab
        var tabName = $(this).attr('href').replace(/\.\w+$/, "");

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
                $("#information").load(tabName + ".txt");
            }, 500);
            $(document).ajaxComplete(function() {
                $("#information").fadeIn(500);
            });

            //Adds the selected tab to the browser's history
            history.pushState(null, null, tabName);
        }
    });

    //Reloads appropriate content when using back/forward buttons
    $(window).on("popstate", function(){
        //Reload previous text file in the #information container
        $("#information").load(location.pathname.replace("/", "") + ".txt");

        //Change title of site to relfect the change
        document.title = "Nick Martini";

        //Change active tab to reflect the change
        $("#headerBox a").removeClass("active");
        $("#headerBox a[href = '" + location.pathname.replace("/", "") + ".txt" + "']").addClass("active");
    });
}); 