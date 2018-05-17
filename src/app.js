$(document).ready(initial);

function initial() {

    $("#getBalanceButton").click(function() {

        var addr = $("#addressInput").val();

        web3.eth.getBalance(addr, function(err, res) {
            if (err != null) {
                alert(err);
            }
            $("#balanceOutput")
                .html("The balance is: " + res);
        });
    });
}
