import OrderList from './components/OrderList/OrderList'
import Order from './components/Order/Order'
import './App.css'
import { useState } from 'react'

function App() {

  const [items, setItems] = useState([
    {id: 1, title: 'Матча барбарелла-шоколад', description: 'Матча, сливки, сироп барбарелла, молоко, молочный шоколад, цветы жасмина', price: 9.5, image: '../../images/matcha.jpg', chosen: false},
    {id: 2, title: 'Кофейно-гранатовая карамель', description: 'Эспрессо, сок гранатовый, пюре роза-личи-грейпфрут, сироп сгущённое молоко, бадьян', image: 'coffee-shop/images/pomegranate.jpg', price: 9.5, chosen: false},
    {id: 3, title: 'Латте кленовый грильяж', description: 'Кофе, кленовый сироп, грильяжный топпинг, взрывная карамель', image: 'coffee-shop/images/maple.jpg', price: 9, chosen: false},
    {id: 4, title: 'Матча персик-земляника', description: 'Тонизирующий напиток на основе матча, натурального персикового сока и пюре земляники', image: 'coffee-shop/images/peach.jpg', price: 9, chosen: false},
    {id: 5, title: 'Капучино классический', description: 'Кофейный напиток итальянской кухни на основе эспрессо с добавлением молока и молочной пенки', image: 'coffee-shop/images/capuccino.jpg', price: 6.5, chosen: false},
    {id: 6, title: 'Раф солёная карамель', description: 'Бодрящий микс из солёной карамели, сливок, молока и эспрессо', image: 'coffee-shop/images/raf.jpg', price: 8, chosen: false},
    {id: 7, title: 'Американо', description: 'Напиток на основе эспрессо с добавлением горячей воды', image: 'coffee-shop/images/americano.jpg', price: 7, chosen: false},
  ])

  const onUpdateItem = (id, data) => {
    setItems([...items].map(item => item.id === id ? {...item, ...data} : item))
  }

  return (
    <>
      <div className='main-wrapper'>
        <OrderList 
        title='Меню' 
        items={items}
        changeItem = {onUpdateItem}
        />
        <Order
        title='Ваш заказ' 
        items={items}
        changeItem = {onUpdateItem}
        sortBy='chosen'
        />
      </div>
    </>
  )
}

export default App
