

import './App.css'
import { Box, Button } from '@mui/material'
import BasicTable from './components/BasicTable'
import BasicModal from './components/ModalCreate'
import { useAppDispatch } from './hooks/hook'
import { changeCountSendPrize, changeName, createModalSost } from './hooks/reducer'
import ModalChange from './components/ModalChange'

function App() {

  const dispatch = useAppDispatch()

  return (
    <Box>
      <Button variant='contained' onClick={() => { dispatch(createModalSost()), dispatch(changeName({name: ''})), dispatch(changeCountSendPrize({countSendPrize: ''})) }}>Создать</Button>
      <BasicTable />
      <BasicModal />
      <ModalChange />
    </Box>
  )
}

export default App
