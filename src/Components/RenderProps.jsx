import React from 'react'

function RenderProps(props) {
    if (props.pro) {
        return (
            props.render("Render Props String Arg Bro")
        )
    }
    else {
        return <h1>Not Pro</h1>
    }

}

export default RenderProps
