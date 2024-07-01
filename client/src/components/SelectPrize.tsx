
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getPrize } from '../request';
import { useEffect, useState } from 'react';

interface Prize {
  count: number,
  dateKill: string,
  name: string,
  naminal: number
}
export default function BasicSelect() {
  const [age, setAge] = useState('');
  const [prize, setPrize] = useState<Prize[]>([])

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPrize()
      setPrize(data)
    }

    fetchData()
  }, [])

  console.log("prize = ", prize)

  return (
    <Box sx={{ minWidth: 220 }} >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">naminal</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="naminal"
          onChange={handleChange}
        >
          {prize.map((p) => (
            <MenuItem value={10}>{p.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
