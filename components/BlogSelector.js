import React, { useEffect, useState  } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import { Link } from '@mui/material';

export default function NativeSelectDemo() {
  const [options, setOptions] = useState([
    { value: 'https://medium.com/get-protocol/get-october-22-its-all-about-alignment-2a2749e92d05', label: 'Oct ‘22' },
    { value: 'https://medium.com/get-protocol/get-september-22-lock-it-in-bde32896a5d4', label: 'Sep ’22' },
    { value: 'https://medium.com/get-protocol/get-august-22-the-impact-of-v2-7186a6e78304', label: 'Aug ’22' },
    { value: 'https://medium.com/get-protocol/get-july-22-growing-a-global-protocol-97c8162fd0e7', label: 'Jul ’22' },
    { value: 'https://medium.com/get-protocol/get-june-22-one-giant-leap-for-the-protocol-67589c17e823', label: 'Jun ’22' },
    { value: 'https://medium.com/get-protocol/may-22-update-no-frontier-left-unturned-f40affb6798', label: 'May ’22' },
    { value: 'https://www.get-protocol.io/content/april-22-update-a-freshly-baked-release', label: 'Apr ’22' },
    { value: 'https://www.get-protocol.io/content/march-22-update-something-is-cooking', label: 'Mar ’22' },
    { value: 'https://www.get-protocol.io/content/february-22-update-a-momentum-shift', label: 'Feb ’22' },
    { value: 'https://www.get-protocol.io/content/the-get-protocol-2021-wrap-up', label: '2021 Wrap Up' },
    { value: 'https://www.get-protocol.io/content/november-21-update-there-is-a-gap-to-be-bridged', label: 'Nov ’21' },
    { value: 'https://www.get-protocol.io/content/october-21-update-all-systems-are-go', label: 'Oct ’21' },
    { value: 'https://www.get-protocol.io/content/september-21-update-otro-mas', label: 'Sep ’21' },
    { value: 'https://www.get-protocol.io/content/august-21-update-welcome-to-the-next-phase-of-get-protocol', label: 'Aug ’21' },
    { value: 'https://medium.com/get-protocol/get-update-july-21-gradually-then-suddenly-391e6639c581', label: 'Jul ’21' },
    { value: 'https://medium.com/get-protocol/get-update-may-21-the-next-chapter-4a3074126e3a', label: 'May ’21' }
  ])
  const [selectedUrl, setSelectedUrl] = useState("#");

  function handleChange(event) {
    setSelectedUrl(event.target.value);
  }

  return (
    <Container sx={{
      marginBottom: 4
    }}>
    <Box sx={{
        minWidth: 120,
      marginTop: 2
      }}>
        <h2>Offical GET Protocol blogs</h2>
      <FormControl fullWidth>
        <NativeSelect
          defaultValue={30}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
        <option value={""}></option>;
        {options.map((option, index) => {
          return <option key={index} value={option.value}>{option.label}</option>;
        })}
          </NativeSelect>
          <Link
            href={selectedUrl}
            target="_blank"
          >
            <Button sx={{
              maxWidth: 250,
              marginTop: 2,
            }} variant="contained" disableElevation>
            Visit Blog
            </Button>
          </Link>
      </FormControl>
      </Box>
    </Container>
  );
}