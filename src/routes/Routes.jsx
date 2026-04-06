import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import Books from "../pages/Books/Books";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/books',
        element: <Books />
      },
    ],
    errorElement: <ErrorPage />
  },
]);