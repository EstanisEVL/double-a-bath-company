const SocialIcons = ({ icons }) => {
  // Enlazar a redes sociales:
  
  return(
    <div className='footer--socials'>
      {
        icons.map((icon, index) => {
        return <a href={ icon.url }>
          <img
          className='socials--btn'
          key={ index }
          src={ icon.png } 
          alt= { icon.title}
          />
        </a>
        })
      }
    </div>
  );
};

export default SocialIcons;