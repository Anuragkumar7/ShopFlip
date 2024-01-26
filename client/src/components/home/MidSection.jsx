import { Grid, styled } from "@mui/material";
import { imageURL, url} from "../../constants/data"; 

const Wrapper = styled(Grid)`
 margin-top: 10px;
 justify-content: space-between;
`
const Image = styled('img')(({ theme}) =>({ 
  marginTop: 20,
  width: '100%',
  display: 'flex',
  justifyContent: "space-between",
  [theme.breakpoints.down('md')]: {
    objectFit: 'cover',
    height: 120
  }
}));

const MidSection =() => {

    return(
        <>
<Wrapper lg={12} sm={12} md={12} xs={12} container>
        {
          imageURL.map(image => (
            <Grid item lg={4} md={4} sm={12} xs={12}>
            <img src={image} alt="images" style={{width: '100%'}} />
             </Grid>
          ))
        }
       </Wrapper>
        <Image src={url} alt="covid" />
        </>
    )

}

export default MidSection;