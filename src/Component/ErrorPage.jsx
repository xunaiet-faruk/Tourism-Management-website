
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className=''>
           <div className='flex flex-col justify-center items-center'>

                <img src="https://i.ibb.co.com/K5W9L1c/image-removebg-preview-2024-12-08-T233017-385.png" alt="" />
                <Link to={'/'} className='bg-gray-100 px-12 py-3 rounded-xl hover:bg-orange-300 hover:text-white '>
                    Home</Link>
           </div>
          
        </div>
    );
};

export default ErrorPage;