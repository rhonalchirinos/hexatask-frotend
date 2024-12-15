import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '../layouts/Layout';
import Home from './home/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import Tasks from './task/Tasks';
import ProtectedRoute from './provider/protected-route';
import Dashboard from './dashboard/Dashboard';
import LayoutTask from '../layouts/LayoutTask';
import TaskEdit from './task/TaskEdit';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>

          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <LayoutTask />
              </ProtectedRoute>
            }
          >
            <Route index element={<Tasks />} />
            <Route path="/tasks/:id" element={<TaskEdit />} />
          </Route>

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
