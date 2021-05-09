import * as React from 'react'
import PropTypes from 'prop-types'

const Container = ({ children, className }) => (
  <section className={className}>
    <div className="section container">{children}</div>
  </section>
)

export default Container

Container.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
}

Container.defaultProps = {
  className: '',
}
