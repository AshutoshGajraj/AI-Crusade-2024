import { Routes, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { ReadingTips } from './components/tips/ReadingTips'
import { WritingTips } from './components/tips/WritingTips'
import { ListeningTips } from './components/tips/ListeningTips'
import { SpeakingTips } from './components/tips/SpeakingTips'
import { ListeningPractice } from './components/practice/ListeningPractice'
import { ListeningTest } from './components/practice/ListeningTest'
import { ReadingPractice } from './components/practice/ReadingPractice'
import { WritingTaskAcademic } from './components/practice/WritingTaskAcademic'
import { WritingTaskGeneral } from './components/practice/WritingTaskGeneral'
import { WritingTaskEssay } from './components/practice/WritingTaskEssay'
import { SpeakingPractice } from './components/practice/SpeakingPractice'
import { SpeakingPart1 } from './components/practice/SpeakingPart1'
import { Resources } from './components/Resources'
import { VocabularyTopics } from './components/VocabularyTopics'
import { TopicFlashCards } from './components/practice/TopicFlashCards'
import { FlashCardDifficulty } from './components/practice/FlashCardDifficulty'
import { FlashCardPractice } from './components/practice/FlashCardPractice'
import { AcademicReadingTest } from './components/practice/AcademicReadingTest'
import { NotFound } from './components/NotFound'
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation'

function App() {
  // Initialize keyboard navigation
  useKeyboardNavigation();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/reading/tips" element={<ReadingTips />} />
      <Route path="/reading/practice" element={<ReadingPractice />} />
      <Route path="/reading/practice/test/:sectionId" element={<AcademicReadingTest />} />
      <Route path="/writing/tips" element={<WritingTips />} />
      <Route path="/writing/task1/academic" element={<WritingTaskAcademic />} />
      <Route path="/writing/task1/general" element={<WritingTaskGeneral />} />
      <Route path="/writing/task2/essay" element={<WritingTaskEssay />} />
      <Route path="/listening/tips" element={<ListeningTips />} />
      <Route path="/listening/practice" element={<ListeningPractice />} />
      <Route path="/listening/practice/test/:sectionId" element={<ListeningTest />} />
      <Route path="/speaking/tips" element={<SpeakingTips />} />
      <Route path="/speaking/practice" element={<SpeakingPractice />} />
      <Route path="/speaking/practice/part1" element={<SpeakingPart1 />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/resources/vocabulary" element={<VocabularyTopics />} />
      <Route path="/resources/vocabulary/:topic" element={<TopicFlashCards />} />
      <Route path="/resources/flashcards" element={<FlashCardDifficulty />} />
      <Route path="/resources/flashcards/:difficulty" element={<FlashCardPractice />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App