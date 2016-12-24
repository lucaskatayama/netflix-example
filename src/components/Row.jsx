import React from 'react';

//style={{ backgroundImage: `url(${slide.image})`}}
const Slide = ({ slide }) => (

  <div className="tile">
    <div className="tile__media">
      <img className="tile__img" src={slide.image} alt=""  />
    </div>
    <div className="tile__details">
      <div className="tile__title">
        {slide.title}
      </div>
    </div>
  </div>

);


const Slider = ({ slides, header }) => (
  <div className="slider row__inner">
    <h2>{header}</h2>
    <div className="slider-mask">
      <div className="slider-content">
        {
          slides.map((e, idx) => <Slide key={idx} slide={e} />)
        }
      </div>
    </div>

  </div>
);


const Row = ({ titles, header }) => (
  <div className="row">
    <Slider slides={titles} header={header}/>
  </div>
);


export default Row;
