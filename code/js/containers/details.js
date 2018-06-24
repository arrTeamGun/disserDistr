import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component{
    render () {
        if(!this.props.car){
            return(<p>Выберите автомобиль!</p>);
        }
        return(
            <div>
                <h2>{this.props.car.model}</h2>
                <img src={this.props.car.img} /><br />
                <p>{this.props.car.desc}</p>
                <p>Скорость: {this.props.car.speed}, вес: {this.props.car.weight}</p>
            </div>
        );
    }
}

function mapStateToProps(state){ //она типа бесполезна для одного массива, но в дальнейшем пригодится/ Из состояния всё приводится в свойство
    return{
        car: state.active //теперь не нужны все автомобили. Нужен один конкретный 
    };
}

export default connect (mapStateToProps)(Details);