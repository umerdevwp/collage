    $(":file").css("opacity", 0);
    function photoCollageMaker(element){
        element.load("index.html");
    }
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                input.nextElementSibling.setAttribute("src", e.target.result);
                input.nextElementSibling.onload = function() {
                    var frameHeight = $(this).parents('.pcm-x').css('height').replace("px", "");
                    var frameWidth = $(this).parents('.pcm-x').css('width').replace("px", "");
                    var frameRela = frameHeight/frameWidth;
                    var imageRela = this.height/this.width;
                    if (imageRela < frameRela){
                        $(this).css('height', '100%');
                    } else {
                        $(this).css('width', '100%');
                    }
                }
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $('.pcm-x').click(function(event) {
        if (!$(event.target).is('.pcm-collage')) {
            $(this).find(".pcm-collage").trigger('click');
        }
    });

    $(".pcm-x img").on("contextmenu",function(e){
        return false;
    });

    $(":file").change(function(e) {
        readURL(this);
        $(this).parent().css('background-color', 'transparent');
        $(this).next().css('display', 'block');
    });
    $(".pcm-btn-Preview-Image").on('click', function () {
        var element = $(".pcm-img");
        $("#pcm-pic").remove();
        $("#pcm-downloadBtn").remove();
        html2canvas(element, {
            onrendered: function (canvas) {
                var image = new Image();
                image.id = "pcm-pic";
                image.src = canvas.toDataURL();
                $('body').append(image);
                $('body').append("<a href='" + image.src +"' download='image.png' id='pcm-downloadBtn'> DownLoad Image </a>")
                canvas.remove();
            }
        });
        
    });
    window.addEventListener('DOMContentLoaded', function () {

        var image = document.getElementById('uploadedAvatar');
        var input = document.getElementsByClassName('pcm-collage');
        var avatar ;
        var cropBtn = document.getElementById('crop');

        var $modal = $('#cropAvatarmodal');
        var cropper;

        $('[data-toggle="tooltip"]').tooltip();

        input.addEventListener('change', function (e) {
            var files = e.target.files;
            avatar = e.target.nextSibling;
            var done = function (url) {
                // input.value = '';
                console.log(input.value);
                image.src = url;
                $modal.modal('show');
            };
            // var reader;
            // var file;
            // var url;

            if (files && files.length > 0) {
                let file = files[0];

                // done(URL.createObjectURL(file));
                // if (URL) {
                // }

                // else if (FileReader) {
                reader = new FileReader();
                reader.onload = function (e) {
                    done(reader.result);
                };
                reader.readAsDataURL(file);
                // }
            }
        });




        $modal.on('shown.bs.modal', function () {
            cropper = new Cropper(image, {
                aspectRatio: 1,
                viewMode: 3 });

        }).on('hidden.bs.modal', function () {
            cropper.destroy();
            cropper = null;
        });

        cropBtn.addEventListener('click', function () {
            // var initialAvatarURL;
            var canvas;

            $modal.modal('hide');

            if (cropper) {
                canvas = cropper.getCroppedCanvas({
                    width: 160,
                    height: 160 });

                // initialAvatarURL = avatar.src;
                avatar.src = canvas.toDataURL();
            }
        });

    });