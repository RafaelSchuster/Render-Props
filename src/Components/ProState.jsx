import React, { Component } from 'react'
import HocController from './HocController'
import ProContent from './ProContent'

export default class ProState extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pro: false
        }
        this.HocState = HocController(ProContent)
    }

    render() {
        return (
            <>
                <div>
                    <input type="checkbox" name="" id="" onChange={() => this.setState({ pro: !this.state.pro })} />
                </div>
                <this.HocState pro={this.state.pro} proStr="State Hoc Pro" />
            </>
        )
    }
}
