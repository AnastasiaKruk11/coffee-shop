import { useState, useEffect } from "react"
import ItemCut from "../ItemCut/ItemCut"
import SubmitBtn from "../SubmitBtn/SubmitBtn"
import classes from './Order.module.css'

export default function Order({items, title, changeItem, sortBy}) {
    const [chosenItems, setChosenItems] = useState([])
    let [sumPrice, setSumPrice] = useState(0)

    useEffect(() => {
        setChosenItems(
            [...items].filter(item => sortBy ? item[[sortBy]] : item.chosen)
        )
    }, [items, sortBy])

    useEffect(() => {
        sumPrice = 0;
        let sum = 0;     
            
            chosenItems.length ? chosenItems.forEach((item) => {
                
                return sum += item.price
                
            }) : 0,
            
            setSumPrice(sumPrice + sum)
        
    }, [chosenItems])
    
    return (
        <div className={classes.wrapper}>
            <div className={classes['list-title']}>{title}</div>
            <div className={classes['order']}>
                {
                    chosenItems.length 
                        ? chosenItems.map((item) => {
                            return <ItemCut item={item} key={item.id} changeItem={changeItem} />
                        })
                        : 'Здесь пока пусто :)'
                }
            </div>
                {
                    chosenItems.length
                    ? <h3 className={classes['final-price']}>К оплате: {`${sumPrice} BYN`}</h3> : ''
                }
        <SubmitBtn count={chosenItems.length} sumPrice={sumPrice} />
        </div>
        
    )
}