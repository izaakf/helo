import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Helo from './Helo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Helo />, document.getElementById('root'));

serviceWorker.unregister();
