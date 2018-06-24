import React from 'react'; //Разумно тут указать путь до папки css через импорт и обращение к папкам
import CarsList from '../containers/car-list';
import Details from '../containers/details';
import Slider from 'react-slick';

//комоненты что-то выводят на экран
//контейнеры помещают что-то либо в компонент
//https://codepen.io/Kikoku/pen/qNXKoP

const WebPage = () => ( //в первых скобках указываем параметры. Во вторых - тело функции
    <body>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />            
        <h1>Алгоритм проверки завершения</h1>
        <DijkstraSlider/>
        <h1>Алгоритм выборов</h1>
        <FranklinSlider/>
        <h1 align='center'>Алгоритм снимка состояния</h1>
        <ChandySlider/>
        
    </body>
);

class ChandySlider extends React.Component {
    render() {
      const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
        <div align='center'>
            <img src='/img/1.png'/>
        </div>
        <div>
            <img src='/img/2.png'/>
        </div>
        <div>
            <img src='/img/3.png'/>
        </div>
        <div>
            <img src='/img/4.png'/>
        </div>
        </Slider>
      );
    }
  }

  class DijkstraSlider extends React.Component {
    render() {
      const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
        <div>
            <img src='/img/dij1.png'/>
        </div>
        <div>
            <img src='/img/dij2.png'/>
        </div>
        <div>
            <img src='/img/dij3.png'/>
        </div>
        <div>
            <img src='/img/dij4.png'/>
        </div>
        <div>
            <img src='/img/dij5.png'/>
        </div>
        <div>
            <img src='/img/dij6.png'/>
        </div>
        <div>
            <img src='/img/dij7.png'/>
        </div>
        <div>
            <img src='/img/dij8.png'/>
        </div>
        <div>
            <img src='/img/dij9.png'/>
        </div>
        <div>
            <img src='/img/dij10.png'/>
        </div>
        </Slider>
      );
    }
  }

  class FranklinSlider extends React.Component {
    render() {
      const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
        <div>
            <img src='/img/el1.png'/>
        </div>
        <div>
            <img src='/img/el2.png'/>
        </div>
        <div>
            <img src='/img/el3.png'/>
        </div>
        <div>
            <img src='/img/el5.png'/>
        </div>
        <div>
            <img src='/img/el6.png'/>
        </div>
        </Slider>
      );
    }
  }


  

var Process = (x, y) => (
    <svg height="1000" width="1000">
        <circle cx={x} cy={y} r="40" stroke="black" stroke-width="3" fill="white" />
    </svg>
);

const header = {
    align: 'center',
    //width: '100%'
  };

const actionField = {
    //width: '30%',
    float: 'left'
  };

const viewField = {
    //width: '70%'
};

export default WebPage; //выводит какой-либо html текст