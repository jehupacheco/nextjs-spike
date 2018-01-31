import fonts from 'utils/fonts';

export default `
  ${fonts}

  body {
    margin: 0;
    font-family: Ubuntu;
  }

  #nprogress .bar {
    background: #0d47a1;
  }

  #nprogress .peg {
    box-shadow: 0 0 10px #0d47a1, 0 0 5px #0d47a1;
  }

  #nprogress .spinner-icon {
    border-top-color: #0d47a1;
    border-left-color: #0d47a1;
  }
`;
