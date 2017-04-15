import React from 'react';
import PropTypes from 'prop-types';
import style from './style';


const Markdown = (props) => {
  const className = style.markdown;
  const html = {
    __html: props.html
  };

  return (
    <article className={className} dangerouslySetInnerHTML = {html} />
  );
};

Markdown.propTypes = {
  html: PropTypes.string
};

export default Markdown;
