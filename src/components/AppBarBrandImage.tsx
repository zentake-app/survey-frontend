import React from "react";

import BrandImage from "../assets/images/brandImage.png";

interface AppBarBrandImageProps {
  source?: string;
}

const AppBarBrandImage = ({ source = BrandImage }: AppBarBrandImageProps) => {
  console.log(source);
  return (
    <img
      style={{
        maxHeight: "50px",
        marginRight: "1rem",
        width: "auto",
        objectFit: "contain"
      }}
      src={source}
    />
  );
};

export { AppBarBrandImage };
