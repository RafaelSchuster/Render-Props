import React, { Component } from 'react'
import HocController from './HocController'

function StateBook(FeatureComponent) {
    const StateProBook = HocController(FeatureComponent)

    return (
        class StateBookClass extends Component {
            constructor(props) {
                super(props)
                this.state = {
                    proMode: false
                }
            }

            render() {
                return (
                    <div>
                        <input type="checkbox" name="" id="" onChange={() => this.setState({ proMode: !this.state.proMode })} />
                        <StateProBook pro={this.state.proMode} {...this.props} />
                    </div>
                )
            }
        }

    )
}

export default StateBook
