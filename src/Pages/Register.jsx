import { NavLink } from 'react-router-dom';

function Register() {
  return (
    <div className="grid place-content-center text-g dark:text-white">
      <br /><br />
      <div className="flex flex-col gap-4 px-12 py-12 rounded-md shadow-md bg-white dark:bg-h transition-colors duration-300">
        <h1 className="font-bold text-4xl">Register</h1>
        <p>Create your account and share your stories.</p>
        {/* <h1 className="text-center h-8 w-full flex items-center justify-center rounded-md shadow bg-d text-white">Registration Sent!</h1> */}
        <br />
        <div className="flex gap-4">
          <div className="flex flex-col">
            <label htmlFor="firstname">FirstName</label>
            <input type="text" id="firstname" className="h-10 rounded-md py-1 px-4 bg-a outline-none focus:ring-1 focus:ring-b dark:text-a dark:bg-g transition-colors duration-300" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname">LastName</label>
            <input type="text" id="lastname" className="h-10 rounded-md py-1 px-4 bg-a outline-none focus:ring-1 focus:ring-b dark:text-a dark:bg-g transition-colors duration-300" />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="h-10 rounded-md py-1 px-4 bg-a outline-none focus:ring-1 focus:ring-b dark:text-a dark:bg-g transition-colors duration-300" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="h-10 rounded-md py-1 px-4 bg-a outline-none focus:ring-1 focus:ring-b dark:text-a dark:bg-g transition-colors duration-300" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirm-pass">Confirm Password</label>
          <input type="password" id="confirm-pass" className="h-10 rounded-md py-1 px-4 bg-a outline-none focus:ring-1 focus:ring-b dark:text-a dark:bg-g transition-colors duration-300" />
        </div>
      </div>
      <br />
      <div className="mb-16 flex justify-between overflow-visible">
        <button className="bg-c border-c font-bold text-white w-fit rounded-md py-2 px-4 shadow-md hover:bg-c-hover hover:text-white transition-all">Submit</button>
        <NavLink to="/login">
          <h1 className="h-full flex items-end hover:text-c hover:underline decoration-c transition-all">Already have an account?</h1>
        </NavLink>
      </div>
    </div>
  )
}

export default Register;