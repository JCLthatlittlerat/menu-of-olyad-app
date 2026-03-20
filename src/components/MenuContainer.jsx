import React, { useState } from 'react'
import MenuButtons from './MenuButtons'
import data from '../data'
import Card from './Card'
function MenuContainer() {
  const uniqueCategories = ['All',...new Set(data.map(item=> item.category))];
  const [filteringCatagory, setFilteringCategory]=useState(data);
  // const {id, title, category, price, img, desc} = data

//  useEffect(() => { console.log({ id, title, category, price, img, }) })
function filterData(filter){
  if(filter==='All'){
    setFilteringCategory(data);
  }
  else{
    const filteredItems = data.filter(item => item.category === filter)
      setFilteringCategory(filteredItems)
  }
}

  return (
    <main>
        <header className="App-header">
        <h1>Our Menu</h1>
        <div className='underline'></div>
        </header>

        <section className="filteringButtons">
          {/* <MenuButtons category={uniqueCategories}  /> */}
        {
          uniqueCategories.map((item,index)=>{
            return(<MenuButtons key={index} category={item} filterData={filterData} />)
            })
        }
        </section>

        <section className="cardsSection">
          {
            filteringCatagory.map((items,index)=>{
              return(
                <Card key={items.id} title={items.title} description={items.desc} image={items.img} price={items.price} />
              )
            })
          }
        </section>
    </main>
  )
}

export default MenuContainer