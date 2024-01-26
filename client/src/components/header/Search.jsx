import { useState, useEffect } from 'react'
import { InputBase, Box, styled, List, ListItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions'
import { Link } from 'react-router-dom';


const SearchContainer = styled(Box)`
  background: #fff;
  width: 30%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
`

const SearchIconwrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`
const ListWrapper = styled(List)`
  position: absolute;
  background: #ffffff;
  color: #000;
   margin-top: 36px;
`

const Search = () => {
  const [text, setText] = useState('')
  const { products } = useSelector(state => state.getProducts)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const getText = (text) => {
    setText(text)
  }

  return (
    <SearchContainer style={{ width: '35%' }}>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <SearchIconwrapper>
        <SearchIcon />
      </SearchIconwrapper>
      {
      text && 
        <ListWrapper>
          {
          products.filter((product) => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map((product) => (
              <ListItem>
                <Link to={`/product/${product.id}`} style={{textDecoration: 'none', color: 'inherit'}}
                onClick={() => setText('')}
                >
                {product.title.longTitle }
                </Link>
                </ListItem>
            ))}
        </ListWrapper>
      }
    </SearchContainer>
  )
}

export default Search;
