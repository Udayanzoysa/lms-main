import { useRoutes } from "react-router-dom";
import Layout from "./common/layout/layout";
import HomePage from "./user/home/home.page";
import MainPage from "./main/component/NavBar";
import ArticleCard from "./main/component/ArticleCard";

export let RouterConfig = () => {
  let routes = [
    {
      path: "/",
      element: <MainPage />,
      children: [{ index: true, element: <ArticleCard /> }]
    },
    {
      path: "home",
      element: <Layout />,
      children: [{ index: true, element: <HomePage /> }],
    },
  ];

  let element = useRoutes(routes);
  return element;
};
