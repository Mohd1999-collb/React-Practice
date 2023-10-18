import React from 'react'
import GetUserSort from './component/Get_Sort_USer/GetUserSort'
import Covid19 from './component/Covid-19/Covid19'
import Inc_Dec from './component/E-Commerce/Inc_Dec'
import Phone_Book from './component/PhoneBook/Phone_Book'
import Task_List from './component/TaskList/Task_List'
import TextEditor from './component/Text_Editor/TextEditor'
import SearchMovie from './component/Search_Movie/SearchMovie'
import AddBirdPost from './component/Add_Bird_Post/AddBirdPost'
import Navbar from './component/Routing/Navbar'
import { BrowserRouter } from 'react-router-dom'
import CounterProvider from './component/ContextApi/CounterProvider'
import Counter from './component/ContextApi/Counter'

const App = () => {
  return (
    <BrowserRouter>
      {/* <GetUserSort/> */}
      {/* <Covid19/> */}
      {/* <Inc_Dec/> */}
      {/* <Phone_Book/> */}
      {/* <Task_List/> */}
      {/* <TextEditor/> */}
      {/* <SearchMovie/> */}
      {/* <AddBirdPost/> */}
      {/* <Navbar/> */}
      <CounterProvider>
        <Counter/>
      </CounterProvider>
    </BrowserRouter>
  )
}

export default App