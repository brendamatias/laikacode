import * as React from 'react'
import PropTypes from 'prop-types'

const Container = ({ id, children, className }) => (
  <section id={id} className={className}>
    <div className="section container">{children}</div>
  </section>
)

export default Container

Container.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
}

Container.defaultProps = {
  className: '',
}
