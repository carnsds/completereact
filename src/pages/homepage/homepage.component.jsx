import React from 'react';

// == components ==
import Directory from '../../components/directory/directory.component';

// == style ==
import './homepage.styles.scss';

const HomePage = ({history}) => (
  <div className='homepage'>
    <Directory history={history} />
  </div>
);

export default HomePage;
