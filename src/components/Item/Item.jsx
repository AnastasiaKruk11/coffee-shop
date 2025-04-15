import { useState } from 'react';
import classes from './Item.module.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Item({item, changeItem}) {
    const [isChosen, setIsChosen] = useState(item.chosen)

    const onChangeChosenStatus = () => {
        setIsChosen(item.chosen=true)
        setTimeout(() => {
            changeItem(item.id, {
                chosen: !isChosen
            })
        }, 50)
    }

    return (
        <div className={classes.item}>
            <div className={classes['item-button']} onClick={() => onChangeChosenStatus()}>
                <AddShoppingCartIcon
                fontSize='large'
                />
            </div>
            <div className={classes['item-info']}>
                <h2 className={classes['item-info__title']}>{item.title}</h2>
                <p className={classes['item-info__description']}>{item.description }</p>
                <h3 className={classes['item-info__price']}>{`${item.price} BYN`}</h3>
                <img className={classes['item-info__image']} src={item.image} />
            </div>           
        </div>
    )
}