import React, { forwardRef } from 'react';

const Qualifications = forwardRef((props, ref) => (
    <a href='./qualifications' ref={ref} className='py-20'>
        <div className='border border-black shadow-black shadow-lg bg-gray-900 p-20 w-[400px] text-white font-bold text-4xl border border-y-4 border-y-purple-600 rounded-lg hover hover:shadow-lg hover:shadow-purple-600 raise'>Qualifications</div>
    </a>
));

Qualifications.displayName = 'Qualifications';
export default Qualifications;