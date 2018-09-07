export default function mainPageModal() {
    let form = document.getElementsByClassName('popup-form')[0],
        input = form.getElementsByTagName('input'),
        regBtn = form.querySelector('.popup-form__btn');

    document.querySelector('.overlay').style.display = 'block';

    // input[2].readOnly = true;
    //   input[2].value = input[1].value;
    //   input[1].style.opacity = '0';
    //   input[2].style.marginTop = `${- input[1].offsetHeight}px`;
    //   input[2].style.width = input[1].clientWidth;


    input[0].onkeypress = checkRu;

    input[1].addEventListener("input", mask, false);
    input[1].addEventListener("focus", mask, false);
    input[1].addEventListener("blur", mask, false);
    input[1].addEventListener("keydown", mask, false);
    // input[2].addEventListener('click', () => {
    //     input[1].focus();
    // });

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
                this.value = "+375 (__) ___-__-__";
            // input[2].value = this.value;
        } else {
            setCursorPosition((this.value.length), this, event);
            // input[2].value = this.value;
        }

    };

    // Ajax
    formSubmit(form);
    let message = new Object();
    message.failure = 'xnj-то пошло не так...';

    function formSubmit(formName) {
        let statusMessage = document.createElement('div'),
            divCircle = document.createElement('div'),
            divComplite = document.createElement('div');

        formName.addEventListener('submit', (e) => {
            e.preventDefault();
            formName.appendChild(statusMessage);

            let formData = new FormData(formName);

            function postData(data) {
                return new Promise((resolve, reject) => {
                    let request = new XMLHttpRequest();
                    request.open('POST', '../../server.php')
                    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');


                    request.onreadystatechange = () => {

                        if (request.readyState < 4) {
                            resolve();
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
                    statusMessage.style.display = 'block';
                    statusMessage.appendChild(divCircle);
                    divCircle.appendChild(divComplete);
                    divCircle.classList.add('circle-loader');
                })
                .then(() => {
                    divCircle.classList.add('load-complete');
                    divComplete.classList.add('draw', 'checkmark');
                    setTimeout(() => {
                        statusMessage.classList.add('fadeOut');
                        statusMessage.classList.remove('fade');
                        divCircle.classList.remove('load-complete');
                        divComplete.classList.remove('draw', 'checkmark');
                        setTimeout(() => {
                            statusMessage.style.display = 'none';
                            statusMessage.classList.remove('fadeOut');
                        }, 1500);
                    }, 2000);
                })
                .catch(() => {
                    statusMessage.classList.remove('fade');
                    statusMessage.cssText = '';
                    statusMessage.innerHTML = message.failure;
                })
                .then(clearInput);
        });
    }

}