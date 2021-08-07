
    $(".toggle").on("click", function() {
        if ($(".item").hasClass("active")) {
            $(".item").removeClass("active");
            $(this).find("a").html("<img src='../ASSETS/icons/Column Icon.png'>");
        } else {
            $(".item").addClass("active");
            $(this).find("a").html("<img src='../ASSETS/icons/Column Icon.png'>");
        }
    });