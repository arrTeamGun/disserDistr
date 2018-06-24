//этот преобразователь отображает информацию из actionCreator
//преобразователи выполняют действия, в зависимости от выбранного действия
export default function (state=null, action){  //При старте никакой доп информации не будет (null)
    switch(action.type){
        case "PROCESS_SELECTED":
            return action.payload;
            break;
        default:
            return state; //Если никакое действие не обработалось
    }
}

