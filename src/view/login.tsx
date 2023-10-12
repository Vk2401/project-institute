import { Carousel } from "@material-tailwind/react";
 
export function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl" autoplay loop>
      <img
        src="https://etimg.etb2bimg.com/photo/75729614.cms"
        alt="image 1"
        className="h-full w-full object-cover"
        draggable="false"
      />
      <img
        src="https://assets-homepages-learning.3plearning.net/wp-content/uploads/2020/06/blog-20-student-engagement-strategies-captivating-classroom.png"
        alt="image 2"
        className="h-full w-full object-cover"
        draggable="false"
      />
      <img
        src="https://assets.website-files.com/634ef78fb6faa83c8375fe5e/63783ef59d37fd25848828fe_10-books-every-leader-should-read.webp"
        alt="image 3"
        className="h-full w-full object-cover"
        draggable="false"
      />
    </Carousel>
  );
}

export function Login() {
  return (
    <section className=" min-h-screen flex items-center justify-center px-2">
    <div className="bg-white z-10 p-5 flex rounded-2xl shadow-lg max-w-3xl">
      <div className="md:w-1/2 px-5">
        <h2 className="text-2xl font-bold text-gray-800">Login</h2>
        <p className="text-sm mt-4 font-semibold text-gray-700">If you have an account, please login</p>
        <form className="mt-6" action="#" method="POST">
          <div>
            <label className="block text-gray-600">Email Address</label>
            <input type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"  required />
          </div>
  
          <div className="mt-4">
            <label className="block text-gray-600">Password</label>
            <input type="password" name="" id="" placeholder="Enter Password" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required />
          </div>
  
          <div className="text-right mt-2">
            <a href="#" className="text-sm font-semibold text-blue-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
          </div>
  
          <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Log In</button>
        </form>

        <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
          <hr className="border-gray-500" />
          <p className="text-center text-sm">OR</p>
          <hr className="border-gray-500" />
        </div>

        <button className="bg-red-400 border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:bg-red-900">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#ffffff" d="M23 11h-2V9h-2v2h-2v2h2v2h2v-2h2M8 11v2.4h4c-.2 1-1.2 3-4 3c-2.4 0-4.3-2-4.3-4.4c0-2.4 1.9-4.4 4.3-4.4c1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 5.7 9.9 5 8 5c-3.9 0-7 3.1-7 7s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8c0-.5 0-.8-.1-1.2H8Z"/></svg>
          <span className = "ml-4 text-white">Login with Google</span>
        </button>

        <div className="text-sm flex justify-between items-center mt-3">
          <p className="text-blue-900">If you don't have an account...</p>
          <button className="py-2 px-5 ml-3 text-white font-semibold bg-green-500 border rounded-xl border-white hover:bg-green-900  ">Register</button>
        </div>
      </div>

      <div className="w-1/2 md:block hidden ">
        <CarouselTransition/>
      </div>

    </div>
  </section>
  );
}

export default Login