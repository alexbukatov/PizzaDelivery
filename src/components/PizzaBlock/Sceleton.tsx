import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton:React.FC = (props) => (
    <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="106" y="175" rx="0" ry="0" width="1" height="0" /> 
    <circle cx="138" cy="121" r="121" /> 
    <rect x="-2" y="307" rx="10" ry="10" width="280" height="88" /> 
    <rect x="4" y="412" rx="10" ry="10" width="85" height="30" /> 
    <rect x="-3" y="259" rx="10" ry="10" width="280" height="27" /> 
    <rect x="125" y="404" rx="30" ry="30" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton;