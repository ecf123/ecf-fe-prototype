import React from 'react';
import "./ContentHeader.scss";

const ContentHeader = ({title, link}) => {

  return (
    <div className="content-header">
        <h1 className="content-header__heading">{title}</h1>
        //href attribute should be changed to 'to' when routing is implemented
        <a className="content-header__anchor" href={link}>
            View All
        </a>
    </div>
  )
}

export default ContentHeader