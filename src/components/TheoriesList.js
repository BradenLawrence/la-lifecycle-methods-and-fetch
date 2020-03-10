import React from 'react';

const TheoriesList = props => {
  let theoryListItems = props.theories.map(theory => {
    return(
      <li key={theory.id}>
        {theory.theoryDescription}
      </li>
    )
  });

  return (
    <div>
      <h3 className="text-center">Latest Weird Theories</h3>
      <ul>{theoryListItems}</ul>
    </div>
  );
}

export default TheoriesList;
