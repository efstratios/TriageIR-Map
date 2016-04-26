/**
 * Created by efstratios on 3/28/16.
 */

 function toggleDiv(divId) {
        // $("#" + divId).toggle();.
        $(".triage_output_navbar_options").each(function () {
        	$(this).hide();
        });
        $("#" + divId).show();

    }
