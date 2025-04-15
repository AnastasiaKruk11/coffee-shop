import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export default function CheckBill( {sumPrice, setModal} ) {
    
    return (
        <>
            <Dialog open>
                <DialogTitle>{'Подтверждение оформления заказа'}</DialogTitle>
                <DialogContent>{`Сумма к оплате: ${sumPrice} BYN`}</DialogContent>
                <DialogActions>
                    <Button variant='contained' color='inherit' onClick={() => setModal(false)}>Перейти к оплате</Button>
                    <Button variant='outlined' color='warning' onClick={() => setModal(false)}>Отменить</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}