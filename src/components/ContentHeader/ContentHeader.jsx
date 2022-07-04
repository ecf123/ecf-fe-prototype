import React from 'react';
import "./ContentHeader.scss";

const ContentHeader = ({title, link}) => {

  return (
    <div className="content-header">
        <h1 className="content-header__heading">{title}</h1>
        <a className="content-header__anchor" to={link}>
            View All
        </a>
    </div>
  )
}

export default ContentHeader