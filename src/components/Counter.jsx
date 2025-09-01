import React from 'react'

function Counter() {
  return (
    <>
      <section className='vh-100 bg-black d-flex justify-content-center align-items-center'>
        <div className='text-light d-flex justify-content-center align-items-center flex-column'>
          <h1>Counter App</h1>
          <div className='border border-light mt-4 d-flex justify-content-center align-items-center flex-column p-4' style={{ width: '50rem' }}>
            <h4 style={{ fontSize: 70 }}>0</h4>
            <div>
              <button className="btn bg-success text-light m-5 px-3 py-2">DECREMENT</button>
              <button className="btn bg-danger text-light m-5 px-3 py-2">RESET</button>
              <button className="btn bg-warning text-light m-5 px-3 py-2">INCREMENT</button>
            </div>

            <div className='d-flex flex-row justify-content-center align-items-center mb-3' style={{width:'100%'}}>
              <input type="text" placeholder='Incremented Counter Amount' className='form-control' style={{width:'500px'}}/>
              <button className="btn bg-info text-white ms-3">INCREMENT BY AMOUNT</button>
            </div>
          </div>
        </div>


      </section>

    </>
  )
}

export default Counter