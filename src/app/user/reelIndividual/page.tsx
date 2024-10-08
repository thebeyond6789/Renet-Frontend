import '../reelIndividual/reel.css'
export default function ReelIndividual(){
    function clickHienDetailreels(){
        let reel = document.getElementById('detailReels')as HTMLElement
        reel.style.display = "block"
    }
    function clickAnDetailreels(){
        let reel = document.getElementById('detailReels')as HTMLElement
        reel.style.display = "none"
    }
    function clickHienCommentReels(){
        let commentReel = document.getElementById('commentReels')as HTMLElement
        commentReel.style.display = "block"
    }
    function clickAnCommentReels(){
        let commentReel = document.getElementById('commentReels')as HTMLElement
        commentReel.style.display = "none"
    }
    return(
        <>
        <div id="containerReels">
        <div className="childReels">
          <div className="item" onClick={clickHienDetailreels} >
            <video>
              <source src="../img/video1.mp4" type="video/mp4"/>
          </video>
          <span><i className="bi bi-play-fill"></i>1000 N</span>
          </div>
          <div className="item">
            <video>
              <source src="../img/video2.mp4" type="video/mp4"/>
          </video>
          <span><i className="bi bi-play-fill"></i>1000 N</span>
          </div>
          <div className="item">
            <video>
              <source src="../img/video3.mp4" type="video/mp4"/>
          </video>
          <span><i className="bi bi-play-fill"></i>1000 N</span>
          </div>
          <div className="item">
            <video>
              <source src="../img/video4.mp4" type="video/mp4"/>
          </video>
          <span><i className="bi bi-play-fill"></i>1000 N</span>
          </div>
          <div className="item">
            <video>
              <source src="../img/video1.mp4" type="video/mp4"/>
          </video>
          <span><i className="bi bi-play-fill"></i>1000 N</span>
          </div>
          <div className="item">
            <video>
              <source src="../img/video2.mp4" type="video/mp4"/>
          </video>
          <span><i className="bi bi-play-fill"></i>1000 N</span>
          </div>
          <div className="item">
            <video>
              <source src="../img/video3.mp4" type="video/mp4"/>
          </video>
          <span><i className="bi bi-play-fill"></i>1000 N</span>
          </div>
          <div className="item">
            <video>
              <source src="../img/video4.mp4" type="video/mp4"/>
          </video>
          <span><i className="bi bi-play-fill"></i>1000 N</span>
          </div>
        </div>
      </div>
      {/* <!-- detailreel --> */}
      <div className="detailReel" id="detailReels">
        <i id="closeCart" 
        onClick={clickAnDetailreels}
        className="bi bi-x-lg"></i>
        <div className="postLeft">
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
                <video controls autoPlay muted>
                    <source src="../img/video3.mp4" type="video/mp4" />
                </video>

              </div>
              <div className="containerIcon">
                <i className="fa-regular fa-heart"></i>
                <i
                onClick={clickHienCommentReels}
                  className="fa-regular fa-comment"
                ></i>
                <i className="fa-regular fa-paper-plane"></i>
              </div>
              <div className="contentTitle">
                <a
                  className="luotThich d-block text-decoration-none text-black"
                  href="#">2 lượt thích</a>
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
      {/* <!-- commentreels --> */}
      <div className="commentReel" id="commentReels">
        <i id="closeCart" onClick={clickAnCommentReels}
        className="bi bi-x-lg"></i>
        <div className="childcommentReel">
          <div className="detailRight">
            <div className="item">
              <div className="post-images">
                <video controls autoPlay muted>
                  <source src="../img/video3.mp4" type="video/mp4"/>
              </video>                
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