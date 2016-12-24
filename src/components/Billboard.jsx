import React from 'react';
import FontAwesome from 'react-fontawesome';

const RedButton = ({children, icon}) => (
  <span className="btn red">
    <a href="#">
      <FontAwesome tag="span" name={icon} fixedWidth/>
      <span>
        {children}
      </span>
    </a>
  </span>
);

const Billboard = ({ movie : {logo, synopsis, wallpaper} }) => (
  <div className="billboard-section">
    <div className="billboard">
      <img src={wallpaper} />
      <div className="vignette" />
      <div className="info">
        <img src={logo} />
        <div className="synopsis">{synopsis}</div>
        <RedButton icon="info-circle">More Info</RedButton>
      </div>
    </div>
  </div>
);


export default Billboard;
