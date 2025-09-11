import React from 'react'
import { Route,Routes } from 'react-router-dom'
import AuthLayout from './components/auth/layout'
import AuthLogin from './pages/auth/login'
import AuthRegister from './pages/auth/register'
import AdminLayout from './components/admin-view/layout'
import AdminOrders from './pages/admin-view/orders'
import AdminFeatures from './pages/admin-view/features'
import AdminDashboard from './pages/admin-view/dashboard'
import AdminProducts from './pages/admin-view/products'
import StudentLayout from './components/student-view/layout'
import PageNotFound from './pages/page-not-found'
import StudentAccount from './pages/student-view/account'
import StudentListing from './pages/student-view/listing'
import StudentHome from './pages/student-view/home'
import StudentCheckout from './pages/student-view/checkout'
import CheckAuth from './components/common/CheckAuth'
import UnAuthPage from './pages/unauth-page/UnAuthPage'
import { useSelector } from 'react-redux'
import { checkAuth1 } from "./store/auth-slice";
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
const App = () => {
  const { user ,isAuthenticated} = useSelector((state)=>state.auth)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth1());
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path='/auth' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout/>
          </CheckAuth>
        }>
          <Route path='login' element={<AuthLogin/>} />
          <Route path='register' element={<AuthRegister/>}/>
        </Route>
        <Route path='/admin' element={<CheckAuth isAuthenticated={isAuthenticated} user={user} >
          <AdminLayout/>
        </CheckAuth>}>
           <Route path='orders' element={<AdminOrders/>} />
           <Route path='dashboard' element={<AdminDashboard/>} />
           <Route path='features' element={<AdminFeatures/>} />
           <Route path='products' element={<AdminProducts/>} />
        </Route>
        <Route path='/student' element={<CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <StudentLayout/>
        </CheckAuth>} >
        <Route path='account' element={<StudentAccount/>} />
        <Route path='listing' element={<StudentListing/>} />
        <Route path='home' element={<StudentHome/>} />
        <Route path='checkout' element={<StudentCheckout/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>} />
        <Route path='/unauth-page'   element={<UnAuthPage/>}/>
      </Routes>
    </div>
  )
}

export default App
