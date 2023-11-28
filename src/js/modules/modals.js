const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {

        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);
        //Открытие модального окна
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                    if(e.target) {
                        e.preventDefault();
                    }
        
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                });
        });
        //Закрытие модального окна
        close.addEventListener('click', (e)=> {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });
        //Закрытие модального окна при нажатии на область вокруг
        modal.addEventListener('click', (e) => {
            const target = e.target;

            if (target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    };
    //Показ модального окна спустя 60 секунд
    function showModalByTime(selector, time) {
        setTimeout(()=>{
            document.querySelector(selector).style.display='block';
            document.body.style.overflow = 'hidden';
        }, time);
    };

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 60000);
};

export default modals;