(function($) {
    test("Test1", function() {
        $("#test1").tableofcontents({ id: "#tableofcontents1" });
        equal($("#tableofcontents1").find("ul").length, 3);
        equal($("#tableofcontents1").find("li").length, 3);
        equal($("#tableofcontents1").find("ul, li").length, 6);
    });

}(jQuery));
