(function () {
    WorkForce.init();
});
var WorkForce = {
    init: function () {
        this.loader.init();
    },
    loader: {
        init: function () {

            window.onload = () => 
            {
                WorkForce.loader.hide(500);
            };

           
        },
        show: function (t) {
            t = t ? t : 500;
         
            document.querySelector('.loader-wrap').style.display = "block";
           
        },
        hide: function (t) {
            t = t ? t : 500;
            document.querySelector('.loader-wrap').style.display = "none";
           
        }
    }
}