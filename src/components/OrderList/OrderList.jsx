import { useState, useEffect } from "react"
import Item from "../Item/Item"
import classes from './OrderList.module.css'

export default function OrderList({items, title, changeItem, sortBy}) {
    const [sortItems, setSortItems] = useState([items])

    useEffect(() => {
        setSortItems(
            [...items].filter(item => sortBy ? item[[!sortBy]] : !item.chosen)
        )
    }, [items, sortBy])

    return (
        <div className={classes.wrapper}>
            <div className={classes['list-title']}>{title}</div>
            <div className={classes['order-list']}>
                {
                    sortItems.length 
                        ? sortItems.map((item) => {
                            return <Item key={item.id} item={item} changeItem={changeItem} sortItems={sortItems}/>
                        })
                        : 'Ассортимент закончился :)'
                }
            </div>
        </div>
    )
}