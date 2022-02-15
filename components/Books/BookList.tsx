import styled from 'styled-components'
import Slick from './BooksCarousel';
import {book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11, book12, book13, book14, book15} from "../../public/images/books";

interface itemsProps {
  item: StaticImageData,
  name: string
}

const items:itemsProps[] = [
  {
    item: book1,
    name: 'book1'
  },
  {
    item: book2,
    name: 'book2'
  },
  {
    item: book3,
    name: 'book3'
  }, 
  {
    item: book4,
    name: 'book4'
  }, 
  {
    item: book5,
    name: 'book5'
  }, 
  {
    item: book6,
    name: 'book6'
  }, 
  {
    item: book7,
    name: 'book7'
  }, 
  {
    item: book8,
    name: 'book8'
  },
  {
    item: book9,
    name: 'book9'
  }, 
  {
    item: book10,
    name: 'book10'
  },    
  {
    item: book11,
    name: 'book11'
  }, 
  {
    item: book12,
    name: 'book12'
  }, 
  {
    item: book13,
    name: 'book13'
  },
  {
    item: book14,
    name: 'book14'
  },
  {
    item: book15,
    name: 'book15'
  }, 

]

const BookList = () => {
  return (
    <Slick cssEase='linear'>
      {items.map((item, idx) => (
        <SliderItem key={idx}>
          <Img src={`/images/books/book${idx + 1}.png`} alt={item.name} />
        </SliderItem>
      ))}
    </Slick>
  );
}

const SliderItem = styled.div`
`

const Img = styled.img`
  background-position: center center;
  background-size: cover;
  margin-left: 15px;
  height: 135px;
  display: inline-block;
  width: 102px !important;
  
  @media (min-width: 1200px){
    margin-left: 50px;
    height: 250px;
    width: 200px !important;
  }

  @media screen and(min-width: 768px) {
    margin-left: 50px;
    height: 250px;
    width: 200px !important;
  }
`

export default BookList;