import './App.css';
import back from './bg-intro-desktop.png'
import Input from './Input'

function App() {
  return (
    <>

      <div className='flex items-center justify-center w-screen h-screen bg-Pk-100 '>

        <img className='fixed w-screen h-screen' src={back} />

        <div className='flex w-5/6 h-5/6 '>
          <div className='flex flex-col items-start justify-center w-1/2'>

            <p className='pb-10 text-5xl font-bold text-white'> Learn to code by<br /> watching others </p>

            <p className='text-white'> See how experienced developers solve problems in real-ime.<br />
              Watching scripted tutorials is great , but understanding how<br />
              developers think is invaluable. </p>


          </div>

          <div className='flex flex-col w-1/2 justify-evenly '>

            <button className='bg-[#5d54a3] w-4/5 h-[60px] rounded-xl text-white font-bold z-10'>Try it free 7 days then 5 DT/mo</button>

            <div className='z-0 flex flex-col items-center w-4/5 bg-white h-4/5 rounded-xl justify-evenly'>
              <Input ph="Name" type="text" />
              <Input ph="Last Name" type="text" />
              <Input ph="Email" type="email" />
              <Input ph="Password" type="password" />

              <div className='flex flex-col items-center justify-center w-4/5'>
                <button className='bg-[#39cb8a] w-full h-[60px] rounded-xl text-white font-bold'>CLAIM YOUR FREE TRIAL</button>
                <span className='text-[10px] text-gray-600'> By clicking the button you are agreeing to out <span className='text-Pk-100'>Terms and Services</span></span>

              </div>

            </div>

          </div>
        </div>
      </div>

    </>
  );
}

export default App;
