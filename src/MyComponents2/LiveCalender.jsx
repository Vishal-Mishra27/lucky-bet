import React from 'react'
import Header2 from '../MyComponent/Header2'
import GameList from './GameList'
import TimeZone from './TimeZone'
import Table2 from './Table2'
export default function LiveCalender() {
  return (
    <div>
        <Header2></Header2>
        <GameList />
        <TimeZone></TimeZone>
        <Table2></Table2>
    </div>
  )
}
