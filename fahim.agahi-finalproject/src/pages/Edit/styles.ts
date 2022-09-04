import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles((theme: Theme) => ({
    body: {
        height: '100%',
        width: '100%',
        margin: '0px'
      },
      H1: {
        backgroundColor: '#3574b4',
        width: '100%',
        height: '50px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
        fontWeight: '100',
        fontSize: 'large',
        marginTop: '0px'
      },
      textAlign: {
        marginLeft: '10%'
      },
      div: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '12px',
        marginLeft: '10%',
        marginRight: '10%'
      },
      p1: {
        fontWeight: '600',
        fontSize: '21px',
        fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
      },
      textarea: {
        resize: 'none',
        backgroundColor: '#e9eaeb',
        color: '#a2a1a1',
        fontWeight: '300',
        fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
        width: '100%',
        borderTop: '0px',
        borderRight: '0px',
        borderLeft: '0px',
        borderTopRightRadius: '4px',
        borderTopLeftRadius: '4px',
        borderBottomColor: '#3574b4',
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
      cancelButton: {
        width: '100%',
        height: '50px',
        backgroundColor: '#3574b4',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        fontWeight: 'lighter',
        marginLeft: '4px'
      },
      parent: {
        height: '600px',
        width: '100%',
        top: '50%',
        marginTop: '20px',
        borderTopRightRadius: '25px',
        borderTopLeftRadius: '25px',
        backgroundColor: '#3574b4'
      },
      h2: {
        color: 'white',
        fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
        fontWeight: '100',
        paddingTop: '30px',
        paddingLeft: '40px'
      },
      child: {
        backgroundColor: '#aacdea',
        height: '600px',
        width: '100%',
        top: '50%',
        borderTopRightRadius: '25px',
        borderTopLeftRadius: '25px'
      },
      text: {
        paddingTop: '200px'
      },
      text2: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '24px',
        overflow: 'auto'
      },
      buttonComponent:{
        display: 'flex',
        margin: '6px'
      },
      addContentMenu: {
        marginTop: '2px',
        '& .MuiMenu-list': { width: '180px' }
      }
}));
