import PropTypes from 'prop-types';

const SliderImage = ({ url, title = '' }) => (
  <div className='comparing-image--container'>
    <img className="comparing-image--img" src={ url } alt={ title } />
    { !!title && <span className="cd-image-label" data-type="modified">{title}</span> }
  </div>
);

Image.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string
}

Image.defaultProps = {
  title: ''
}

export default SliderImage;