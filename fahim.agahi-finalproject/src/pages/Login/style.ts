import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles((theme: Theme) => ({
body1: {
    height: '830px',
    overflow: 'hidden',
    width: '100%',
    margin: '0px',
    backgroundColor:'#3574b4',
    display: 'flex',
    flexDirection: 'column'
    
},  
h1: {
    backgroundColor: '#3574b4',
    width: '100%',
    height: '50px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    position: 'sticky',
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    fontWeight: 'bold',
    fontSize: 'large',
    marginTop: '0px'
},
title:{
    marginLeft: '10%'
},
buttons:{
    display: 'flex',
    width: '100%',
    height: '800px',
    justifyContent: 'center',
    alignItems: 'center', 
},
button:{
    width: '180px !important',
    height: '40px',
    margin: '5px',
    backgroundColor: '#aacdea',
}

}));



