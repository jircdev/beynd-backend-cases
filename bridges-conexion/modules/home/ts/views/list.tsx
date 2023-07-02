import React from 'react'
import { useBinder } from '@beyond-js/react-18-widgets/hooks';

export function List ({ store }) {
    const [items, setItems] = React.useState([])

    useBinder([store], () => setItems(store.items))
    const output = items.map(item => (<li key={item}><p>{item}</p></li>))

    return (
        <ul>{output}</ul>
    )
}