export default function mainPageModal() {
    let form = document.getElementsByClassName('popup-form')[0],
        input = form.getElementsByTagName('input'),
        regBtn = form.querySelector('.popup-form__btn');

    input[0].onkeypress = checkRu;
    input[1].setAttribute('pattern', "\\+375 \\([0-9]{2}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}");

    input[1].addEventListener("input", mask, false);
    input[1].addEventListener("focus", mask, false);
    input[1].addEventListener("blur", mask, false);
    input[1].addEventListener("keydown", mask, false);
   
    //Проверка на русские символы
    function checkRu(e) {
        let evt = e || window.event;
        let code = evt.keyCode;
        if ((code < 1040) || (code > 1103)) {
            if (code == 1105 || code == 32) {
                return true;
            }
            return false;
        }
    }

    //Маска

    function setCursorPosition(pos, elem, event) {
        elem.focus();
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select();
        }
    }
    // Сама маска
    function mask(event) {
        let matrix = "+375 (__) ___-__-__",
            i = 0,
            b = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;

        this.value = matrix.replace(/./g, function(a) {

            // Если есть _ и число и номер символа меньше длинны строки, то возвращаем следующий символ
            // или если номер символа больше длины строки и меньше длины маски, то  (__) ___ __ __
            // Или если нажали на backspace, то возвращаем пустую строчку
            // Иначе просто возвращаем входной сивол
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length && matrix.lengtth >= i ? "(__) ___ __ __" : event.key == "Backspace" && !isNaN(val.charAt(i)) ? '' : a

        });

        if (event.type == "blur") {
            if (this.value.length == 4)
                this.value = "";
            // input[2].value = this.value;
        } else {
            setCursorPosition((this.value.length), this, event);
            // input[2].value = this.value;
        }

    };

    // Ajax
    formSubmit(form);
    let message = new Object();
    message.failure = 'Что-то пошло не так... 404';

    function formSubmit(formName) {
       
             close = document.querySelector('.popup-close');

            

        formName.addEventListener('submit', (e) => {
            e.preventDefault();
             let statusMessage = document.createElement('div'),
            divCircle = document.createElement('div'),
            divComplete = document.createElement('div');
statusMessage.classList.add('status', 'animated');
            formName.parentNode.appendChild(statusMessage);
            statusMessage.style.width = form.clientWidth + 'px';

            let formData = new FormData(formName);
            formData.append('name', input[0].value);
            formData.append('phone', input[1].value);
            formData.append('email', input[2].value);

            function postData(data) {
                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest();
                    request.open('POST', '../../server.php')
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');


                    request.onreadystatechange = () => {

                        if (request.readyState < 4) {
	                            statusMessage.style.display = 'block';
					                    statusMessage.classList.add('fadeIn');
					                    form.classList.add('blur');
					                    statusMessage.appendChild(divCircle);
					                    divCircle.classList.add('circle-loader');
                            console.log('loading');
                        } else if (request.readyState === 4) {
                            if (request.status == 200 && request.status < 300) {
                                console.log('success');
                                resolve();
                            } else {
                                reject();
                                console.log('fail');
                            }
                        }
                    };
                    request.send(formData);
                });
            }

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(formData)
                
                .then(() => {
                	divCircle.appendChild(divComplete);
                    divCircle.classList.add('load-complete');
                    divComplete.classList.add('draw', 'checkmark');
                    setTimeout(() => {
                    	statusMessage.classList.remove('fadeIn');
                        statusMessage.classList.add('fadeOut');
                        
                        divCircle.classList.remove('load-complete');
                        divComplete.classList.remove('draw', 'checkmark');
                        setTimeout(() => {
                            statusMessage.style.display = 'none';
                            statusMessage.classList.remove('fadeOut');
                            form.classList.remove('blur');
                            close.click();
                        }, 500);
                    }, 2000);
                })
                .catch(() => {
                	statusMessage.style.display = 'block';
                    statusMessage.classList.add('fadeIn');
                    // statusMessage.cssText = '';
                    statusMessage.innerHTML = message.failure;
                    setTimeout(() => {
                        statusMessage.classList.add('fadeOut');
                        statusMessage.style.display = 'none';
                        statusMessage.classList.remove('fadeOut');
                        form.classList.remove('blur');
                    }, 2000);

                })
                .then(clearInput);
        });
    }

}

 
  