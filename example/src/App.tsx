import React from 'react';

import { Card, Suit } from 'react-cards-framework';
import 'react-cards-framework/dist/index.css';

const App = () => {
  return <Card number={13} suit={Suit.DIAMOND} />;
};

export default App;
