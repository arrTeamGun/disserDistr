import React from 'react';
import {render} from "react-dom";
import {createStore} from 'redux' //Фигурные скобки для использования сразу же
import allReducers from './reducers';
import {Provider} from 'react-redux'; //провайдер, связывающий компоненты и хранилища
import WebPage from './conponents/WebPage'; //импорт компонента из папки



const store = createStore(allReducers); //хранилище информации. Сюда передают редюсеры

render(
  //Провайдер отобразит информацию через компонент, связывая логические части в одном index.js
  <Provider store={store}> 
    <WebPage />
  </Provider>,
  document.getElementById('fieldToShow')
);

