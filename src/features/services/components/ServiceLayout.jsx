import PropTypes from 'prop-types';

export function ServiceLayout({ service }) {
  const { 
    title, 
    icon, 
    bannerImage, 
    description, 
    mainImage, 
    features, 
    content 
  } = service;
  
  return (
    <>
        <div 
        className="contain-fluid bg-cover bg-no-repeat flex items-center justify-center" 
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="w-full min-h-[170px] sm:min-h-[350px] lg:min-h-[450px] xl:min-h-[400px] flex items-center justify-center px-4"></div>
      </div>
      
      <div className="w-[90%] md:w-[57%] mx-auto p-4 mt-[60px] md:mt-[80px]">
        <div className="flex items-center mb-6">
          <img src={icon} alt="" className="w-10 h-12 mr-4" />
          <h2 className="text-2xl md:text-3xl text-[#1C1C1C] font-semibold mb-2">
            {title}
          </h2>
        </div>

        <p className="text-medium font-medium text-gray-600 mb-4 font-['Montserrat']">
          {description}
        </p>

        <p className="mt-8 text-medium font-medium text-gray-600">
          {content.additionalInfo}
        </p>

        <div>
          <h2 className="text-2xl md:text-3xl text-[#1C1C1C] font-semibold mb-8 mt-10">
            The perfect Health for all
          </h2>

          <p className="text-medium font-medium text-gray-600 mb-4 font-['Montserrat']">
            {content.mainContent}
          </p>

          <ul className="list-none pl-0 !text-primary01 w-[80%] md:w-[85%] mx-auto">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center mb-1">
                <span className="mr-2 text-4xl leading-none flex items-center">•</span>
                <span className="text-[16px]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center text-[#545454] font-medium">
          <img src={mainImage} alt="" className="w-full mt-8" />
          <span>Doctor With Patient</span>
        </div>

        <h2 className="text-2xl md:text-3xl text-[#1C1C1C] font-semibold mb-8 mt-10">
          People trust Pharma
        </h2>

        <div className="border border-l-[10px] border-primary01 bg-[#DCEDFE]">
          <div className="py-6 md:py-10 px-2 md:px-0 w-[100%] md:w-[70%] mx-auto">
            <p className="text-primary01 font-semibold italic">
              {content.quote}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl text-[#1C1C1C] font-semibold mb-8 mt-10">
            Feel Like Home With Best Service
          </h2>

          <p className="text-medium font-medium text-gray-600 mb-4 font-['Montserrat']">
            {content.additionalInfo}
          </p>

          <ul className="list-none pl-0 text-[#545454] w-[80%] md:w-[60%] mx-auto">
            {content.intro.map((item, index) => (
              <li key={index} className="flex items-center mb-5">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-medium font-medium text-gray-600 mt-8 font-['Montserrat']">
          {content.conclusion}
        </p>
      </div>
    </>
  );
}

ServiceLayout.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    bannerImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    mainImage: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    content: PropTypes.shape({
      additionalInfo: PropTypes.string.isRequired,
      mainContent: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      serviceInfo: PropTypes.string.isRequired,
      intro: PropTypes.arrayOf(PropTypes.string).isRequired,
      conclusion: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};