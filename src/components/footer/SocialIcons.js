const SocialIcons = ({ icons }) => {
  // Enlazar a redes sociales:
  
  return(
    <div className='footer--socials'>
      {
        icons.map((icon, index) => {
          return <a key={ icon.id } href={ icon.url }>
          <img
          className='socials--btn'
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