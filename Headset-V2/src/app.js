import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import HeadsetApp from './components/HeadsetApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<HeadsetApp />, document.getElementById('app'));
