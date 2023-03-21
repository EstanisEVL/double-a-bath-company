/*---- Component ----*/
const WorkSlide = ({ slide }) => {
  return(
    <div className='work-slide--container'>
      <div className='work-slide--content'>
        <h3 className='content--h3'> { slide.beforeTitle } </h3>
        <img src={ slide.beforeImg } alt={ slide.beforeAlt } />
      </div>
      <div className='work-slide--content'>
        <h3 className='content--h3'> { slide.afterTitle } </h3>
        <img src={ slide.afterImg } alt={ slide.afterAlt } />
      </div>
    </div>
  );
};

export default WorkSlide;