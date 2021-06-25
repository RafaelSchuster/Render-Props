import React from 'react';
import '../Styles/Main.css';

function Main(props) {
    const loopStr = () => {
        const arrChar = [];
        for (const ch of props.str) arrChar.push(<span>{ch},</span>)
        return arrChar
    }
    const func = (firstName, lastName, ...rest) => {
        return <div>
            <div>{firstName} {lastName}</div>
            {rest.map(el => <div>{el}</div>)}
        </div>
    }
    return (
        <React.Fragment>
            <div className="list">
                {props.products && props.products.map(product => {
                    return <div>{product}</div>
                })}
                {props.children}
                {props.str && loopStr()}
                {func('Bob', 'Soba', 'Nice', 'Fat', 'Lazy')}
                {props.info}
            </div>
        </React.Fragment>
    )
}

export default Main
