// Side Navbar

import React from 'react'
import RocketLogo from '../images/undraw_rocket.svg'
import data from './data'
import {
  BrowserRouter as Router,
  NavLink
} from 'react-router-dom'

class Navbar extends React.Component {
  constructor () {
    super()
    this.state = {
      data: data
    }
  }

  render () {
    return (
      <>
        <ul
          className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
          id='accordionSidebar'
        >
          <a
            className='sidebar-brand d-flex align-items-center justify-content-center'
            href='index.html'
          >
            <div className='sidebar-brand-icon rotate-n-15'>
              <i className='fas fa-laugh-wink' />
            </div>
            <div className='sidebar-brand-text mx-3'>
              SB Admin <sup>2</sup>
            </div>
          </a>

          <hr className='sidebar-divider my-0' />
          <Router forceRefresh>
            <li className='nav-item active'>
              <NavLink className='nav-link' to='/'>
                Dashboard
              </NavLink>
            </li>
          </Router>

          <hr className='sidebar-divider' />

          {this.state.data[0].Navdivisions.map((item, index) => {
            return (
              <>
                <div key={index} className='sidebar-heading'>
                  {item.title}
                </div>

                {item.topics.map((subtopic, index1) => {
                  return (
                    <>
                      <Router key={index1} forceRefresh>
                        <li className='nav-item'>
                          <NavLink
                            className='nav-link collapsed'
                            href='#'
                            data-toggle='collapse'
                            data-target='#collapseTwo'
                            aria-expanded='true'
                            aria-controls='collapseTwo'
                            to={subtopic.link}
                          >
                            {subtopic.name}
                          </NavLink>
                        </li>
                      </Router>
                    </>
                  )
                })}
              </>
            )
          })}

          <hr className='sidebar-divider d-none d-md-block' />

          <div className='sidebar-card d-none d-lg-flex'>
            <img
              className='sidebar-card-illustration mb-2'
              src={RocketLogo}
              alt='...'
            />
            <p className='text-center mb-2'>
              <strong>SB Admin Pro</strong> is packed with premium features,
              components, and more!
            </p>
            <a
              className='btn btn-success btn-sm'
              href='https://startbootstrap.com/theme/sb-admin-pro'
            >
              Upgrade to Pro!
            </a>
          </div>
        </ul>
      </>
    )
  }
}
export default Navbar
