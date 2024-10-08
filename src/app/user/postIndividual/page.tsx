import '../postIndividual/post.css'
export default function PostIndividual(){
    function clickHienDetailpost(){
        let detail = (document.getElementById('detailPost')as HTMLElement )
        detail.style.display = 'block'
    }
    function closeDetail(){
        let detail = (document.getElementById('detailPost')as HTMLElement )
        detail.style.display = 'none'
    }
    function clickHienCommentPost(){
        let comment = (document.getElementById('commentPost')as HTMLElement )
        comment.style.display = 'block'
    }
    function closeComment(){
        let comment = (document.getElementById('commentPost')as HTMLElement )
        comment.style.display = 'none'
    }
    return(
        <>
        <div className="content-area" id="containerPosts">
        <div className="photo-grid">
          <div className="photo-row" onClick={clickHienDetailpost}>
            <img src="../img/hoangton1.jpg" alt="Image 1" />
          </div>
          <div className="photo-row">
            <img src="../img/hoangton1.jpg" alt="Image 4" />
          </div>
          <div className="photo-row">
            <img src="../img/hoangton1.jpg" alt="Image 7" />
          </div>
          <div className="photo-row">
            <img src="../img/hoangton1.jpg" alt="Image 8" />
          </div>
          <div className="photo-row">
            <img src="../img/hoangton1.jpg" alt="Image 8" />
          </div> 
          <div className="photo-row">
            <img src="../img/hoangton1.jpg" alt="Image 8" />
          </div>
        </div>
      </div>
      {/* detail */}
      <div className="detailPost" id="detailPost">
        <i id="closeCart" onClick={closeDetail}
        className="bi bi-x-lg"></i>
        <div className="postLeft">
            <div className="item">
              <div className="d-flex">
                <div className="img">
                  <img src="../img/hoangton.jpg" alt=""/>
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
                <i onClick={clickHienCommentPost} className="fa-regular fa-comment"></i>
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
      {/* <!-- commentpost --> */}
      <div className="commentPost" id="commentPost">
        <i id="closeCart" onClick={closeComment}
         className="bi bi-x-lg"></i>
        <div className="childcommentPost">
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
              <img src="../img/hoangton1.jpg" alt=""/>
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
                    <img src="../img/hoangton1.jpg" alt=""/>
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