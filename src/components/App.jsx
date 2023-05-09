import { Home } from 'pages/Home/Home';
import { GlobalStyles } from './GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import { Article } from 'pages/Article/Article';
import { Property } from 'pages/Property/Property';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/article" element={<Article />} />
          <Route path="/property" element={<Property />} />

          <Route path="*" element={<div>NOT FOUND</div>} />
        </Route>
      </Routes>
    </>
  );
};
