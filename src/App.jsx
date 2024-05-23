import { useState } from "react"
import './App.css'
import ContentsList from './components/ContentsList'

import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function handleShowModal() {
    setModalIsVisible(true);
  }

  function handleHideModal() {
    setModalIsVisible(false);
  }

  return (
    <>
      <Header onCreatePost={handleShowModal} />
      <main className="h-lvh">
        <ContentsList
          isShowing={modalIsVisible}
          onStopPosting={handleHideModal}
        />
      </main>
      <Footer />
    </>
  )
}

export default App
