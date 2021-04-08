import React from "react"
import Header from "./header"

const Layout = ({sanityData, children}) => {
    const logoSrc = sanityData?.category?.logo?.asset?.url;
    const phone = sanityData?.category?.phone;
    return (
    <>
        <Header logo={ logoSrc } phone={ phone } />
        { children }
    </>
    )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
