import React, { useState } from 'react';

const GamePortfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Trận chiến Siêu anh hùng",
      description: "VR-based action-adventure game based on the legendary franchise",
      features: ["Creating 3D characters with texture variations", "Advanced combat system", "Immersive storyline"],
      image: "https://play-lh.googleusercontent.com/m5ebElQRasojsGouKbANSk1QqEuhAKNOE9Oa_Aaq_RhshVNixxUs2e5iXO2ZBQFLac0=w526-h296-rw",
      link: "https://play.google.com/store/apps/details?id=com.stickman.shadow.battle"
    },
    {
      id: 2,
      title: "Galaxy Attack",
      description: "Space shooter with stunning visual effects and challenging gameplay",
      features: ["Epic space battles", "Multiple weapon systems", "Boss battles"],
      image: "https://play-lh.googleusercontent.com/XjXzZDtOc6i9A-Q9xp43JWwRIEDK1rBcmcibYNkmLAVfd9CXkmpuYPE4CqY569O9NAVD=w526-h296-rw",
      link: "https://play.google.com/store/apps/details?id=com.airplane.galaxyattack.spaceshooter.spaceshipattack&hl=vi&gl=US"
    },
    {
      id: 3,
      title: "Zombie War",
      description: "Survival horror game with strategic defense elements",
      features: ["Tower defense mechanics", "Resource management", "Zombie hordes"],
      image: "https://play-lh.googleusercontent.com/gFcenSSZTrF3jnfvlZYn4Qf6lfiPcAqON6t-PYkvJnLCjHoC_w7jzrX29gtcbSZQnQ=w526-h296-rw",
      link: "https://play.google.com/store/apps/details?id=com.zombie.war.idle.defense"
    },
    {
      id: 4,
      title: "Cut the Lovebal",
      description: "Physics-based puzzle game with romantic theme",
      features: ["Physics simulation", "Puzzle mechanics", "Love story elements"],
      image: "https://s.cafebazaar.ir/images/upload/screenshot/com.weegoon.cuttheloveballs-screenshots-0.jpg?x-img=v1/resize,h_600,lossless_false/optimize",
      link: "https://play.google.com/store/apps/details?id=com.weegoon.cuttheloveballs"
    },
    {
      id: 5,
      title: "Block Puzzle",
      description: "Classic puzzle game with pirate adventure theme",
      features: ["Strategic thinking", "Pirate storyline", "Progressive difficulty"],
      image: "https://play-lh.googleusercontent.com/gOyhKSKczRdBluFN1Gdd3HGib0ZeilVTKdpV8Ff3BlarsL1G9JDLhKfJqsSNofz-EyM=w2560-h1440-rw",
      link: "https://play.google.com/store/apps/details?id=com.os.block.puzzle.pirate.odyssey"
    },
    {
      id: 6,
      title: "2048 Block Puzzle",
      description: "Number merge puzzle with block mechanics",
      features: ["Number merging", "Block placement", "High score system"],
      image: "https://play-lh.googleusercontent.com/KVIHX7Gb3X0or71c-nRGVQcU9IXwxqVdhg4GnNRvf7-DOvOKBcLVBsloTh49ahbGauSL=w526-h296-rw",
      link: "https://play.google.com/store/apps/details?id=net.wellyglobal.cyforce.puzzlegames.game2048.block.number.merge&hl=vi&gl=US"
    }
  ];

  const currentProject = projects[currentPage - 1];
  

  const getVisibleCards = () => {
    const totalCards = projects.length;
    const visibleCards = [];
    

    for (let i = 0; i < 3; i++) {
      const index = (selectedCard + i) % totalCards;
      visibleCards.push({
        ...projects[index],
        originalIndex: index
      });
    }
    
    return visibleCards;
  };

  const handleCardClick = (originalIndex) => {
    setSelectedCard(originalIndex);
    setCurrentPage(originalIndex + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
    setSelectedCard(page - 1);
  };

  return (
    <div className="flex items-center px-10 mb-12">
      <div className="container mx-auto px-8 py-12 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center h-full">
          {/* Left Side - Project Details */}
          <div className="col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">
                {currentProject.title}
              </h1>
              <p className="text-base text-gray-600 mb-4">
                {currentProject.description}
              </p>
              
              <div className="space-y-2 mb-6">
                {currentProject.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <a
                href={currentProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm"
              >
                GET IT ON PLAY STORE
                <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Card Slider */}
          <div className="col-span-3 space-y-6">
            <div className="flex justify-center space-x-8 px-8">
              {getVisibleCards().map((project, index) => {
                const isSelected = index === 0; 
                
                return (
                  <div
                    key={`${project.originalIndex}-${selectedCard}`}
                    className={`transition-all duration-500 ease-in-out cursor-pointer rounded-2xl ${
                      isSelected 
                        ? 'border-4 border-purple-500 z-10 shadow-2xl' 
                        : 'opacity-70 hover:opacity-90'
                    }`}
                    onClick={() => handleCardClick(project.originalIndex)}
                    style={{
                      transition: 'border 0.5s ease-in-out, opacity 0.5s ease-in-out'
                    }}
                  >
                    <div className="relative w-72 h-96 group transform -skew-x-10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                      />
                    
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePortfolio;