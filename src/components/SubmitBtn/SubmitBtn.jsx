import classes from './SubmitBtn.module.css'
import CheckBill from '../CheckBill/CheckBill'
import Dialog from '@mui/material/Dialog'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import Badge from '@mui/material/Badge'
import { useState } from 'react'

export default function SubmitBtn({count, sumPrice}) {
    const [modal, setModal] = useState(false)

    return (
        <>
            <Dialog open={modal} onClose={() => setModal(false)}>
                <div>
                    <CheckBill sumPrice={sumPrice} setModal={setModal} />
                </div>
            </Dialog>
            <div onClick={() => count > 0 ? setModal(true) : ''} className={classes['submit-btn']}>
                <ShoppingCartCheckoutIcon sx={{ width: 30, color: 'white'}} fontSize='large' />
                <Badge badgeContent={count} color="error" sx={{top: 20, right: 20, position: 'absolute'}}/>
            </div>     
        </>
    )
}