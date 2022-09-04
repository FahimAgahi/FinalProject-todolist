import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles((theme: Theme) => ({
div1:{
    display: 'flex',
    flexDirection: 'column',
    rowGap: '12px',
    marginLeft: '10%',
    marginRight: '10%'
},
body1: {
    height: '100%',
    width: '100%',
    margin: '0px'
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
p1:{
    fontWeight: '600',
    fontSize: '21px',
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
},
textarea:{
    resize: 'none',
    backgroundColor: '#e9eaeb',
    color: 'black',
    fontWeight: '300',
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    paddingTop: '3px',
    paddingLeft: '3px',
    width: '100%',
    borderTop: '0px',
    borderRight: '0px',
    borderLeft: '0px',
    borderTopRightRadius: '4px',
    borderTopLeftRadius: '4px' 
    
},
addButton: {
    width: '100%',
    height: '50px',
    backgroundColor: '#3574b4',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    fontWeight: 'lighter',
    padding: '0px'
},
parent: {
    minHeight: '600px',
    height:'100%',
    width: '100%',
    top: '50%',
    marginTop: '20px',
    borderToRightRadius: '25px' ,
    borderTopLeftRadius: '25px' ,
    backgroundColor: '#3574b4'
},
h2:{
    color: 'white',
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
    fontWeight: '100',
    paddingTop: '30px',
    paddingLeft: '40px'
},
child:{
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#aacdea',
    height: '600px',
    width: '100%',
    top: '50%',
    borderTopRightRadius: '25px',
    borderTopLeftRadius: '25px' 
},
text:{
    paddingTop: '200px',
},
text2:{
    display: 'flex',
    justifyContent: 'center',
    fontSize: '24px',
    overflow: 'auto'
 },
 taskContainer:{
    backgroundColor:'white',
    width: '40%',
    height: '40%',
    margin: '40px !important',
    maxWidth: '400px',
    maxHeight: '400px',
    minWidth:'40%'
 },
 taskDetails:{
    margin: '5%'
 },
 stateButton:{
    width: '40%',
    minWidth: '80px',
    height: '30px',
    backgroundColor: '#3574b4',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'lighter',
    margin: '10px',
   
 },
 buttonContainer:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
 },
 taskDetailDescription:{
    minHeight: '130px',
    maxHeight: '130px',
    overflow: 'hidden !important',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 4,
    lineClamp: 4,
    WebkitBoxOrient: 'vertical',

 },
 contain:{
    // width: '100%',
    display:'flex',
    // flexDirection:'initial'
 }
}));



