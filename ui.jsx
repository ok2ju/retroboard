/* eslint import/no-unresolved: 0 */
import 'babel-polyfill';
import Index from './app/index';
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-toolbox/lib/commons';

ReactDOM.render(<Index />, document.getElementById('content'));
