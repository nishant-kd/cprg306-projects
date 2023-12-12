import React, { forwardRef } from 'react';

const Skills = forwardRef((props, ref) => {
    
    const skills = () => {
        return (
             <main>
                <div className='grid grid-cols-2 md:grid-cols-5 md:gap-16 gap-10 justify-items-center mt-10 text-gray-300 text-2xl font-medium'>
                    <div className='space-y-5'>
                        <img src='./imgs/html.png' className='w-[60px] h-[60px]'/>
                        <p className=''>HTML</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/css.png' className='w-[60px] h-[60px]'/>
                        <p className=''>CSS</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/Python.png' className='w-[60px] h-[60px]'/>
                        <p className=''>Python</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/javascript.png' className='w-[60px] h-[60px] ml-8'/>
                        <p className=''>JavaScript</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/react.png' className='w-[60px] h-[60px]'/>
                        <p className=''>React</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/node.png' className='w-[60px] h-[60px]'/>
                        <p className=''>Node.js</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/tailwind.png' className='w-[60px] h-[60px]'/>
                        <p className=''>Tailwind</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/sql.png' className='w-[60px] h-[60px]'/>
                        <p className=''>SQL</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/plsql.png' className='w-[60px] h-[60px]'/>
                        <p className=''>PL/SQL</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/git.png' className='w-[60px] h-[60px]'/>
                        <p className=''>GitHub</p>
                    </div>
                    
                    <div className='space-y-5'>
                        <img src='./imgs/figma.png' className='w-[60px] h-[60px]'/>
                        <p className=''>Figma</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/c.png' className='w-[60px] h-[60px]'/>
                        <p className=''>C#</p>
                    </div>
                    <div className='space-y-5'>
                        <img src='./imgs/java.png' className='w-[60px] h-[60px]'/>
                        <p className=''>Java</p>
                    </div>
                </div>
            </main>
                
        );
    };


    return(
        <div ref={ref}>
            <div className='flex justify-center'>
                <div className='mt-20 border bg-gray-900 pb-24 px-24 pt-10 max-w-screen mx-10 border-black border-x-4 rounded-md shadow-lg shadow-black border-x-purple-600'>
                    <div className='flex justify-center items-center mb-20 text-white '>
                        <img src='./imgs/skill.png' className='w-[180px] h-[140px] mr-[30px]'/>
                        <h2 className=' flex justify-center text-3xl tracking-wide mt-1 mr-[60px] font-semibold'>{'Skills'}</h2>
                    </div>
                    {skills()}
                </div>
            </div>
        </div>
    );
});

Skills.displayName = 'Skills';
export default Skills;

