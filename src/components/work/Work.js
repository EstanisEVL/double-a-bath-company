import WorkSlidesList from "./WorkSlidesList";
import WorkSlider from "./WorkSlider";

const Work = () => {
  return(
    <section className='work-section--container'>
      <div className='work-section--description'>
        <h2>our work</h2>
        <p>If you're ready to remodel your bathroom, this is a great place to start. Whether you're discovering your preferred style or browsing before & after pictures of redesigned spaces, you are sure to be inspired.</p>
      </div>

      <div className='work-section--slider-container'>
        <WorkSlider slides = { WorkSlidesList } />
      </div>
    </section>
  );
};

export default Work;