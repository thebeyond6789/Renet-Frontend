'use client'
import { useEffect } from "react";
import Nav from "../navbar/page";
import Suggestion from "../suggestion/page";
import '../homePage/home.css';
import Friend from "../friend/page";
import DetailPost from "../detailPost/page";
export default function HomePage() {
  useEffect(() => {
    const posts = document.querySelectorAll('.post-images');
    posts.forEach((post) => {
      const images = post.querySelectorAll('img') as NodeListOf<HTMLImageElement>;
      const indicatorsContainer = post.querySelector('.image-indicators') as HTMLElement;
      const nextBtn = post.querySelector('.next-btn') as HTMLElement;
      const prevBtn = post.querySelector('.prev-btn') as HTMLElement;
      let currentIndex = 0;
      // Xóa các chỉ báo cũ trước khi thêm mới
      indicatorsContainer.innerHTML = '';
      // Function to show image at given index
      function showImage(index: number) {
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
        const indicators = indicatorsContainer.querySelectorAll('.image-indicator');
        indicators.forEach((indicator, i) => {
          if (i === index) {
            indicator.classList.add('active');
          } else {
            indicator.classList.remove('active');
          }
        });
      }
      // tạo chỉ báo cho ảnh
      images.forEach((_, index) => {
        const indicator = document.createElement('span');
        indicator.classList.add('image-indicator');
        if (index === currentIndex) {
          indicator.classList.add('active');
        }
        indicator.addEventListener('click', () => {
          currentIndex = index;
          showImage(currentIndex); // Call showImage to update the display
        });
        indicatorsContainer.appendChild(indicator);
      });
  
      // ảnh tiếp theo
      if (nextBtn) {
        nextBtn.addEventListener('click', function() {
          currentIndex++;
          if (currentIndex >= images.length) {
            currentIndex = 0;
          }
          showImage(currentIndex);
        });
      }
  
      // ảnh trước
      if (prevBtn) {
        prevBtn.addEventListener('click', function() {
          currentIndex--;
          if (currentIndex < 0) {
            currentIndex = images.length - 1;
          }
          showImage(currentIndex);
        });
      }
    });
  }, []);
  function clickHienDetailpost(){
    let showdetail = (document.getElementById('detailPost')as HTMLElement)
    showdetail.style.display = 'block'
  }
    return(
        <>
        <Nav/>
        <div className="containerPost">
        <div className="postLeft">
         <Friend/>
          {/* <!-- bài viết --> */}
          <div id="Post">
            <div className="item">
              <div className="d-flex">
                <div className="img">
                  <img src="../img/hoangton.jpg" alt="" />
                </div>
                <div className="content d-flex">
                  <a href="profilePage.html">Hoàng Tôn</a>
                  <span>6 ngày</span>
                </div>
              </div>
              <div className="post-images">
                <img
                  src="../img/hoangton.jpg"
                  alt="Post Image 1"
                  className="active"
                />
                <img src="../img/hoangton2.jpg" alt="Post Image 2" />
                <img src="../img/hoangton3.jpg" alt="Post Image 3" />
                <img src="../img/hoangton4.jpg" alt="Post Image 4" />
                <img src="../img/hoangton.jpg" alt="Post Image 5" />
                <div className="image-indicators"></div>
                <div className="post-navigation">
                  <a className="carousel-control-prev-icon prev-btn"></a>
                  <a className="carousel-control-next-icon next-btn"></a>
                </div>
              </div>
              <div className="containerIcon">
                <i className="fa-regular fa-heart"></i>
                <i onClick={clickHienDetailpost} className="fa-regular fa-comment"></i>
                <i className="fa-regular fa-paper-plane"></i>
              </div>
              <div className="contentTitle">
                <a
                  className="luotThich d-block text-decoration-none text-black"
                  href="#"
                  >2 lượt thích</a >
                <a className="titlePost" href="#"
                  ><label>Hoàng Tôn</label> Hello(title) helo helo helo
                  helo helo helo helo helo helo helo helo helohelo helo
                  helo😒😒😒</a >
              </div>
              <div className="inPutThemBL">
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Thêm bình luận..."
                  />
                  <button type="submit"><a href="#">Đăng</a></button>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="d-flex">
                <div className="img">
                  <img src="../img/hoangton.jpg" alt="" />
                </div>
                <div className="content d-flex">
                  <a href="profilePage.html">Hoàng Tôn</a>
                  <span>6 ngày</span>
                </div>
              </div>
              <div className="post-images">
                <img
                  src="../img/hoangton.jpg"
                  alt="Post Image 1"
                  className="active"
                />
                <img src="../img/hoangton2.jpg" alt="Post Image 2" />
                <img src="../img/hoangton3.jpg" alt="Post Image 3" />
                <img src="../img/hoangton4.jpg" alt="Post Image 4" />
                <img src="../img/hoangton.jpg" alt="Post Image 5" />
                <div className="image-indicators"></div>
                <div className="post-navigation">
                  <a className="carousel-control-prev-icon prev-btn"></a>
                  <a className="carousel-control-next-icon next-btn"></a>
                </div>
              </div>
              <div className="containerIcon">
                <i className="fa-regular fa-heart"></i>
                <i
                  // onclick={clickHienDetailpost}
                  className="fa-regular fa-comment"
                ></i>
                <i className="fa-regular fa-paper-plane"></i>
              </div>
              <div className="contentTitle">
                <a
                  className="luotThich d-block text-decoration-none text-black"
                  href="#"
                  >2 lượt thích</a>
                <a className="titlePost" href="#"
                  ><label>Hoàng Tôn</label> Hello(title) helo helo helo
                  helo helo helo helo helo helo helo helo helohelo helo
                  helo😒😒😒</a>
              </div>
              <div className="inPutThemBL">
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Thêm bình luận..."
                  />
                  <button type="submit"><a href="#">Đăng</a></button>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="d-flex">
                <div className="img">
                  <img src="../img/hoangton.jpg" alt="" />
                </div>
                <div className="content d-flex">
                  <a href="profilePage.html">Hoàng Tôn</a>
                  <span>6 ngày</span>
                </div>
              </div>
              <div className="post-images">
                <img
                  src="../img/hoangton.jpg"
                  alt="Post Image 1"
                  className="active"
                />
                <img src="../img/hoangton2.jpg" alt="Post Image 2" />
                <img src="../img/hoangton3.jpg" alt="Post Image 3" />
                <img src="../img/hoangton4.jpg" alt="Post Image 4" />
                <img src="../img/hoangton.jpg" alt="Post Image 5" />
                <div className="image-indicators"></div>
                <div className="post-navigation">
                  <a className="carousel-control-prev-icon prev-btn"></a>
                  <a className="carousel-control-next-icon next-btn"></a>
                </div>
              </div>
              <div className="containerIcon">
                <i className="fa-regular fa-heart"></i>
                <i
                //   onclick="clickHienDetailpost()"
                  className="fa-regular fa-comment"
                ></i>
                <i className="fa-regular fa-paper-plane"></i>
              </div>
              <div className="contentTitle">
                <a className="luotThich d-block text-decoration-none text-black" href="#" >2 lượt thích</a>
                <a className="titlePost" href="#"><label >Hoàng Tôn</label> Hello(title) helo helo helo
                  helo helo helo helo helo helo helo helo helohelo helo
                  helo😒😒😒</a>
              </div>
              <div className="inPutThemBL">
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Thêm bình luận..."
                  />
                  <button type="submit"><a href="#">Đăng</a></button>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="d-flex">
                <div className="img">
                  <img src="../img/hoangton.jpg" alt="" />
                </div>
                <div className="content d-flex">
                  <a href="profilePage.html">Hoàng Tôn</a>
                  <span>6 ngày</span>
                </div>
              </div>
              <div className="post-images">
                <img
                  src="../img/hoangton.jpg"
                  alt="Post Image 1"
                  className="active"
                />
                <img src="../img/hoangton2.jpg" alt="Post Image 2" />
                <img src="../img/hoangton3.jpg" alt="Post Image 3" />
                <img src="../img/hoangton4.jpg" alt="Post Image 4" />
                <img src="../img/hoangton.jpg" alt="Post Image 5" />
                <div className="image-indicators"></div>
                <div className="post-navigation">
                  <a className="carousel-control-prev-icon prev-btn"></a>
                  <a className="carousel-control-next-icon next-btn"></a>
                </div>
              </div>
              <div className="containerIcon">
                <i className="fa-regular fa-heart"></i>
                <i
                //   onclick="clickHienDetailpost()"
                  className="fa-regular fa-comment"
                ></i>
                <i className="fa-regular fa-paper-plane"></i>
              </div>
              <div className="contentTitle">
                <a
                  className="luotThich d-block text-decoration-none text-black"
                  href="#"
                  >2 lượt thích</a>
                <a className="titlePost" href="#"
                  ><label>Hoàng Tôn</label> Hello(title) helo helo helo
                  helo helo helo helo helo helo helo helo helohelo helo
                  helo😒😒😒</a>
              </div>
              <div className="inPutThemBL">
                <div className="d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Thêm bình luận..."
                  />
                  <button type="submit"><a href="#">Đăng</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- gợi ý --> */}
        <Suggestion/>
      </div>
      <DetailPost/>
        </>
    )
}