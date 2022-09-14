import React from 'react'
import Cards from './Cards'
import data from './data'

export default class CardsPage extends React.Component {
  constructor () {
    super()
    this.state = {
      data: data
    }
  }

  render () {
    return (
      <>
        <div id='content-wrapper' className='d-flex flex-column'>
          {/* <!-- Main Content --> */}
          <div id='content'>
            <div className='container-fluid'>
              {/* !-- Page Heading -- */}
              <div className='d-sm-flex align-items-center justify-content-between mb-4'>
                <h1 className='h3 mb-0 text-gray-800' style={{ marginTop: '20px' }}>
                  Cards
                </h1>
              </div>

              <div className='row'>
                {/* 3 cards */}
                <Cards />
              </div>
              <div className='row'>
                <div className='col-lg-6'>
                  {/* -- Default Card Example -- */}
                  <div className='card mb-4'>
                    <div className='card-header'>Default Card Example</div>
                    <div className='card-body'>
                      This card uses Bootstrap's default styling with no utility
                      classes added. Global styles are the only things modifying
                      the look and feel of this default card example.
                    </div>
                  </div>

                  {/* -- Basic Card Example -- */}
                  <div className='card shadow mb-4'>
                    <div className='card-header py-3'>
                      <h6 className='m-0 font-weight-bold text-primary'>
                        Basic Card Example
                      </h6>
                    </div>
                    <div className='card-body'>
                      The styling for this basic card example is created by
                      using default Bootstrap utility classes. By using utility
                      classes, the style of the card component can be easily
                      modified with no need for any custom CSS!
                    </div>
                  </div>
                </div>

                <div className='col-lg-6'>
                  {/* -- Dropdown Card Example -- */}
                  <div className='card shadow mb-4'>
                    {/* -- Card Header - Dropdown -- */}
                    <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
                      <h6 className='m-0 font-weight-bold text-primary'>
                        Dropdown Card Example
                      </h6>
                      <div className='dropdown no-arrow'>
                        <a
                          className='dropdown-toggle'
                          href='#action'
                          role='button'
                          id='dropdownMenuLink'
                          data-toggle='dropdown'
                          aria-haspopup='true'
                          aria-expanded='false'
                        >
                          <i className='fas fa-ellipsis-v fa-sm fa-fw text-gray-400' />
                        </a>
                        <div
                          className='dropdown-menu dropdown-menu-right shadow animated--fade-in'
                          aria-label='dropdownMenuLink'
                        >
                          <div className='dropdown-header'>Dropdown Header:</div>
                          <a className='dropdown-item' href='#action'>
                            Action
                          </a>
                          <a className='dropdown-item' href='#action'>
                            Another action
                          </a>
                          <div className='dropdown-divider' />
                          <a className='dropdown-item' href='#action'>
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* -- Card Body -- */}
                    <div className='card-body'>
                      Dropdown menus can be placed in the card header in order
                      to extend the functionality of a basic card. In this
                      dropdown card example, the Font Awesome vertical ellipsis
                      icon in the card header can be clicked on in order to
                      toggle a dropdown menu.
                    </div>
                  </div>

                  {/* <!-- Collapsable Card Example --> */}
                  <div className='card shadow mb-4'>
                    {/* <!-- Card Header - Accordion --> */}
                    <a
                      href='#collapseCardExample'
                      className='d-block card-header py-3'
                      data-toggle='collapse'
                      role='button'
                      aria-expanded='true'
                      aria-controls='collapseCardExample'
                    >
                      <h6 className='m-0 font-weight-bold text-primary'>
                        Collapsable Card Example
                      </h6>
                    </a>

                    <div className='collapse show' id='collapseCardExample'>
                      <div className='card-body'>
                        This is a collapsable card example using Bootstrap's
                        built in collapse functionality.{' '}
                        <strong>Click on the card header</strong> to see the
                        card body collapse and expand!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
