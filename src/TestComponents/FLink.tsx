import React, { useState } from "react";

interface LinkProps {
  name: string;
}

const FLink: React.FC<LinkProps> = (LinkProps) => {
  return (
    <>
      <a target="_blank" rel="noopener noreferrer" href={"https://" + name}>
        {name}
      </a>
    </>
  );
};

export default FLink;
