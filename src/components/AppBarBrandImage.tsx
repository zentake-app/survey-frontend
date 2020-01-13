import React from "react";

import BrandImage from "../assets/images/brandImage.png";

interface AppBarBrandImageProps {
  source?: string;
}

const AppBarBrandImage = ({ source = BrandImage }: AppBarBrandImageProps) => {
  return (
    <img
      alt="Zentake Logo"
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
