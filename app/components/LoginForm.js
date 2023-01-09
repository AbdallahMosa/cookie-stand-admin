import {useState, useContext} from 'react';
import {AuthContext} from '../contexts/auth'


export default function LoginForm() {

    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');
    const {login} = useContext(AuthContext);
    
    function usernameChangeHandler(e) {
        SetUsername(e.target.value);
    }
    
    function passwordChangeHandler(e){
        SetPassword(e.target.value);
    }

    function submitHandler(e){
        e.preventDefault();
        // call login function fron context
        login({
            username,
            password
        });

    }
  return(
    <div >
    <form onSubmit={submitHandler} class="max-w-lg mx-auto h-screen ">
      <div class="mb-4">
        <label class="block text-md font-light mb-2 text-black dark:text-yellow-300" for="username">
          Username
        </label>
        <input
          class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="username"
          id=""
          placeholder="Username"
          onChange={usernameChangeHandler}
        ></input>
      </div>
      <div class="mb-4">
        <label class="block text-md font-light mb-2 text-black dark:text-yellow-300" for="password">
          Password
        </label>
        <input
          class="w-full bg-drabya-gray border-gray-500 appearance-none border p-4 font-light leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          name="password"
          id=""
          placeholder="Password"
          onChange={passwordChangeHandler}
        ></input>
      </div>

      <div class="flex items-center justify-between mb-5">
        <button
          class="bg-indigo-600 hover:bg-blue-700 text-white font-light py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          LOGIN
        </button >
        <a
          class="inline-block align-baseline font-light text-sm text-indigo-600 hover:text-indigo-500"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
      <p class="text-center text-md font-light">
        Don't have an account?{" "}
        <a class="font-light text-md text-indigo-600">Create</a>
      </p>
    </form>
    </div>
  );
}
