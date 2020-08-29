(function() {
  WorkForce.init(true);
});

var WorkForce = {

  init : function(start) {
    var _this = this;
    if (start) {
      _this.construct();
      window.location.href = "#openModalLoading";
    }
  },

  construct : function() {
    var _this = this;
      var html = `<div id="openModalLoading" class="modalDialog">
                   
                        <div class="loading-spinner">
                        <span></span>
                        <span></span>
                        </div>
                        </div>`;

    _this.appendHtml(document.body, html);
    _this.appendCss();
  },

  appendHtml : function(el, str) {
    var div = document.createElement('div');
    div.innerHTML = str;
    while (div.children.length > 0) {
      el.appendChild(div.children[0]);
    }
  },

  appendCss : function() {
      var css = `.modalDialog {position: fixed;font-family: Arial, Helvetica, sans-serif;top: 0;right: 0;bottom: 0;left: 0; background: whitesmoke;z-index: 99999;opacity:0; -webkit-transition: opacity 400ms ease-in; -moz-transition: opacity 400ms ease-in;transition: opacity 400ms ease-in; pointer-events: none;}  .modalDialog:target {opacity:1;pointer-events: auto;}  .modalDialog > div {width: 100%;position: relative;height:100%}@-webkit-keyframes rotate-forever { 0% { -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); -ms-transform: rotate(0deg); -o-transform: rotate(0deg); transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); -moz-transform: rotate(360deg); -ms-transform: rotate(360deg); -o-transform: rotate(360deg); transform: rotate(360deg); } } @-moz-keyframes rotate-forever { 0% { -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); -ms-transform: rotate(0deg); -o-transform: rotate(0deg); transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); -moz-transform: rotate(360deg); -ms-transform: rotate(360deg); -o-transform: rotate(360deg); transform: rotate(360deg); } } @keyframes rotate-forever { 0% { -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); -ms-transform: rotate(0deg); -o-transform: rotate(0deg); transform: rotate(0deg); } 100% { -webkit-transform: rotate(360deg); -moz-transform: rotate(360deg); -ms-transform: rotate(360deg); -o-transform: rotate(360deg); transform: rotate(360deg); } } 
      .loading-spinner{width:50px;height:50px;display:inline-block;padding:0;text-align:left}.loading-spinner span{position:absolute;display:inline-block;width:50px;height:50px;border-radius:100%;background:#87d37c;-webkit-animation:loader3 1.5s linear infinite;animation:loader3 1.5s linear infinite}.loading-spinner span:last-child{animation-delay:-.9s;-webkit-animation-delay:-.9s}@keyframes loading-spinner{0%{transform:scale(0,0);opacity:.8}100%{transform:scale(1,1);opacity:0}}@-webkit-keyframes loader3{0%{-webkit-transform:scale(0,0);opacity:.8}100%{-webkit-transform:scale(1,1);opacity:0}}.loading-spinner{position:absolute;top:50%;right:0;bottom:50%;left:50%;margin:-15px 0 -15px}`,
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');

    style.type = 'text/css';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
  }

};

WorkForce.init(false);