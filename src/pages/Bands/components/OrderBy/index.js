import React from 'react';

const OrderBy = ({ onClick }) => (
  <>
    <div onClick={() => onClick('name')}>alpha</div>
    <div>
      <hr />
    </div>
    <div onClick={() => onClick('numPlays')}>popularity</div>
  </>
);

export default OrderBy;
