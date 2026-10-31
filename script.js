
$(document).ready(function () {
    console.log("jQuery is ready!");

    // Task 1
    $("h1").css("letter-spacing", "-.065em");
    $("#greeting").css("transition", "color .2s");
    $(".intro").css("line-height", "1.8");

    $("#updateGreeting").click(function () {
        $("#greeting").text("Welcome to My Portfolio!");
        $("#greeting").css("color", "#c65d2e");
    });

    $("#lightThemeBtn").click(function () {
        $("body").removeClass("dark-theme").addClass("light-theme");
    });

    $("#darkThemeBtn").click(function () {
        $("body").removeClass("light-theme").addClass("dark-theme");
    });

    // Task 2
    $("#hideStatus").click(function () {
        $("#statusAndFacts").hide();
    });

    $("#showStatus").click(function () {
        $("#statusAndFacts").show();
    });

    $("#toggleStatus").click(function () {
        $("#statusAndFacts").toggle();
    });

    // Task 3
    $("#fadeIn").click(function () {
        $(".gallery-image").fadeIn();
    });

    $("#fadeOut").click(function () {
        $(".gallery-image").fadeOut();
    });

    $("#fadeToggle").click(function () {
        $(".gallery-image").fadeToggle();
    });

    // Task 4
    $(".accordion-title").click(function () {
        var panel = $(this).attr("data-panel");

        if ($(panel).is(":visible")) {
            $(panel).slideUp();
            $(this).removeClass("open");
        } else {
            $(panel).slideDown();
            $(this).addClass("open");
        }
    });

    $("#toggleAllPanels").click(function () {
        $(".accordion-content").slideToggle();
    });

    // Task 5
    $("#addSkill").click(function () {
        var skill = $("#newSkill").val();

        if (skill === "") {
            $("#skillMessage").text("Please enter a skill first.");
        } else {
            $("#skillList").append($("<li>").text(skill));
            $("#newSkill").val("");
            $("#skillMessage").text("Skill added to the end of the list.");
        }
    });

    $("#prependSkill").click(function () {
        var skill = $("#newSkill").val();

        if (skill === "") {
            $("#skillMessage").text("Please enter a skill first.");
        } else {
            $("#skillList").prepend($("<li>").text(skill));
            $("#newSkill").val("");
            $("#skillMessage").text("Skill added to the beginning of the list.");
        }
    });

    $("#removeSkill").click(function () {
        if ($("#skillList li").length > 0) {
            $("#skillList li:last").remove();
            $("#skillMessage").text("Last skill removed.");
        } else {
            $("#skillMessage").text("There are no skills to remove.");
        }
    });

    // Task 6
    $("#changeLink").click(function () {
        $("#socialLink")
            .attr("href", "https://www.linkedin.com/")
            .text("Open LinkedIn");
        $("#linkMessage").text("Link changed to LinkedIn.");
    });

    $("#resetLink").click(function () {
        $("#socialLink")
            .attr("href", "https://www.instagram.com/aiidkonn/")
            .text("Instagram · @aiidkonn");
        $("#linkMessage").text("Link reset to Instagram.");
    });

    // Task 7
    $("#visitorName, #visitorEmail").on("input", function () {
        $("#nameOutput").text($("#visitorName").val() || "—");
        $("#emailOutput").text($("#visitorEmail").val() || "—");
    });

    // Task 8
    var animated = false;

    $("#animateSkills").click(function () {
        if (animated === false) {
            $(".bar-fill").eq(0).animate({ width: "90%" }, 800);
            $(".bar-fill").eq(1).animate({ width: "70%" }, 800);
            $(".bar-fill").eq(2).animate({ width: "60%" }, 800);

            $("#animationMessage").text("Skill bars animated!");
            $("#animateSkills").text("Reset Skills");
            animated = true;
        } else {
            $(".bar-fill").animate({ width: "0%" }, 800);

            $("#animationMessage").text("Skill bars reset to zero.");
            $("#animateSkills").text("Animate My Skills");
            animated = false;
        }
    });
});
