import React from 'react';

import { storiesOf } from '@storybook/react';

import Navbar from '../components/Navbar';
import BrownFooter from '../components/BrownFooter';

storiesOf('Navbar', module).add("Brown/CCV", () => (
  <Navbar />
));

storiesOf('Brown Footer', module).add("Footer", () =>(
  <BrownFooter />
));
