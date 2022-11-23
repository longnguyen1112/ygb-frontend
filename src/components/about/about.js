import React from 'react'
import pic1 from '../../pic/pic4.jpeg'
import pic2 from '../../pic/pic2.jpeg'

const About = () => {
  return (
    <div>
        <section class="mw7 center">
            <h2 class="athelas ph3 ph0-l">About</h2>
            <article class="pv4 bt bb b--black-10 ph3 ph0-l">
                <div class="flex flex-column flex-row-ns">
                <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                    <h1 class="f3 athelas mt0 lh-title">YGB - A beginner-friendly workout app</h1>
                    <p class="f5 f4-l lh-copy athelas">
                    By having an account on YGB, you will be able to access to our qualified professional online trainers. After registering with your trainer, a designated program will be assigned weekly to achieve your goal.
                    </p>
                </div>
                <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                    <img src={pic1} class="db" alt="workout"/>
                </div>
                </div>
            </article>
            <article class="pv4 bb b--black-10 ph3 ph0-l">
                <div class="flex flex-column flex-row-ns">
                <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                    <h1 class="f3 athelas mt0 lh-title">YGB - A career starter for young fitness enthusiast</h1>
                    <p class="f5 f4-l lh-copy athelas">
                    An opportunity for entry level personal trainer to jump start their career where you can interact with your clients and keep them updated.<br></br> More information please email Long: long@long.com
                    </p>
                </div>
                <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                    <img src={pic2} class="db" alt="workout"/>
                </div>
                </div>
            </article>
        </section>
    </div>
  )
}

export default About