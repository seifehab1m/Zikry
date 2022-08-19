import React from 'react'
import homeStyle from './Home.module.css'

export default function Home() {
  return (
    <div className={`${homeStyle.background}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 d-flex justify-content-center align-items-center '>
            <div className={`${homeStyle.descImg} w-100`}>
              <h1 >study of <span className={`${homeStyle.physicalWorld}`}>Physical World</span><br />
                from apple Fall to the motion<br />
                of planets and stars behaviour
              </h1>
              <button className={` ${homeStyle.btnSignUp} mt-3`}>Join For Free
                <i className="fa-solid fa-arrow-right-long"></i></button>
              <div className={`${homeStyle.search}  position-relative`}>
                <input placeholder='What do you want to learn?' className={`form-control d-block mt-4 w-100  ${homeStyle.input}`} />
                <div className='content  '>

                    <div className={`${homeStyle.inputContainericon} d-flex justify-content-center align-items-center position-absolute top-0 h-100 `}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className={` ${homeStyle.inputContainerBtns} d-flex  align-items-center position-absolute h-100 top-0  `}>
                      <select className='text-black' name="categories" id="categories">
                        <option value="categories">categories</option>
                        <option value="categories">categories</option>
                        <option value="categories">categories</option>
                        <option value="categories">categories</option>
                      </select>

                      <button className={` text-center ${homeStyle.btnSignUp} ${homeStyle.searchIcon}`}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        Search
                      </button>
                    </div>
                  
                </div>
              </div>

             
            </div>
          </div>
          <div className='col-md-6 '>
            <div >
              <img src='./../../images/illustration.png' className='w-100' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
