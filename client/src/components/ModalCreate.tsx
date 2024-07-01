import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { changeCountSendPrize, changeName, createModalSost } from '../hooks/reducer';
import { Button, TextField } from '@mui/material';
import BasicSelect from './SelectPrize';
import { createPromotion } from '../request';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
};

export default function BasicModal() {
    const open = useAppSelector(state => state.akred.createModalSost)
    const dispatch = useAppDispatch()
    const name = useAppSelector(state => state.akred.name)
    const countSendPrize = useAppSelector(state => state.akred.countSendPrize)

    const sendForm = async () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const data = await createPromotion({ name: name, date: `${new Date()}`, countSendPrize: countSendPrize })
        dispatch(createModalSost())
    }


    return (
        <Box>
            <Modal
                open={open}
                onClose={() => createModalSost()}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

                         <Typography>Создание акции </Typography>
                        <Button variant='contained' onClick={() => { dispatch(createModalSost()) }}>X</Button>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>Название рассылки</Typography>
                        <TextField fullWidth value={name} onChange={(e) => dispatch(changeName({ name: e.target.value }))} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>Выбрать подарок</Typography>
                        <BasicSelect />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>Кол-во подарков</Typography>
                        <TextField fullWidth value={countSendPrize} onChange={(e) => dispatch(changeCountSendPrize({ countSendPrize: e.target.value }))} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>Кол-во дней на взятие подарка</Typography>
                        <TextField fullWidth />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>Описание акции</Typography>
                        <TextField fullWidth />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>Номера карт</Typography>
                        <TextField fullWidth />
                    </Box>

                    <Button variant='contained' sx={{ float: 'right' }} onClick={sendForm}>Отправить</Button>

                </Box>
            </Modal>
        </Box>
    );
}
