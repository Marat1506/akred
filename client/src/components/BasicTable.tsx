import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import { deletePromotion, getByIdPromotion, getPromotion } from '../request';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hook';
import { changeCountSendPrize, changeCurrentElemId, changeModalSost, changeName } from '../hooks/reducer';


interface Promotion {
    _id: string,
    name: string,
    date: string,
    countSendPrize: number,

}

export default function BasicTable() {
    const [data, setData] = useState<Promotion[]>([]);
    const select = useAppSelector(state => state.akred.createModalSost);
    const changeSost = useAppSelector(state => state.akred.changeModalSost)
    const dispatch = useAppDispatch();

    
    const fetchData = async () => {
        const data = await getPromotion();
        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, [select, changeSost]);

    const handleDelete = async (id: string) => {
        const response = await deletePromotion(id);
        if (response) {
            fetchData();
        }
    };
    console.log("DATAAAAAAAF = ", data)

    const handleChange = async (id: string) => {
        dispatch(changeModalSost());
        console.log("ЭТО AЙДИ = ", id)
        dispatch(changeCurrentElemId({changeCurrentElemId: id}))
        const promotion = await getByIdPromotion(id);
        console.log("eggg = ", promotion);
        dispatch(changeName({name: promotion.name}))
        dispatch(changeCountSendPrize({countSendPrize: promotion.countSendPrize}))
      
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Название рассылки</TableCell>
                        <TableCell align="right">Дата рассылки</TableCell>
                        <TableCell align="right">Кол-во отправленных подарков</TableCell>

                        <TableCell align="right">Редактировать </TableCell>
                        <TableCell align="right">Удалить </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((prom) => (
                        <TableRow
                            key={prom._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="right">{prom.name}</TableCell>
                            <TableCell align="right">{prom.date}</TableCell>
                            <TableCell align="right">{prom.countSendPrize}</TableCell>

                            <TableCell align="right">
                                <Button onClick={() => handleChange(prom._id)}>
                                    <EditIcon />
                                </Button>
                            </TableCell>
                            <TableCell align="right">
                                <Button onClick={() => handleDelete(prom._id)}>
                                    <DeleteIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
