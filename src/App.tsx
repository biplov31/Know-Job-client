import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import MainLayout from './layouts/MainLayout';
import Posts from './pages/Posts/Posts';
import { Reviews } from './pages/Reviews/Reviews';
import { PostPage } from './pages/PostPage/PostPage';
import { ReviewPage } from './pages/ReviewPage/ReviewPage';
import { LoginPage } from './pages/LoginPage/LoginPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='/reviews' element={<Reviews />} />
      <Route path='/posts' element={<Posts />} />
      <Route path='/posts/:id' element={<PostPage />} />
      <Route path='/reviews/:id' element={<ReviewPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />
}

export default App