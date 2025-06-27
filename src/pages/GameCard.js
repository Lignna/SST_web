import React from 'react';

const GameCard = () => {
  return (
    <div>
      <div className="game-container">
        <div className="game-grid">
          <div className="game-image">
            <img
              src="https://play-lh.googleusercontent.com/6Qd5JIMEp1riMTC7ocJ22Hoz8LJ1IeJAwCCELBhrgkFItszrE7CHBm21iaNYJ3UI-BI=w2560-h1440-rw"
              alt="Stickman Combat Legend"
              className="game-screenshot"
            />
          </div>

        
          <div className="game-content">
            <h1 className="game-title">Stickman Combat Legend</h1>

            <p className="game-description">
              <strong>Stickman Combat Legend</strong> là trò chơi chiến đấu người que đơn giản nhất!!!
              Trò chơi chiến đấu này sẽ cho phép bạn trở thành một trong những anh hùng của đội Siêu anh hùng, chiến đấu với những kẻ phản diện và bảo vệ toàn bộ hành tinh. Bước vào đấu trường và chiến đấu vì mạng sống của bạn. Nếu bạn thích chơi game thì đây là trò chơi dành cho bạn vì khả năng xử lý nhanh và các tính năng tuyệt vời.
            </p>

            <ul className="feature-list">
              <li>Chế độ chơi đơn</li>
              <li>Chế độ đối đầu</li>
              <li>Chế độ giải đấu</li>
              <li>Nhiều loại vũ khí để lựa chọn</li>
            </ul>

            <div className="download-section">
              <a
                href="https://play.google.com/store/apps/details?id=com.fc.stickman.heroes.fight.stick.warrirors"
                target="_blank"
                rel="noopener noreferrer"
                className="download-link"
              >
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/024/170/871/small/badge-google-play-and-app-store-button-download-free-png.png"
                  alt="Get it on Google Play"
                  className="google-play-badge"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

    
      <div className="card-layout-container">
        <div className="card-layout-grid">
          <div className="card-layout-card card-layout-card-left">
            <div className="card-layout-content">
              <h2 className="card-layout-title">Jungle Adventures: Super World</h2>
              <p className="card-layout-description">
                Jungle Adventures là một cuộc phiêu lưu siêu của Zog, một cậu bé trong rừng muốn trở thành một thợ săn kho báu.
              </p>
            </div>
            <div className="card-layout-image">
              <img 
                src="https://img.tapimg.net/market/images/4c38545b656129372be9696ad0fca209.png?imageView2/2/w/720/h/720/q/80/format/jpg/interlace/1/ignore-error/1&t=1" 
                alt="Boba Tea" 
                className="card-layout-img"
              />
            </div>
          </div>
          <div className="card-layout-card card-layout-card-right">
            <div className="card-layout-content">
              <h2 className="card-layout-title">Metal Shooter</h2>
              <p className="card-layout-description">
                Một trò chơi hành động nền tảng di động miễn phí kiểu retro, trong đó bạn đóng vai một chiến binh chiến đấu vượt qua đám đông kẻ thù trong một loạt các khu vực khác nhau.
              </p>
            </div>
            <div className="card-layout-image">
              <img 
                src="https://images.sftcdn.net/images/t_app-cover-s,f_auto/p/47075786-d734-4bc5-a53d-be7f5fbe409a/4041589940/metal-shooter-super-soldiers-screenshot.png" 
                alt="Mobile Game" 
                className="card-layout-img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="max-w-[90%] mx-auto">
          <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-6 
            gap-0
            justify-center
          ">
          </div>
        </div>
      </div>

      <style jsx>{`
        /* GameContainer Styles */
        .game-container {
          margin: 0 auto;
          padding: 40px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .game-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          align-items: center;
          border-radius: 24px;
          padding: 0px 120px;
        }
        
        .game-image {
          position: relative;
        }
        
        .game-screenshot {
          width: 80%;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
        }
        
        .game-content {
          padding-left: 20px;
        }
        
        .game-title {
          font-size: 2.8rem;
          font-weight: 800;
          color: #2d3748;
          margin: 0 0 24px 0;
          line-height: 1.2;
          background: linear-gradient(135deg, #667eea, #764ba2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .game-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #4a5568;
          margin-bottom: 32px;
        }
        
        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0 0 40px 0;
        }
        
        .feature-list li {
          font-size: 1.1rem;
          color: #2d3748;
          margin-bottom: 12px;
          padding-left: 28px;
          position: relative;
          line-height: 1.5;
        }
        
        .feature-list li::before {
          content: '✨';
          position: absolute;
          left: 0;
          top: 0;
          font-size: 1.2rem;
        }
        
        .download-section {
          margin-top: 40px;
        }
        
        .download-link {
          display: inline-block;
          transition: transform 0.3s ease;
        }
        
        .download-section .google-play-badge {
          height: 60px;
          width: auto;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
        }

        /* CardLayout Styles */
        .card-layout-container {
          padding: 40px 20px;
          
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          max-width: 1200px;
          width: 100%;
        }

        .card-layout-card {
          background: white;
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card-layout-card-left {
          background: linear-gradient(135deg, #fff9e6 0%, #fff 100%);
        }

        .card-layout-card-right {
          background: linear-gradient(135deg, #e6f3ff 0%, #fff 100%);
        }

        .card-layout-content {
          flex: 1;
          z-index: 2;
        }

        .card-layout-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #2c3e50;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .card-layout-description {
          font-size: 1rem;
          color: #7f8c8d;
          line-height: 1.6;
          margin: 0;
        }

        .card-layout-image {
          flex: 0 0 200px;
          width: 100%;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .card-layout-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
          border-radius: 16px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
          transition: transform 0.3s ease;
          transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
        }

        .card-layout-card-left .card-layout-img {
          transform: perspective(1000px) rotateY(15deg) rotateX(-5deg) rotate(-3deg);
        }

        .card-layout-card-right .card-layout-img {
          transform: perspective(1000px) rotateY(-15deg) rotateX(5deg) rotate(2deg);
        }

        .card-layout-card:hover .card-layout-img {
          transform: perspective(1000px) rotateY(0deg) rotateX(0deg) rotate(0deg) scale(1.05);
        }

        .card-layout-phone-img {
          border-radius: 20px;
          aspect-ratio: 9/16;
          height: 180px;
          width: auto;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .game-container {
            padding: 20px 10px;
          }
          
          .game-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 40px 30px;
          }
          
          .game-content {
            padding-left: 0;
            text-align: center;
          }
          
          .game-title {
            font-size: 2.2rem;
          }
          
          .game-description {
            font-size: 1rem;
          }
          
          .feature-list li {
            text-align: left;
          }

          .card-layout-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .card-layout-card {
            flex-direction: column;
            text-align: center;
            padding: 30px;
          }

          .card-layout-image {
            margin-top: 20px;
            flex: none;
          }

          .card-layout-title {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .card-layout-container {
            padding: 20px 10px;
          }

          .card-layout-card {
            padding: 20px;
          }

          .card-layout-title {
            font-size: 1.5rem;
          }

          .card-layout-description {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default GameCard;