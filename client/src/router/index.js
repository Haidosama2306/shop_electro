import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import HomePage from '../pages/Home'
import DetailPage from '../pages/Detail'


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={''} >
            <Route element={<HomePage />} path='' />
            <Route element={<DetailPage />} path='/detail' />
        </Route>

    )
)