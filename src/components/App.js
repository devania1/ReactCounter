import React from 'react';
import CountButton from './CountButton';

const App = () => (
       <div>
           <CountButton incrementBy={1} />
           <CountButton incrementBy={500} />
       </div>
 )

export default App;