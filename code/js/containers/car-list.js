import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index'; //используем при клике

class CarsList extends Component{ //класс унаследуется от Компонента
    showList(){
        return this.props.cars.map ((car) =>{
            return(
                <li onClick={() => this.props.select(car)} key={car.id}>{car.model}</li>
            );
        });        
    }
    render (){
        return(
            <ol>
                {this.showList()}
            </ol>
        );
    }
}

function mapStateToProps(state){ //она типа бесполезна для одного массива, но в дальнейшем пригодится/ Из состояния всё приводится в свойство
    return{
        cars: state.cars //получаем весь массив и можем использовать для компонента
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({select: select}, dispatch) //функция для того, чтобы привести к свойству. Эти функции создают действия.
}

export default connect (mapStateToProps, matchDispatchToProps)(CarsList); //мы используем логическую часть, а не просто выводим CarsList.
