import './style.css';

const req = require.context('./assets/icons', true, /^(.*\.(svg$))[^.]*$/i);
req.keys().forEach((key) => {
  req(key);
});
