import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { QuestionnairePage } from './pages/QuestionnairePage';
import { PlanResultsPage } from './pages/PlanResultsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/questionnaire" element={<QuestionnairePage />} />
          <Route path="/results" element={<PlanResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;