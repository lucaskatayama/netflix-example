import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import $ from 'jquery';
import { pageView } from 'utils/ga';
import './assets/app.scss';


ReactDOM.render(<App />, document.getElementById('main'));
pageView();


function collapseNavbar() {
  const $navBar = $(".navbar");
  if ($navBar.offset().top > 50) {
      $navBar.addClass("top-nav-collapse");
  }
  else {
    $navBar.removeClass("top-nav-collapse");
  }
}


$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);
