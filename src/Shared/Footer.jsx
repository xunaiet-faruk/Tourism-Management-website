
import { IoIosShareAlt } from 'react-icons/io';
import image4 from '../../public/1 (4).png'
import logo from '../../public/image-removebg-preview - 2024-12-07T185231.653.png'
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
const Footer = () => {
    return (
        <div
            className="w-full"
            style={{
                backgroundImage: "url('https://adventor.wpengine.com/wp-content/themes/adventor/modules/footer/assets/images/footer-bg.jpg')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center', 
                height: '800px', 
            }}
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 max-w-screen-lg mx-auto py-9">
                <img className='w-28 h-28' src={"https://adventor.wpengine.com/wp-content/uploads/2021/07/client-logo-1.png"} alt="" />
                <img className='w-28 h-28' src="https://adventor.wpengine.com/wp-content/uploads/2021/07/client-logo-2.png" alt="" />
                <img className='w-28 h-28' src="https://adventor.wpengine.com/wp-content/uploads/2021/07/client-logo-3.png" alt="" />
                <img className='w-28 h-28' src={image4} alt="" />

          </div>

          <div className='pt-12 mb-16'>
                <h2 className='text-center text-4xl font-serif text-[#FB8E26] '>Subscribe now</h2>
                <p className='text-5xl text-center font-bold'>Get the Latest News</p>
                <div className="relative flex justify-center items-center mt-4">
                    <input
                        type="email"
                        id=""
                        className="w-[430px] h-10 rounded-md bg-gray-400 pl-4 pr-10"
                        placeholder="Enter your email"
                    />
                    <IoIosShareAlt className="absolute right-[500px]  text-xl text-gray-200 cursor-pointer hover:text-red-500 ursor-pointer" />
                </div>


          </div>

            <footer className=" text-gray-300 ">
                <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div className='-mt-12'>
                       <img className='w-32' src={logo} alt="" />
                        <p>
                            Going on an adventure is not about just fun, it's all about yourself and entertaining yourself.
                            Get the best out of adventure activities in you and start living the moment.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-facebook-f"></i> <FaFacebookF />

                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-twitter"></i> <BsTwitter/>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-linkedin-in"></i> <LiaLinkedin/>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-instagram"></i> <BsInstagram/>
                            </a>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Useful Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">About</a></li>
                            <li><a href="#" className="hover:text-white">Adventures</a></li>
                            <li><a href="#" className="hover:text-white">Blog</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Support Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Ask a Question</a></li>
                            <li><a href="#" className="hover:text-white">Delivery Terms</a></li>
                            <li><a href="#" className="hover:text-white">Careers</a></li>
                        </ul>
                        <h3 className="text-lg font-bold text-white mt-6">Reach Us</h3>
                        <p className="mt-2">932 Galvin St. Pompano Beach, FL 33060</p>
                        <p>example@example.com</p>
                        <p>(334) 336 3346</p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 text-center border-t border-gray-700 pt-4">
                    <p>© 2024 Adventor. All Rights Reserved.</p>
                </div>
            </footer>
            


        </div>
    );
};

export default Footer;
