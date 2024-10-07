import React, { useState } from 'react'

const Search = ({setValToSearch}: {setValToSearch: Function}) => {
  
  const [searchVal, setSearchVal] = useState('');
  
  const onChangeSearchVal = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchVal(evt.target.value);
    setValToSearch(searchVal);
  };

  return (
    <div>
      <input
        type="text"
        value={searchVal}
        onChange={onChangeSearchVal}
      />
    </div>
  )
}

export default Search;