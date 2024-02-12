import {Link} from "react-router-dom"
import CathedralImage from '../images/durhamNotMyimage.jpeg';
// FORMAT THE FONT before deploy!!!!

export default function NotFoundPage() {
  return (
    <>
      <main className="relative flex flex-col justify-center min-h-screen">
        <img
          src={CathedralImage}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
        />
        <div className="z-10 mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
          <p className="text-base font-semibold text-white">404</p>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-5xl">Page not found</h1>
          {/* Rest of your content */}
          <p className="mt-4 text-base text-white/70 sm:mt-6">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex justify-center">
            <Link to={'/'} className="text-sm font-semibold leading-7 text-white">
              <span aria-hidden="true">&larr;</span> Back to home
            </Link>
          </div>
        </div>
      </main>

    </>
  )
}