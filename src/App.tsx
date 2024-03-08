

import './App.css'
import TaskMang from './components/TaskMang'
import NewsPage from './components/NewsPage'
import { Tabs } from 'antd';
import WeatherPage from './components/WeatherPage'
function App() {

  return (
    <>
    <Tabs
    defaultActiveKey="1"
    className="tabs"
    items={[
      {
        label: 'Weather App',
        key: '1',
        children: <WeatherPage/>,
      },
      {
        label: 'News List',
        key: '2',
        children: <NewsPage/>,
      },
      {
        label: 'Task management',
        key: '3',
        children: <TaskMang/>,
      },
    ]}
  />
  </>
  )
}

export default App
