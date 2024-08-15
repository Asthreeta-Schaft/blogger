import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full- justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                    <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
                    <span className="px-2 py-1 bg-gradient-to-r from-green-700 via-green-500 to-blue-500 rounded-lg text-white">
                    ARTICULUS
                    </span>
                    Blog
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                    <Footer.Title title='About' />
                    <Footer.LinkGroup col>

                        <Footer.Link href="/sign-in" rel="noopener noreferrer">
                            Sign In
                        </Footer.Link>

                        <Footer.Link href="/search" rel="noopener noreferrer">
                            Blogs
                        </Footer.Link>

                    </Footer.LinkGroup>
                    </div>

                    <div>
                    <Footer.Title title='Follow Us' />
                    <Footer.LinkGroup col>

                        <Footer.Link href="" target="_blank" rel="noopener noreferrer">
                            Instagram
                        </Footer.Link>

                        <Footer.Link href="" target="_blank" rel="noopener noreferrer">
                            Discord
                        </Footer.Link>

                    </Footer.LinkGroup>
                    </div>

                    <div>
                    <Footer.Title title='Legal' />
                    <Footer.LinkGroup col>

                        <Footer.Link href="/privacy" rel="noopener noreferrer">
                            Privacy Policy
                        </Footer.Link>

                        

                    </Footer.LinkGroup>
                    </div>
                    
                </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-center">
                <Footer.Copyright href="#" by="ARTICULUS Blog | Developed and Maintained by Asthreeta Schaft" year={new Date().getFullYear()}/>
            </div>
            <br></br>

            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center cursor-pointer">
                <Footer.Icon href="" icon={BsFacebook}/>
                <Footer.Icon href="" icon={BsInstagram}/>
                <Footer.Icon href="" icon={BsLinkedin}/>
            </div>
        </div>
    </Footer>
  )
}
