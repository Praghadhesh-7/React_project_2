import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';


export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy14SBxTdimfTt4s7ENRBgeFE5mxsbw7CDXRgzdJL3nwztPUsZhsLdnq_X_heqdhYr6Gc&usqp=CAU" sx={{width: 80, height: 80}} />
    </Stack>
  );
}
