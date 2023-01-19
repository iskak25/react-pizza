

import React from "react"
import ContentLoader from "react-content-loader"

const Seletons = (props) => (
   <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={465}
      viewBox="0 0 280 465"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
   >
      <circle cx="126" cy="126" r="126" />
      <rect x="0" y="NaN" rx="0" ry="0" width="230" height="NaN" />
      <rect x="0" y="259" rx="31" ry="31" width="279" height="25" />
      <rect x="0" y="303" rx="26" ry="26" width="270" height="82" />
      <rect x="0" y="403" rx="27" ry="27" width="120" height="45" />
      <rect x="138" y="403" rx="6" ry="6" width="120" height="45" />
   </ContentLoader>
)

export default Seletons