// import React, { useState } from 'react'
// import MenuButtons from './MenuButtons'
// import data from '../data'
// import Card from './Card'
// import Navbar from "./Navbar";
// function MenuContainer() {
//   const uniqueCategories = ['ሁሉም', ...new Set(data.map(item => item.category))];
//   const [filteringCatagory, setFilteringCategory] = useState(data);
//   // const {id, title, category, price, img, desc} = data

//   //  useEffect(() => { console.log({ id, title, category, price, img, }) })
//   function filterData(filter) {
//     if (filter === 'ሁሉም') {
//       setFilteringCategory(data);
//     }
//     else {
//       const filteredItems = data.filter(item => item.category === filter)
//       setFilteringCategory(filteredItems)
//     }
//   }

//   return (
//     <main>
//       <Navbar />
//       <header className='App-header'>
//         <h2 className='text-5xl mb-2 pb-2'>የምግብ ዝርዝር</h2>
//         <div className='underline'></div>
//       </header>

//       <section className="filteringButtons">
//         {/* <MenuButtons category={uniqueCategories}  /> */}
//         {
//           uniqueCategories.map((item, index) => {
//             return (<MenuButtons key={index} category={item} filterData={filterData} />)
//           })
//         }
//       </section>

//       <section className="cardsSection">
//         {
//           filteringCatagory.map((items, index) => {
//             return (
//               <Card key={items.id} title={items.title} description={items.desc} image={items.img} price={items.price} />
//             )
//           })
//         }
//       </section>
//     </main>
//   )
// }

// export default MenuContainer


import React, { useEffect, useState } from 'react'
import MenuButtons from './MenuButtons'
import data from '../data'
import Card from './Card'
import Navbar from "./Navbar";
function MenuContainer() {
  const [lang, setLang] = useState('amharic')
  const [category, setCategory] = useState('')
  const currentMenu = data[lang] || []
  const uniqueCategories = [`${category}`, ...new Set(currentMenu.map(item => item.category))]
  const [filteringCatagory, setFilteringCategory] = useState(currentMenu)

  useEffect(() => {
    lang === 'amharic' ? setCategory('ሁሉም') : lang === 'oromo' ? setCategory('Hundumaa') : setCategory('All')
    setFilteringCategory(data[lang] || [])
  }, [lang])

  function filterData(filter) {
    if (filter === 'ሁሉም' || filter === 'All' || filter === 'Hundumaa') {
      setFilteringCategory(currentMenu)
    } else {
      const filteredItems = currentMenu.filter(item => item.category === filter)
      setFilteringCategory(filteredItems)
    }
  }

  function changeLang(newLang) {
    setLang(newLang)
    console.log(newLang)
  }

  return (
    <main>
      <Navbar changeLang={changeLang} lang={lang} />
      <header className='App-header'>
        <h2 className='text-5xl mb-2 pb-2'>{lang === 'amharic' ? 'የምግብ ዝርዝር' : lang === 'oromo' ? 'Tarree nyaataa' : 'Menu'}</h2>
        <div className='underline'></div>
      </header>

      <section className="filteringButtons">
        {/* <MenuButtons category={uniqueCategories}  /> */}
        {
          uniqueCategories.map((item, index) => {
            return (<MenuButtons key={index} category={item} filterData={filterData} />)
          })
        }
      </section>

      <section className="cardsSection">
        {
          filteringCatagory.map((items, index) => {
            return (
              <Card key={items.id} title={items.title} description={items.desc} image={items.img} price={items.price} />
            )
          })
        }
      </section>
    </main>
  )
}

export default MenuContainer