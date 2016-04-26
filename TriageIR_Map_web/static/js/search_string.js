/**
 * Created by rel0aded on 3/27/16.
 */

$('#search_form').keypress(function (e) {
    var key = e.which;
    if (key == 13)  // the enter key code
    {
        var string = document.getElementById("search_form").value;
        if (!string.trim()) {
   return false; // is empty or whitespace
}
        if ($('#triage_output_content').text().indexOf(string) != -1) {
            alert("Found keyword : " + string);
            // $('#triage_output_content').css("background", "#FFFF4C");
        }
        return false;
    }
});
