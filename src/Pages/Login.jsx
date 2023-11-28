import { NavLink } from 'react-router-dom';

function Login() {
  return (
    <div className="grid place-content-center text-g dark:text-white transition-colors duration-300">
      <br /><br />
      <div className="h-full flex flex-col gap-4 px-12 py-12 w-form bg-white dark:bg-h rounded-md shadow-md">
        <h1 className="font-bold text-4xl">Login</h1>
        <p>Login your account and share your stories.</p>
        {/* <h1 className="text-center h-8 w-full flex items-center justify-center rounded-md shadow bg-error text-white">Wrong Password!</h1> */}
        <br />
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="h-10 rounded-md py-1 px-4 outline-none focus:ring-1 bg-a focus:ring-b dark:text-a dark:bg-g" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="h-10 rounded-md py-1 px-4 outline-none focus:ring-1 bg-a focus:ring-b dark:text-a dark:bg-g" />
        </div>
      </div>
      <br />
      <div className="mb-16 flex justify-between overflow-visible">
        <button className="bg-c text-white w-fit font-bold rounded-md py-2 px-4 shadow-md hover:bg-c-hover transition-all">Login</button>
        <NavLink to="/register">
          <h1 className="h-full flex items-end hover:text-c hover:underline decoration-c transition-all">Create an account?</h1>
        </NavLink>
      </div>
    </div>
  )
}

export default Login;