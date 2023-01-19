import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import PizzaBlock from '../components/PizzaBlock/PizzaBlock'
import Seletons from '../components/PizzaBlock/Seletons'
import Sort from '../components/Sort'

const Home = ({ searValue }) => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [categoriesId, setCategoriesId] = useState(0)

  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  })
  const sortBy = sortType.sortProperty.replace('-', '')
  const order = sortType.sortProperty.includes('-' ? 'asc' : 'desc')
  const category = categoriesId > 0 ? `category=${categoriesId}` : ''
  const search = searValue ? `&search=${searValue}` : ''

  useEffect(() => {
    setIsLoading(true)
    fetch(
      `https://637e2f379c2635df8f9b8cb7.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => {
        return res.json()
      })
      .then((arr) => {
        setItems(arr)
        setIsLoading(false)
      })
    window.scrollTo(0, 0)
  }, [categoriesId, sortType, search])

  const pizzas = items
    //! Поиск по front
    //   .filter((obj) => {
    //    if (obj.title.toLowerCase().includes(searValue.toLowerCase())) {
    //      return true
    //    }
    //    return false
    //  })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />)

  const skeletons = [...new Array(6)].map((_, index) => (
    <Seletons key={index} />
  ))

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoriesId}
          onClickCategory={(i) => setCategoriesId(i)}
        />
        <Sort value={sortType} onClickSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
    </>
  )
}

export default Home
