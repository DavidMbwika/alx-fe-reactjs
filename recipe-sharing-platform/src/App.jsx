/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/add-recipe" element={<AddRecipeForm />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
