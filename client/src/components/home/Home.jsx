import { useEffect } from 'react'

import { Box, styled } from '@mui/material'
// Components
import NavBar from './NavBar'
import Banner from './Banner'
import Slide from './Slide';
import { getProducts } from '../../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import MidSlide from './MidSlide';
import MidSection from './MidSection';

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`

const Home = () => {
  
  const {products} = useSelector(state => state.getProducts)

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getProducts())
    }, [dispatch])
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} title="Deal of the day" timer= {true}/>
        <MidSection/>
        <Slide products={products} title="Discount for You" timer= {false}/>
        <Slide products={products} title="Suggesting Items" timer= {false}/>
        <Slide products={products} title="Top Selection" timer= {false}/>
        <Slide products={products} title="Reccommended Items" timer= {false}/>
        <Slide products={products} title="Top Deals on Accessories" timer= {false}/>

      </Component>
    </>
  )
}

export default Home
