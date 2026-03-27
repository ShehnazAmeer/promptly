import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom"
import Applayout from "./ui/Applayout";
import Error from "./ui/Error";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFount";
import PromptlyChat from "./pages/Chat";

const router = createBrowserRouter([
    {
        element: <Applayout />,
        error: <Error />,
        children: [
            {path:'/promptlyChat', element: <PromptlyChat/> },
            { path: '/notes', element: <Notes /> },
            {path:'/settings',element: <Settings/>},
        ],  
    },
    { path: '/', element: <Home /> },
    {path:'/home',loader:()=>redirect('/')},
    { path: '/login', element: <Login /> },
    { path: 'signup', element: <Signup /> },
    {path:'*', element: <PageNotFound/> }
    
]);
export default function App() {
    return (
       <RouterProvider router={router}/>
    )
}