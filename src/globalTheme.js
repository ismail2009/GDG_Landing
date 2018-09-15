import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url(‘https://fonts.googleapis.com/css?family=Markazi+Text:400,700');
  * {
    margin: 0px;
    padding: 0px;
    border: none;
    outline: none;
  }
  body {
    font-family: 'Markazi Text', serif;
    direction: rtl;
    background-color: #fff;
    font-size: 100%;
  }
  body, h1, h2, h3, h4, h5, h6 {
    font-size-adjust: 0.5px;
  }

  h1 {
    font-size: 2em;
    font-family: 'Markazi Text', serif;
    line-height: 1.25;
}

@media (min-width: 43.75em) {
  h1 {
    font-size: 2.5em;
    line-height: 1.125;
  }
}

@media (min-width: 56.25em) {
  h1 {
    font-size: 3em;
    line-height: 1.05;
  }
}
`;
