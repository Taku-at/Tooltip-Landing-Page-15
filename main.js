$(function() {

    /**
     * 1. Click the dot to add the show class on the detail
     * 2. Specify the button has been clicked
     * 3. Remove the class when we click other button.
     * 
     */
    $(".info-dot").on('click', function(e) {
        e.stopPropagation();
        $(this).find(".info__detail").addClass("show");
        $(".info-dot").not(this).find(".info__detail").removeClass("show");
    });

    // Click the body to remove the class
    $(document).on('click', function() {
        $(".info__detail").removeClass("show");
    })

    $(".info__detail").on('click', function(e) {
        e.stopPropagation();
    })
})
