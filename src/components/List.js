import React from 'react';
import ListItems from './ListItems';

 const List = ({listx}) =>{
  return(
    // code here
    listx.map(element => 
      <ListItems valuex= {element} />
    )
  )
}

export default List;