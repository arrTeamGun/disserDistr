export const select = (process) => {  //имя ЛЮБОЕ. Тут Select. Переменная - Car
    return{
        type: "SLIDER_MOVED",
        payload: process //payload - название, если хочешь передать объект. Принято в React.
    }
};

//Функция сработает, если нажмём на что-то
//actionCreator просто создаёт действия