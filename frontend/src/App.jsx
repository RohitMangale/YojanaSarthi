
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import NotFound from './components/NotFound'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/" element={<Home />} />

        {/* <Route element={<GuestRoute />}> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        {/* </Route> */}

        {/* Protected Routes */}
        {/* <Route element={<ProtectedRoute allowedRoles={"user"} />}>
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/userdashboard" element={<User />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={"mess_staff"} />}>
          <Route path="/messdashboard" element={<MessPage />} />
          <Route path="/dashboard/addfooditem" element={<AddItemForm />} />
        </Route> */}

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
