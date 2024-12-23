import React from 'react';
import Footer from './Footer';
import Items from './Items';
import Categoris from './Categoris';
import ShowFullItem from './ShowFullItem';
import Navbar from '../Navbar';

class Home extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      orders:[],
      currentItems:[],
      items: [ 
        {
          id:1,
          title: 'Шоколадное безумие',
          img:'первое.jpg',
          desc:'с орешками',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'assorted',
          price:'200'
        },
        {
          id:2,
          title: 'Шоколадная любовь',
          img:'второе.jpg',
          desc:'с любовь',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'milky',
          price:'200'
        },
        {
          id:3,
          title: 'Печенье счастья',
          img:'третье.jpg',
          desc:'с печенье',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'milky',
          price:'200'
        },
        {
          id:4,
          title: 'Шоколадное любви',
          img:'четвертое.jpg',
          desc:'с ягодами',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'assorted',
          price:'200'
        },{
          id:5,
          title: 'Ягодное счастье',
          img:'пятое.png',
          desc:'с ягодами ',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'candies',
          price:'200'
        },
        {
          id:6,
          title: 'Белое счастье',
          img:'шестое.png',
          desc:'с орешками',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'milky',
          price:'200'
        },
        {
          id:7,
          title: 'Красивая эстетика',
          img:'седьмое.png',
          desc:'с орешками',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'milky',
          price:'200'
        },
        {
          id:8,
          title: 'Новогоднее счастье',
          img:'восьмое.png',
          desc:'с фрукты',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'milky',
          price:'200'
        },
        {
          id:9,
          title: 'Вкусные кружочки',
          img:'девятое.png',
          desc:'с орешками',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'assorted',
          price:'200'
        },{
          id:10,
          title: 'Шоколадное безумие',
          img:'десятое.png',
          desc:'с орешками',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'dragees',
          price:'200'
        }
        ,{
          id:11,
          title: 'Ягодное безумие',
          img:'одинатцатое.png',
          desc:'с орешками',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'candies',
          price:'200'
        }
        ,{
          id:12,
          title: 'Дерево любви',
          img:'двинадцотое.png',
          desc:'с орешками',
          opis:'Тесто филло, солёная карамель, арахисовая паста, паста из орехов кешью, спекулос, криспи, белый шоколад , молочный шоколад ',
          opic:'Хранить в холодильнике при температуре не выше +12 градусов. Не подвергать воздействию прямых солнечных лучей',
          category:'dragees',
          price:'200'
        }
        
      ],
      ShowFullItem:false,
      fullItem:{},
    };
    this.state.currentItems =this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
    this.onShowTovar = this.onShowTovar.bind(this);



  }

  render() {
    return (
      <div className='wraper'> 
        <Navbar orders={this.state.orders} onDelete={this.deleteOrder} />
        
        <div className='uuio'>
          <h1 className='rty'>Католог</h1>
        <Categoris  chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder}  onShowItem={this.onShowItem} item={this.state.fullItem}/>}
       </div> <Footer/></div>
      
    );
  }
  
  onShowItem(item){
    this.setState({fullItem:item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

    
  onShowTovar(item){
    this.setState({fullItem:item})
    this.setState({showFullItem: !this.state.showFullItem})
  }
  chooseCategory(category){
    if(category ==='all'){
      this.setState({currentItems:this.state.items})
      return
    }
this.setState({
  currentItems: this.state.items.filter(el => el.category === category)
})    
  }
  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  addToOrder(item) {
    if (!this.state.orders.find(el => el.id === item.id)) {
      this.setState(prevState => ({ orders: [...prevState.orders, item] })); 
    }
  
}
}
export default Home; 