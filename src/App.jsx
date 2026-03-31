import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom"
import Applayout from "./ui/Applayout";
import Error from "./ui/Error";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFount";
import Promptly from "./pages/Promptly";
import ChatPrt from "./features/chat/ChatPrt";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
    {
        element: <Applayout />,
        error: <Error />,
        children: [
            {path:'/chatprt',element: <ChatPrt/>},
            { path: '/notes', element: <Notes /> },
            {path:'/settings',element: <Settings/>},
        ],  
    },
    { path: '/promptly', element: <Promptly /> },
    { path: '/', element: <Home /> },
    {path:'/home',loader:()=>redirect('/')},
    { path: '/login', element: <Login /> },
    { path: 'signup', element: <Signup /> },
    {path:'*', element: <PageNotFound/> }
    
]);

const queryClient = QueryClient();

export default function App() {
    return (
        <QueryClientProvider>
             <RouterProvider router={router}/>
        </QueryClientProvider>
    )
}