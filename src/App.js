
import Login from './login/Login';
import Register from './register/Register';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const Layout =(props)=>(
    <div>
      <h1>Header</h1>
      {props.children}
      <h1>Footer</h1>
    </div>
  )

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>,
    },

    {
      path: "/register",
      element: <Register/>,
    }
  ]);

  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
