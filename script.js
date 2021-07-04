$('.product-image').on('click', function () {
    openpopupnow();
});

$('#close-popup').on('click', function () {
    $('#popup-container').removeClass('is-visible');
});

function openpopupnow() {
    var mpopup = $('#popup-container');
    mpopup.addClass('is-visible');
}

$(document).click(function (event) {
    if (!$(event.target).closest("#popup-container,.product-image").length) {
        $("body").find("#popup-container").removeClass("is-visible");
    }
});

/*Mennyiseg novelese, csokkentese kod*/
$('.add').click(function () {
    if ($(this).prev().val() < 999) {
        $(this).prev().val(+$(this).prev().val() + 1);
    }
    if ($(this).prev().val() < 999 && $(this).prev().val() > 1) {
        if (!($(this).prev().prev().hasClass("active-quantity"))) {
            $(this).prev().prev().addClass('active-quantity');
        }
    }
    if ($(this).prev().val() > 998) {
        $(this).removeClass('active-quantity');
    }
    else {
        if (!($(this).hasClass("active-quantity"))) {
            $(this).addClass('active-quantity');
        }
    }
});
$('.sub').click(function () {
    if ($(this).next().val() > 1) {
        if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    }
    if ($(this).next().val() < 999) {
        if (!($(this).next().next().hasClass("active-quantity"))) {
            $(this).next().next().addClass('active-quantity');
        }
    }
    if ($(this).next().val() > 1) {
        $(this).addClass('active-quantity');
    }
    else {
        $(this).removeClass('active-quantity');
    }
});


// Aktiv osztaly valtoztatasa a mereteknel

var sizes = $(".meret-dobozok-container").find("div");
sizes.click(function () {
    sizes.removeClass("active-termek");
    $(this).addClass("active-termek");
});

// Kepek vlatoztatasa kattintasra
var thumbs = $(".kis-kepek-container").find("img");
thumbs.click(function () {
    var src = $(this).attr("src");
    var dp = $(".nagy-kep");
    dp.attr("src", src);
});

var input = $('.quantity-box-number');
if ($(input).val() > 1) {
    $("body").find("#sub").addClass("active-quantity");
}

(function (event) {
    if ($(event.target.id == "#quantity")) {
        if ($("#quantity-box-number").val() > 1) {
            $("body").find("#sub").addClass("active-quantity");
        }
    }
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

