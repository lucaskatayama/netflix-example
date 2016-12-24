import ReactGA from 'react-ga';
ReactGA.initialize('');


export const pageView = (pageIn) => {
  let page = window.location.pathname + window.location.hash;
  if (pageIn){
    page = PageIn;
  }
  ReactGA.set({ page });
  ReactGA.pageview(page);
}


export default ReactGA;
