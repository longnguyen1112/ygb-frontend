import React from 'react'
import 'tachyons'

const Singup = () => {
  return (
    <div class="pa4 black-80">
        <form class="measure center ba pa4"action="sign-up_submit" method="get" accept-charset="utf-8">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
            <legend class="f2 ph0 mh0 fw6 center">Sign Up</legend>
            <div class="mt3">
                <label class="db fw6 lh-copy f6" for="email-address">Email address</label>
                <input class="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address"/>
            </div>
            <div class="mt3">
                <label class="db fw6 lh-copy f6" for="password">Password</label>
                <input class="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password"/>
            </div>
            </fieldset>
            <div class="mt3"><input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up"/></div>
        </form>
    </div>
  )
}

export default Singup