import {combineReducers} from 'redux';
import CarsReducers from './process';
import ActiveCar from './car-active'; 

const allReducers = combineReducers({ //Здесь всё объединяется и сохраняется через хранилище
    cars: CarsReducers, //здесь через запятую передавать преобразователи    
    active: ActiveCar
})

export default allReducers