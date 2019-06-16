import React from 'react';
import Modal from '../Modal';

const StreamDelete = function() {
  const actions = (
    <React.Fragment>
      <button className='ui button negative'>DELETE</button>
      <button className='ui button'>CANCEL</button>
    </React.Fragment>
  );
  
  return (
    <div>
      <p>Stream DELTE block disply</p>
      <Modal
        title='DELETE STREAM?'
        content='ARE YOU SURE YOU WANT TO DELETE THIS STREAM?'
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;