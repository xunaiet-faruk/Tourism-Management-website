import React from 'react';

const Loading = () => {
    return (
        <div className='flex flex-col justify-center items-center py-12'>
            <div className="w-10 h-10 flex gap-2 items-center justify-center"><div className="w-2 h-5 animate-[ping_1.4s_linear_infinite] bg-[#FB8E26]"></div><div className="w-2 h-5 animate-[ping_1.8s_linear_infinite] bg-[#FB8E26]"></div><div className="w-2 h-5 animate-[ping_2s_linear_infinite] bg-[#FB8E26]"></div></div>

        </div>
    );
};

export default Loading;