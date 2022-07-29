import React from 'react'
//import * as React from 'react';
// import Box from '@mui/material/Box'
// import Switch from '@mui/material/Switch'
// import Paper from '@mui/material/Paper'
// import Fade from '@mui/material/Fade'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import { Theme } from '@mui/material/styles'
import { Body } from './styled'
import logo from '../../Assets/logo-future-eats.png'

const SplashScreen = () => {
  return (
    <Body>
      <>
        <img src={logo} alt="logo do rappi4" />
      </>
    </Body>
  )
}
export default SplashScreen

// const icon = (
//   <Paper sx={{ m: 1 }} elevation={4}>
//     <Box component="" sx={{ width: 100, height: 100 }}>
//       <Box
//         component="polygon"
//         sx={{
//           fill: (theme: Theme) => theme.palette.common.white,
//           stroke: (theme) => theme.palette.divider,
//           strokeWidth: 1,
//         }}
//         points="0,100 50,00, 100,100"
//       />
//     </Box>
//   </Paper>
// );

// export default function SimpleFade() {
//   const [checked, setChecked] = React.useState(false);

//   useEffect(()=>{
//   setChecked(true)
//   },[])

//   const handleChange = () => {
//     setChecked((prev) => !prev);
//   };

// return (

//{
  /* <Box sx={{ height: 180 }}>
      {/* <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      /> */
//}
//{
  /* <Box sx={{ display: 'flex' }}>
        <Fade in={checked}>{icon}</Fade>
      </Box>
//     // </Box> */
//}

//   );
// }

// function SplashScreen() {
//   const [screen, setScreen] = useState(true);
//   const navigate = useNavigate();
//   const token = localStorage.getItem("tokenRappi4C");
//   useEffect(() => {
//     let timeout = setTimeout(() => {
//       setScreen(false);
//       navigate(token ? "/list" : "/login");
//     }, 2000);
//     return () => {
//       if (timeout) clearTimeout(timeout);
//     };
//   }, [navigate, token]);
//   return <div>{screen ? <FormSplash /> : <Login />}</div>;
// }
// export default SplashScreen;
