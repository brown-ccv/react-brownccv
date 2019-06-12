import React from 'react';

import { storiesOf } from '@storybook/react';

import Navbar from '../features/Navbar';
import BrownFooter from '../features/BrownFooter';

storiesOf('Navbar', module).add("Brown/CCV", () => (
  <Navbar />
));

storiesOf('Brown Footer', module).add("Footer", () =>(
  <BrownFooter />
));
