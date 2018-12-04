import React from 'react';

const Topic = ({ match }) => {
return(
    <div className='App'>
      Requested Param: {match.params.id}
    </div>
  );
}

export default Topic;