import React from 'react'
import 'tachyons'
import './Home.css'

const Home = () => {
  return (
    <div>
        <div className="dt dt--fixed">
            <div className="box1 dtc tc pv4 bg-black-10">
                <div className='title'>
                    <h1>Workout</h1>
                </div>
            </div>
            <div className="box2 dtc tc pv4 bg-black-05">
                <div className='title'>
                    <h1>Careers</h1>
                </div>
            </div>
            <div className="box3 dtc tc pv4 bg-black-10">
                <div className='title'>
                    <h1>Nutrition</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home