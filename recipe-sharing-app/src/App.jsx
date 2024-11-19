import { Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing Application</h1>
      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <div>
              <AddRecipeForm />
              <RecipeList />
            </div>
          }
        />
        {/* Recipe details route */}
        <Route path="/recipes/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
};

export default App;
