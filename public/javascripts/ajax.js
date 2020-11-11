
/** 
 * On submission of the #text form run the below
 * save the value of the input fields to variables
 * Put the variables in a object
 * run an AJAX Post request that stringifys the JSON
 */
$('#text').on('submit', function (e) {
    e.preventDefault();

    const number = $('#number').val();
    const message = $("#message").val();


    const data = {
        message: message,
        number: number
    };

    $.ajax({
        type: "POST", // HTTP method POST or GET
        url: "/", //Where to make Ajax calls
        dataType: "json", // Data type, HTML, json etc.
        contentType: "application/json", // Need this to send proper data to server
        data: JSON.stringify(data), //Form variables
        success: function (sucess) {
            alert("Text has sent");

        }
    });
});
