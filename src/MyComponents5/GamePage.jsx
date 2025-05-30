import React from 'react'
import GameSearch from './GameSearch'
import AllGames from './AllGames'
import SlideGame from './SlideGame'
import Footer from "../components/Footer";


export default function GamePage() {
  return (
    <div>
      <SlideGame></SlideGame>
      <GameSearch></GameSearch>
    <AllGames></AllGames>
    <Footer />
    </div>
  )
}
