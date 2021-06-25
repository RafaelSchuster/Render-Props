import React from 'react'

function MainPass({ comp: MainComponentPass, ...rest }) {
    return (
        <div>
            <MainComponentPass {...rest} />
        </div>
    )
}

export default MainPass
