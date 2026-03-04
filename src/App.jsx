import { useState } from 'react'
import LandingPage from './components/LandingPage'
import QuestionPage from './components/QuestionPage'
import YesPage from './components/YesPage'
import GalleryPage from './components/GalleryPage'

const PAGES = { LANDING: 0, QUESTION: 1, YES: 2, GALLERY: 3 }

export default function App() {
  const [page, setPage] = useState(PAGES.LANDING)

  return (
    <div className="app">
      {page === PAGES.LANDING && (
        <LandingPage onNext={() => setPage(PAGES.QUESTION)} />
      )}
      {page === PAGES.QUESTION && (
        <QuestionPage onYes={() => setPage(PAGES.YES)} />
      )}
      {page === PAGES.YES && (
        <YesPage onGallery={() => setPage(PAGES.GALLERY)} />
      )}
      {page === PAGES.GALLERY && (
        <GalleryPage onBack={() => setPage(PAGES.YES)} />
      )}
    </div>
  )
}
