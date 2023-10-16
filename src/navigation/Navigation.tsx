import { Home, SignIn} from '../Pages';
import { TweetList } from '../Components/TweetList';
import { Route, Routes } from 'react-router-dom';
// export const router = createBrowserRouter([
//     {
//         path: '/home',
//         element: <Home/>,
//         children: [
//             {
//                 path: '/home',
//                 element:  <TweetList/>
//             },
//             {
//                 path: '/home/search',
//                 element:  <></>
//             },
//         ]
//     },
//     {
//         path: '/login',
//         element: <SignIn/>
//     }
// ])

export const AppRoutes = () => {
    return <Routes>
    <Route index path='/home/*' element={<Home/>}/>
    <Route path='/login' element={<SignIn/>}/>
  </Routes>
}