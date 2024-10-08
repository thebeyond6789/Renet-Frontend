'use client'
import { useEffect } from 'react';
import '../detailPost/detail.css'
export default function DetailPost(){
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
      function clickAnDetailpost(){
        let anDetailPost = (document.getElementById('detailPost') as HTMLElement)
        anDetailPost.style.display = 'none'
      }
    return(
        <>
        <div className="detailPost" id="detailPost">
        <i id="closeCart" 
        onClick={clickAnDetailpost}
        className="bi bi-x-lg"></i>
        <div className="childdetailPost">
          <div className="detailRight">
            <div className="item">
              <div className="post-images">
                <img src="../img/hoangton.jpg"alt="Post Image 1"className="active"/>
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
            </div>
          </div>
          <div className="detailLeft">
            <div className="avatarPost">
              <img src="../img/hoangton1.jpg" alt="" />
              <a href="#">Hoangton1210</a>
            </div>
            <div className="containerComment">
              <div className="commentdetail">
                <div className="avatarUser">
                  <div className="img">
                    <img src="../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <a href="#">Hoàng Tôn</a>
                    <label>đẹp trai quá</label>
                  </div>
                </div>
                <div className="repComment">
                  <span>1 tuần</span>
                  <a href="#">Trả lời</a>
                </div>
              </div>
              <div className="commentdetail">
                <div className="avatarUser">
                  <div className="img">
                    <img src="../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <a href="#">Hoàng Tôn</a>
                    <label>đẹp trai quá</label>
                  </div>
                </div>
                <div className="repComment">
                  <span>1 tuần</span>
                  <a href="#">Trả lời</a>
                </div>
              </div>
              <div className="commentdetail">
                <div className="avatarUser">
                  <div className="img">
                    <img src="../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <a href="#">Hoàng Tôn</a>
                    <label>đẹp trai quá</label>
                  </div>
                </div>
                <div className="repComment">
                  <span>1 tuần</span>
                  <a href="#">Trả lời</a>
                </div>
              </div>
              <div className="commentdetail">
                <div className="avatarUser">
                  <div className="img">
                    <img src="../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <a href="#">Hoàng Tôn</a>
                    <label>đẹp trai quá</label>
                  </div>
                </div>
                <div className="repComment">
                  <span>1 tuần</span>
                  <a href="#">Trả lời</a>
                </div>
              </div>
              <div className="commentdetail">
                <div className="avatarUser">
                  <div className="img">
                    <img src="../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <a href="#">Hoàng Tôn</a>
                    <label>đẹp trai quá</label>
                  </div>
                </div>
                <div className="repComment">
                  <span>1 tuần</span>
                  <a href="#">Trả lời</a>
                </div>
              </div>
              <div className="commentdetail">
                <div className="avatarUser">
                  <div className="img">
                    <img src="../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <a href="#">Hoàng Tôn</a>
                    <label>đẹp trai quá</label>
                  </div>
                </div>
                <div className="repComment">
                  <span>1 tuần</span>
                  <a href="#">Trả lời</a>
                </div>
              </div>
              <div className="commentdetail">
                <div className="avatarUser">
                  <div className="img">
                    <img src="../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <a href="#">Hoàng Tôn</a>
                    <label>đẹp trai quá</label>
                  </div>
                </div>
                <div className="repComment">
                  <span>1 tuần</span>
                  <a href="#">Trả lời</a>
                </div>
              </div>
              <div className="commentdetail">
                <div className="avatarUser">
                  <div className="img">
                    <img src="../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <a href="#">Hoàng Tôn</a>
                    <label>đẹp trai quá</label>
                  </div>
                </div>
                <div className="repComment">
                  <span>1 tuần</span>
                  <a href="#">Trả lời</a>
                </div>
              </div>
            </div>
            <div className="containerIcon">
              <i className="fa-regular fa-heart"></i>
              <i className="fa-regular fa-comment"></i>
              <i className="fa-regular fa-paper-plane"></i>
              <span className="d-block">1000 lượt thích </span>
            </div>
            <div className="inPutThemBL">
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Thêm bình luận..."
                />
                <i className="fa-solid fa-face-smile"></i>
                <button type="submit"><a href="#">Đăng</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}