import React from 'react'

function HocController(FeatureComponent) {
    return function (props) {
        if (props.pro) {
            let { pro, ...childrenProps } = props
            return <FeatureComponent {...childrenProps} />
        }
        else {
            return <h1>Not Pro</h1>
        }
    }
}

export default HocController
