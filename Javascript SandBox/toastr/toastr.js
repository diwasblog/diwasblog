const Toast = {
    init() {
        this.hideTimeout = null;

        this.el = document.createElement("div");
        this.el.className = 'toast';
        document.body.appendChild(this.el);   // This will create  "<div class="toast"> </div>   inside body tag of html
    },

    show(message, state) {
        clearTimeout(this.hideTimeout);
        debugger;
        if (state == 'success') {
            this.el.textContent = '✔ ' + message;
        }
        else if (state == 'error') {
            this.el.textContent = '❌ ' + message;
        }
        else if (state == 'warning') {
            this.el.textContent = '⚠ ' + message;
        }
        else if(state == 'info') {
            this.el.textContent = '❕ ' + message;
        }

        this.el.className = 'toast toast--visible';

        if (state) {
            this.el.classList.add(`toast--${state}`);
        }

        this.hideTimeout = setTimeout(() => {
            this.el.classList.remove('toast--visible');
        },3000)
    }
};

document.addEventListener('DOMContentLoaded', () => Toast.init());