import React , {useRef} from "react";
import './App.css'; 

function App() {
    const videoRef = useRef(null); // Reference for the video element
  const iconRef = useRef(null); // Reference for the icon element

  // Function to toggle volume
  const toggleVolume = () => {
    const video = videoRef.current;
    const icon = iconRef.current;

    if (video.muted || video.volume === 0) {
      video.muted = false;
      video.volume = 1; // Ensure volume is set
      icon.textContent = "volume_up";
    } else {
      video.muted = true;
      video.volume = 0; // Optional: explicitly set volume to 0
      icon.textContent = "volume_off";
    }
  };
  return (
    <div>
      <div>
    <aside>
        <div class="menu-container">
            <div class="top">
            <img src= "./assets/Disney+-Logo.wine.svg" alt="logo" class="logo"/>
            <br/>
            <button onclick="document.location='https://www.hotstar.com/in/paywall'">Subscribe<img src="./assets/sub.png" alt="img"/></button>
            </div>
            <div class="nav">
                <ul>
                    <li>
                        <img src="./assets/space.png"  alt="img"/>
                    <a href="https://www.hotstar.com/in/mypage">My Space</a>
                    
                    </li>
                    <li><img src="./assets/search.png" alt="img"/><a href="https://www.hotstar.com/in/explore">Search</a></li>
                    <li><img src="./assets/home.png" alt="img"/><a href="https://www.hotstar.com/in/home" id="home">Home</a></li>
                    <li><img src="./assets/tv.png" alt="img"/><a href="https://www.hotstar.com/in/shows">Tv</a></li>
                    <li><img src="./assets/movie.png" alt="img"/><a href="https://www.hotstar.com/in/movies">Movies</a></li>
                    <li><img src="./assets/sports.png" alt="img"/><a href="https://www.hotstar.com/in/sports">Sports</a></li>
                    <li><img src="./assets/cate.png" alt="img"/><a href="https://www.hotstar.com/in/categories">Categories</a></li>
                </ul>
            </div>
        </div>
    </aside>
    <div class="promo">
        <div>
            
        <video
        src="./assets/vikr.mp4"
        autoPlay
        loop
        muted
        id="myVideo"
        ref={videoRef}
        alt="mp4"
      />
            <button id="volumeButton" onClick={toggleVolume}>
        <span id="icon" ref={iconRef} className="material-symbols-rounded">
          volume_off
        </span>
      </button>
        </div>
        <div class="content">
            <img id="logo" src="./assets/vik logo.webp" alt="img" />
            <p><strong>Blockbuster</strong></p>
            <h4 id="data"><span>2022</span><li></li><span>Movie</span><li></li><span>5 Languages</span><li></li><span id="certifi">U/A 16+</span></h4>
            <p>A special agent investigates a murder committed by a masked group of serial killers. However, a tangled maze of clues soon leads him to the drug kingpin of Chennai.</p>
            <h4>Action | Thriller | Tragedy | Power Struggle</h4>
            <div class="lang">
                <button>Tamil <span>Original</span></button>
                <button>Hindi</button>
                <button>Telugu</button>
                <button>Malayalam</button>
                <button>Kanada</button>
            </div>
            <div class="interactions">
            <button id="sw" onclick="document.location='https://hotstar.com/in/paywall?content_id=1260106598&content_title=Vikram&content_type=MOVIE&is_content_paid=false'"><img src="./assets/play.png" alt="img"/><h3>Subscribe To Watch</h3></button>
            <button id="playlist">+</button>
            </div>
        </div>
    </div>
    <div class="latest">
            <strong>Latest Releases</strong>
            
            <div class="flexing">
            <img src="assets/li6.webp" class="listing" alt="img" /> 
            <img src="assets/li7.webp" class="listing" alt="img" /> 
            <img src="assets/li8.webp" class="listing" alt="img" /> 
            <img src="assets/li9.webp" class="listing" alt="img" /> 
            <img src="assets/li5.webp" class="listing" alt="img" /> 
            <img src="assets/li1.webp" class="listing" alt="img" /> 
            <img src="assets/li2.webp" class="listing" alt="img" /> 
            <img src="assets/li3.webp" class="listing" alt="img" /> 
            <img src="assets/li4.webp" class="listing" alt="img" /> 
            <img src="assets/li5.webp" class="listing" alt="img" /> 
            </div>
        </div>

        <div class="latest" id="line2">
            <strong>Top In India Today - Tamil</strong>
            
            <div class="flexing">
            <img src="assets/top1.webp" class="listing" alt="img" /> 
            <img src="assets/top2.webp" class="listing" alt="img" /> 
            <img src="assets/top3.webp" class="listing" alt="img" /> 
            <img src="assets/top4.webp" class="listing" alt="img" /> 
            <img src="assets/top5.webp" class="listing" alt="img" /> 
            <img src="assets/top6.webp" class="listing" alt="img" /> 
            <img src="assets/top7.webp" class="listing" alt="img" /> 
            <img src="assets/top8.webp" class="listing" alt="img" /> 
            <img src="assets/top9.webp" class="listing" alt="img" /> 
            <img src="assets/top10.webp" class="listing" alt="img" /> 
            </div>
        </div>

        <div class="latest" id="line3">
            <strong>Shows-Tamil</strong>
            
            <div class="flexing">
            <img src="assets/show10.webp" class="listing" alt="img" /> 
            <img src="assets/show1.webp" class="listing" alt="img" /> 
            <img src="assets/show2.webp" class="listing" alt="img" /> 
            <img src="assets/show3.webp" class="listing" alt="img" /> 
            <img src="assets/show4.webp" class="listing" alt="img" /> 
            <img src="assets/show5.webp" class="listing" alt="img" /> 
            <img src="assets/show6.webp" class="listing" alt="img" /> 
            <img src="assets/show7.webp" class="listing" alt="img" /> 
            <img src="assets/show8.webp" class="listing" alt="img" /> 
            <img src="assets/show9.webp" class="listing" alt="img" /> 
            </div>

            <footer class="footer">
                <div class="footer-container">
                  <div class="footer-section">
                    <h4>Company</h4>
                    <ul>
                      <li><a href="# ">About Us</a></li>
                      <li><a href="# ">Careers</a></li>
                    </ul>
                  </div>
                  <div class="footer-section">
                    <h4>View Website in</h4>
                    <ul>
                      <li>✓ English</li>
                    </ul>
                  </div>
                  <div class="footer-section">
                    <h4>Need Help?</h4>
                    <ul>
                      <li><a href="# ">Visit Help Center</a></li>
                      <li><a href="# ">Share Feedback</a></li>
                    </ul>
                  </div>
                  <div class="footer-section">
                    <h4>Connect with Us</h4>
                    <div class="social-links">
                      <a href="# "><i class="fab fa-facebook-f"></i></a>
                      <a href="# "><i class="fab fa-twitter"></i></a>
                    </div>
                    <div class="store-links">
                      <a href="# "><img src="assets/google-playstore.webp" alt="Google Play"/></a>
                      <a href="# "><img src="assets/ios-appstore.webp" alt="App Store"/></a>
                    </div>
                  </div>
                </div>
                <div class="footer-bottom">
                  <p>© 2024 STAR. All Rights Reserved.</p>
                  <ul>
                    <li><a href="# ">Terms Of Use</a></li>
                    <li><a href="# ">Privacy Policy</a></li>
                    <li><a href="# ">FAQ</a></li>
                  </ul>
                </div>
              </footer>
              </div> </div> </div>
  );
}

export default App;
