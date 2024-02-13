var modal = document.getElementsByClassName('pcm-modal');
var span = document.getElementsByClassName("pcm-close");
var el = document.getElementsByClassName('pcm-btn-ChangeLayout');
for (i = 0; i < el.length; i++) {
    el[i].addEventListener('click', function () {
        this.nextElementSibling.style.display = 'block';
    });
}
for (i = 0; i < span.length; i++) {
    span[i].addEventListener('click', function () {
        this.parentNode.parentNode.style.display = "none";
    });
}
window.onclick = function (event) {
    for (i = 0; i < modal.length; i++) {
        if (event.target == modal[i]) {
            modal[i].style.display = "none";
        }
    }
}
$(document).ready(function () {
    $("a[target='frames']").click(function () {
        $("#pcm-frames").load("frame-html/frames.html");
        frames();
        $(this).parents('#pcm-collageTemplate-modal').css('display', 'none');
    });
    $("a[target='frame-default']").click(function () {
        $("#pcm-frame").load("frame-html/frame-default.html");
        frame();
        $(this).parents('#pcm-collageTemplate-modal').css('display', 'none');
    });
    $("a[target='frame1']").click(function () {
        $("#pcm-frame").load("frame-html/frame1.html");
        frame();
        $(this).parents('#pcm-collageTemplate-modal').css('display', 'none');
    });
    $("a[target='frame2']").click(function () {
        $("#pcm-frame").load("frame-html/frame2.html");
        frame();
        $(this).parents('#pcm-collageTemplate-modal').css('display', 'none');
    });
    $("a[target='frame3']").click(function () {
        $("#pcm-frame").load("frame-html/frame3.html");
        frame();
        $(this).parents('#pcm-collageTemplate-modal').css('display', 'none');
    });
    $("a[target='frame4']").click(function () {
        $("#pcm-frame").load("frame-html/frame4.html");
        frame();
        $(this).parents('#pcm-collageTemplate-modal').css('display', 'none');
    });
    $("a[target='frame5']").click(function () {
        $("#pcm-frame").load("frame-html/frame5.html");
        frame();
        $(this).parents('#pcm-collageTemplate-modal').css('display', 'none');
    });
    $("a[target='frame6']").click(function () {
        $("#pcm-frame").load("frame-html/frame6.html");
        frame();
        $(this).parents('#pcm-collageTemplate-modal').css('display', 'none');
    });
    $("a[target='frame7']").click(function () {
        $("#pcm-frame").load("frame-html/frame7.html");
        frame();
        $(this).parents('#pcm-collageTemplate-modal').css('display', 'none');
    });
    $("a[target='frame8']").click(function () {
        $("#pcm-frame").load("frame-html/frame8.html");
        frame();
        $(this).parents('#pcm-collageTemplate-modal').css('display', 'none');
    });
    $("a[target='frame9']").click(function () {
        $("#pcm-frame").load("frame-html/frame9.html");
        frame();
        $(this).parents('#pcm-collageTemplate-modal').css('display', 'none');
    });
    $("a[target='frame10']").click(function () {
        $("#pcm-frame").load("frame-html/frame10.html");
        frame();
        $(this).parents('#pcm-collageTemplate-modal').css('display', 'none');
    });
    $("a[target='frame11']").click(function () {
        $("#pcm-frame").load("frame-html/frame11.html");
        frame();
        $(this).parents('#pcm-collageTemplate-modal').css('display', 'none');
    });
    $("a[target='frame12']").click(function () {
        $("#pcm-frame").load("frame-html/frame12.html");
        frame();
        $(this).parents('#pcm-collageTemplate-modal').css('display', 'none');
    });
    $("a[target='frame13']").click(function () {
        $("#pcm-frame").load("frame-html/frame13.html");
        frame();
        $(this).parents('#pcm-collageTemplate-modal').css('display', 'none');
    });
    $("a[target='frame14']").click(function () {
        $("#pcm-frame").load("frame-html/frame14.html");
        frame();
        $(this).parents('#pcm-collageTemplate-modal').css('display', 'none');
    });
    $("a[target='frame15']").click(function () {
        $("#pcm-frame").load("frame-html/frame15.html");
        frame();
        $(this).parents('#pcm-collageTemplate-modal').css('display', 'none');
    });
    $("a[target='frame16']").click(function () {
        $("#pcm-frame").load("frame-html/frame16.html");
        frame();
        $(this).parents('#pcm-collageTemplate-modal').css('display', 'none');
    });
    $("a[target='frame17']").click(function () {
        $("#pcm-frame").load("frame-html/frame17.html");
        frame();
        $(this).parents('#pcm-collageTemplate-modal').css('display', 'none');
    });
});
function frames() {
    $('#template-btn').addClass('active');
    $('#collage-btn').removeClass('active');
    $('#pcm-frame').hide();
    $('#pcm-drawzone').hide();
    $('#pcm-pic').hide();
    $('#pcm-downloadBtn').hide();
    $('#pcm-frames').show();
}
$("#collage-btn").click(function () {
    frame();
});
function frame() {
    $('#collage-btn').addClass('active');
    $('#template-btn').removeClass('active');
    $('#pcm-frame').show();
    $('#pcm-drawzone').show();
    $('#pcm-pic').show();
    $('#pcm-downloadBtn').show();
    $('#pcm-frames').hide();
}

