/*
* *
* * Esse código é baseado no código disponilizado por Kilian Valkhof
* * url: https://kilianvalkhof.com/uploads/listfilter/
* *
*/


(function ($) {

    $('.not-found').hide();

    jQuery.expr[':'].Contains = function (a, i, m) {
        return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };

    function searchFilter(search, card) {

        var form = $("<form>").attr({
                "class": "filterform",
                "action": "#"
            }),
            input = $("<input>").attr({
                "class": "search-bar",
                "placeholder": "Pesquise uma mulher incrível aqui...",
                "type": "text"
            });

        $(form).append(input).appendTo(search);

        $(input)
            .change(function () {
                var filter = $(this).val();
                if (filter) {
                    // this finds all links in a list that contain the input,
                    // and hide the ones not containing the input while showing the ones that do
                    $(card).find("h2:not(:Contains(" + filter + "))").parent().slideUp();
                    $(card).find("h2:Contains(" + filter + ")").parent().slideDown();
                } else {
                    $('.not-found').show();
                    $(card).find(".card").slideDown();
                    
                }
                return false;
            })
            .keyup(function () {
                // fire the above change event after every letter
                $(this).change();
            });
    }

    //ondomready
    $(function () {
        searchFilter($("#search-bar"), $(".card"));
    });

}(jQuery));