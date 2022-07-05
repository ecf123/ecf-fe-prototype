import React from 'react';
import { Link } from 'react-router-dom';
import "./ContentHeader.scss";

const ContentHeader = ({title, link}) => {
  return (
    <div className="content-header">
        <h1 className="content-header__heading">{title}</h1>
        <Link className="content-header__anchor" to={link}>
            View All
        </Link>
    </div>
  )
}

export default ContentHeader