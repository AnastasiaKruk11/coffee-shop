import { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import classes from './ItemCut.module.css'

export default function ItemCut({item, changeItem}) {

    const [isChosen, setIsChosen] = useState(item.chosen)
    
        const onChangeChosenStatus = () => {
            setIsChosen(item.chosen=false)
            setTimeout(() => {
                changeItem(item.id, {
                    chosen: !isChosen
                })
            }, 50)
        }
    
    return (
        <div className={classes['item-cut']}>
            <div className={classes['item-cut-info']}>
                <h2 className={classes['item-cut-info__title']}>{item.title}</h2>
                <p className={classes['item-cut-info__price']}>{`${item.price} BYN`}</p>
            </div>
            <div className={classes['delete-button']}>
            <Button 
            variant="outlined" 
            startIcon={<DeleteIcon />} 
            size='small' 
            color='black'
            onClick={() => onChangeChosenStatus()}
            >
                Отмена
            </Button>
            </div>
        </div>
    )
}