import React from 'react'

const TagWrap = (props) => {
  return (
      <div className={props.clas}>
        {props.children}
      </div>
  )
};

export default TagWrap;