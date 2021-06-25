import React, { Component } from 'react'

function ProCombine(FeatureComponent, label) {
    return (
        class ProCombineClass extends Component {
            render() {
                return (
                    <div>
                        <div>{label}</div>
                        <FeatureComponent {...this.props} />
                    </div>
                )
            }
        }
    )
}

export default ProCombine
