import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  styled,
} from '@mui/material'
import { LocalOffer as Badge } from '@mui/icons-material'

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`

const StyledBadge = styled(Badge)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`
const ColumnText = styled(TableRow)`
font-size: 14px;
& > td {
    font-size: 14px;
    margin-top: 10px;
    border: none;
}
`
const ProductDetail = ({ product }) => {
  const fassured =
    'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)
  const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: '#878787', fontSize: 18 }}>
        8 Rating & 1 Reviews
        <Box component="span">
          <img
            src={fassured}
            alt="imag"
            style={{ width: 77, marginLeft: 20 }}
          />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: '#878787' }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: '#388E3C' }}>
          {product.price.discount}
        </Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <StyledBadge />
          Bank Offer 10% Instant Discount on ICICI Bank Credit Card and EMI Txns
          up to ₹1250 on orders of ₹5000 and above T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Extra ₹500 Off on Bikes & Scooters on purchase of ₹30,000 or more T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Bank Offer Flat ₹500 off on HDFC Bank Credit Card EMI Trxns on orders
          priced between ₹10,000 to ₹14,999 T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Partner Offer Purchase now & get 1 surprise cashback coupon in Future
          Know More
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: '#2874f0' }}>
                SuperComNet
              </Box>
              <Typography>GST invoice Available</Typography>
              <Typography>
                View more Seller staring from ₹{product.price.cost}
              </Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
         <TableCell colSpan={2}>
            <img src={adURL} style={{width: 390}} alt='flipkart pionts'/>
         </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: '#878787' }}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  )
}

export default ProductDetail
