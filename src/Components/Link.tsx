import React from 'react';

interface LinkProps {
  name: string
}

const Link: React.FC<LinkProps> = ({name}) => {
      return <>
        <a target="_blank"  rel="noopener noreferrer" href={"https://" + name}>{name}</a>
      </>
  }

  export default Link;