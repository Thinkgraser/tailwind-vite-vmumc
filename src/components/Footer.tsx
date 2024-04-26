import { WhiteUMC, Facebook } from "../assets";

export default function Footer(){
    return (<footer className="mb-3 sm:mb-3">
    <div className="flex flex-wrap bg-gray-800 shadow text-white items-center py-2 justify-center sm:rounded-b-lg">
      <div className="w-16 md:w-2/12  text-center lg:w-1/12">
        <a className="inline-block" href="#">
          <img className="h-16 w-16" src={WhiteUMC} alt="UMC Logo" />
        </a>
      </div>

      <div className="w-full lg:w-8/12 md:w-10/12 text-center md:text-left my-3 lg:my-0">
        <p>
          &copy; {new Date().getFullYear()} - Van Meter United Methodist Church. All rights
          reserved.
        </p>
      </div>

      <div className="w-full lg:w-2/12 text-center lg:text-right px-2 my-3 lg:my-0">
        <p>Stay Connected</p>
      </div>

      <div className="w-full lg:w-1/12 text-center lg:text-left lg:px-2 my-3 lg:my-0">
        <a
          className="inline-block"
          href="https://www.facebook.com/profile.php?id=100064317144537">
          <img className="h-9 w-9" src={Facebook} alt="Facebook Logo" />
        </a>
      </div>
    </div>
  </footer>)
}