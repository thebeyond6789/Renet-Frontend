'use client'
import Nav from "../navbar/page"
import '../notificationPage/notification.css'
import Suggestion from "../suggestion/page"
export default function Notification(){
    return(
        <>
        <Nav/>
        <div className="containerPost">
        <div className="postLeft">
          <div className="item" style={{ marginBottom: "100px" }}>
            <h3>Thông báo</h3>
            <div className="homnay">
              <h6>Hôm nay</h6>
              <div className="gachaffter">
                <div className="thongbaocon">
                  <div className="img">
                    <img src="../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <span
                      ><a href="#">Hoangton</a>đã yêu thích bài viết của bạn ❤️
                      hehee</span>
                  </div>
                </div>
              </div>
              <div className="gachaffter">
                <div className="thongbaocon">
                  <div className="img">
                    <img src="../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <span
                      ><a href="#">Hoangton</a>đã yêu thích bài viết của bạn ❤️
                      heheheeehehe eheehehhheheh eheeh ehhe hehee
                      lolooooooloooooooooooooooooooooooooooo</span>
                  </div>
                </div>
              </div>
              <div className="gachaffter">
                <div className="thongbaocon">
                  <div className="img">
                    <img src="../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <span
                      ><a href="#">Hoangton</a>đã yêu thích bài viết của bạn ❤️
                      heheheeehehe eheehehhheheh eheeh ehhe hehee</span>
                  </div>
                </div>
              </div>
              <div className="gachaffter">
                <div className="thongbaocon">
                  <div className="img">
                    <img src="../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <span
                      ><a href="#">Hoangton</a>đã yêu thích bài viết của bạn ❤️
                      heheheeehehe eheehehhheheh eheeh ehhe hehee</span>
                  </div>
                </div>
              </div>
              <div className="gachaffter">
                <div className="thongbaocon">
                  <div className="img">
                    <img src="../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <span
                      ><a href="#">Hoangton</a>đã yêu thích bài viết của bạn ❤️
                      heheheeehehe eheehehhheheh eheeh ehhe hehee</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="truocdo">
              <h6>Trước đó</h6>
              <div className="gachaffter">
                <div className="thongbaocon">
                  <div className="img">
                    <img src="../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <span
                      ><a href="#">Hoangton</a>đã yêu thích bài viết của bạn ❤️
                      heheheeehehe eheehehhheheh eheeh ehhe hehee</span>
                  </div>
                </div>
              </div>
              <div className="gachaffter">
                <div className="thongbaocon">
                  <div className="img">
                    <img src="../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <span
                      ><a href="#">Hoangton</a>đã yêu thích bài viết của bạn ❤️
                      heheheeehehe eheehehhheheh eheeh ehhe hehee</span>
                  </div>
                </div>
              </div>
              <div className="gachaffter">
                <div className="thongbaocon">
                  <div className="img">
                    <img src="../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <span
                      ><a href="#">Hoangton</a>đã yêu thích bài viết của bạn ❤️
                      heheheeehehe eheehehhheheh eheeh ehhe hehee</span>
                  </div>
                </div>
              </div>
              <div className="gachaffter">
                <div className="thongbaocon">
                  <div className="img">
                    <img src="../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <span
                      ><a href="#">Hoangton</a>đã yêu thích bài viết của bạn ❤️
                      heheheeehehe eheehehhheheh eheeh ehhe hehee</span>
                  </div>
                </div>
              </div>
              <div className="gachaffter">
                <div className="thongbaocon">
                  <div className="img">
                    <img src="../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <span
                      ><a href="#">Hoangton</a>đã yêu thích bài viết của bạn ❤️
                      heheheeehehe eheehehhheheh eheeh ehhe hehee</span>
                  </div>
                </div>
              </div>
              <div className="gachaffter">
                <div className="thongbaocon">
                  <div className="img">
                    <img src="../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <span
                      ><a href="#">Hoangton</a>đã yêu thích bài viết của bạn ❤️
                      heheheeehehe eheehehhheheh eheeh ehhe hehee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- gợi ý --> */}
          <Suggestion/>
      </div>
        </>
    )
}