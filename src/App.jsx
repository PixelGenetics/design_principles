import './App.css'
import logo from './assets/design-principles-logo.svg'
import Media from 'react-media'
function App() {

  return (
    <>    
    <div className='Page'>
      <Media query="(min-width: 501px)">
        {(matches) => {
          return matches ? 
              "Hola"
            : 
            (
            <div >
            <header className='bg-[#F7D708]'>
              <div className='flex items-center px-6 pr-6 pt-6 justify-between'>
                <a href="" title='Design Principle Logo'>
                  <img src={logo} alt="" className='w-14'/>
                </a>
                <tr className='flex gap-4 font-bold font-poppins '>
                  <td className=''>About</td>
                  <td>Examples</td>
                  <td>Contribute</td>
                </tr>
              </div>

              <div>
                <h1 className='flex items-center px-6 pr-6 pt-6 text-[60px] font-franklin text-[#333333]'>Design Principles</h1>
                <hr className='flex w-[200px] h-3 bg-[#333333] m-5 border-transparent'/>  
                <p className='flex items-center px-6 pr-6 pt-6 font-franklin text-3xl text-[#333333] mb-16'>An open source collection of Design Principles and methods.</p>
              </div>

              <div className='font-franklin font-thin'>


                  <div className='bg-[url("./assets/cross-grid.svg")] h-[380px]'>
                
                    <p className='flex items-center px-6 pr-6 pt-6 text-[20px] font-lato text-[#333333]'>The collection contains: </p>

                    <div className='flex justify-between mr-[86px] '>
                        <div className='p-0 '>
                          <p className='flex items-center px-6 pr-6 pt-6 text-[50px] text-[#333333]'>195</p>
                          <p className='flex items-center px-6 pr-6 font-lato text-[19px] text-[#333333]'>Examples</p>
                        </div>

                        <div className='p-0 '>
                          <p className='flex items-center px-6 pr-6 pt-6 text-[50px] text-[#333333] '>1448</p>
                          <p className='flex items-center px-6 pr-6 font-lato text-[19px] text-[#333333] '>Design Principles</p>
                        </div>
                    </div>
                        <div className='p-0'>
                          <p className='flex items-center px-6 pr-6 pt-6 text-[50px] text-[#333333]'>167</p>
                          <p className='flex items-center px-6 pr-6 font-lato text-[19px] text-[#333333]'>Creators</p>
                        </div>

                  
                  </div>
              </div>
            </header>


            <div className='p-6 flex-col'>
            <div className='pr-6  pl-6 flex-col items-start justify-start'>
              <hr className=' w-[200px] h-3 bg-[#333333]  border-transparent ' />
              <h2 className='text-[31px] mt-5'>What are Design Principles?</h2>
              <p  className='text-[19px]'>Design Principles are a set of considerations that form the basis of any good product.</p>
          </div>

          <div>
          
            <hr className='flex w-[200px] h-3 bg-[#333333] m-5 border-transparent'/>
            <h2 className='px-6 pr-6 pt-6 text-[31px]'>Why use them?</h2>
            <p  className='px-6 pr-6 pt-6 text-[19px]'>Design Principles help teams with decision making. A few simple principles or constructive questions will guide your team towards making appropriate decisions.</p>

          </div>

          <div>
          
            <hr className='flex w-[200px] h-3 bg-[#333333] m-5 border-transparent'/>
            <h2 className='px-6 pr-6 pt-6 text-[31px]'>Who uses them?</h2>
            <p  className='px-6 pr-6 pt-6 text-[19px] mb-12'>Organisations, individuals and product teams have benefited from writing and following their principles. <br /> Here are a few examples:</p>              
          </div>
            </div>


            <div className='flex-col pl-6 pr-6'>
              
              <ul className=' ml-6  w-[345px]'>
                <li className='border-y-4  border-[#333333] hover:bg-yellow-500'>
                    <h3 className=' text-[19px] font-semibold'>10 Principles of Good Read Design</h3>
                    <p  className='pb-5'>Highway England Strategic Design Panel</p>
                </li>

                <li className='border-[#333333] hover:bg-yellow-500'>
                    <div >
                        <h3 className=' text-[19px] font-semibold'>Airbnb's Design Principles</h3>
                        <p  className='pb-5'>Airbnb</p>
                    </div>  
                </li>

                <li className='border-y-4  border-[#333333] hover:bg-yellow-500'>
                    <div >
                        <h3 className=' text-[19px] font-semibold'>Principles</h3>
                        <p  className='pb-5 '>Co-op</p>
                    </div>  
                </li>

                <li className='border-[#333333] hover:bg-yellow-500'>
                    <div >
                        <h3 className=' text-[19px] font-semibold'>Design in the Era of the Algorithm</h3>
                        <p  className='pb-5 '>Josh Clark</p>
                    </div>  
                </li>
             
                <li className='border-y-4 border-[#333333] hover:bg-yellow-500'>
                    <div >
                        <h3 className=' text-[19px] font-semibold'>NHS Design Principles</h3>
                        <p  className='pb-5 '>NHS</p>
                    </div>  
                </li>

                <li className='border-[#333333] hover:bg-yellow-500'>
                    <div >
                        <h3 className=' text-[19px] font-semibold'>Principles of Calm Technology</h3>
                        <p  className='pb-5 '>Amber Case</p>
                    </div>  
                </li>

                <li className='border-y-4 border-[#333333] hover:bg-yellow-500'>
                    <div >
                        <h3 className=' text-[19px] font-semibold'>Principles of Design</h3>
                        <p  className='pb-5 '>Amber Case</p>
                    </div>  
                </li>

                <li className=' border-[#333333] hover:bg-yellow-500'>
                    <div >
                        <h3 className=' text-[19px] font-semibold'>The Ten Principles of Inclusive Web Design</h3>
                        <p  className='pb-5 text-[15px]'>Sandi Wassmer</p>
                    </div>  
                </li>


                <li className='border-dotted border-[#333333] hover:bg-yellow-500'>
                    <div className=''>
                        <h3 className=' text-[19px] font-semibold'>Got something <br /> to add?</h3>
                        <p  className='pb-5 text-[15px]'>Submit an example</p>
                    </div>  
                </li>
             
              </ul>


                

            </div>


            </div>
            
            )
        }}
      </Media>
    </div>
    </>
  )
}

export default App
