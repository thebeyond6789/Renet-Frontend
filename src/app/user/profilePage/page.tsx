'use client'
import Link from "next/link"
import Nav from "../navbar/page"
import '../profilePage/profile.css'
import Flower from "../follower/page"
import DangTheoDoi from "../currentlyMonitoring/page"
import PostIndividual from "../postIndividual/page"
import ReelIndividual from "../reelIndividual/page"
export default function Profile(){
  function showNguoiTheoDoi(){
    let nguoitheodoi = (document.getElementById('containernguoitheodoi') as HTMLElement);
    nguoitheodoi.style.display = 'block';
}
function showDangTheoDoi(){
    let dangtheodoi = (document.getElementById('containerdangtheodoi') as HTMLElement);
    dangtheodoi.style.display = 'block';
}
    function hienPosts(){
      let post = (document.getElementById('containerPosts')as HTMLElement)
      let reel = (document.getElementById('containerReels')as HTMLElement)
      post.style.display = "block"
      reel.style.display = "none"
    }
    function hienReels(){
      let post = (document.getElementById('containerPosts')as HTMLElement)
      let reel = (document.getElementById('containerReels')as HTMLElement)
      post.style.display = "none"
      reel.style.display = "block"
    }
    return(
        <>
            <Nav/>
            <main>
      <div className="profile-header">
        <div className="profile-pic">
          <img src="../img/hoangton1.jpg" alt="" />
        </div>
        <div className="profile-info">
          <div className="profile-username">
            <h5>Hoàng Tôn</h5>
            <div>
              <button className="button">
                <Link href="/user/editProfilePage">Chỉnh sửa</Link>
              </button>
              <button className="button"><a href="#">Đăng Xuất</a></button>
            </div>
          </div>
          <div className="profile-stats">
            <span>0<label>Bài đăng</label></span>
            <a 
            onClick={showNguoiTheoDoi}
            >497<label>Người theo dõi</label></a>
            <a 
            onClick={showDangTheoDoi}
            >10000<label>Đang theo dõi</label></a>
          </div>
          {/* <!-- <div className="profile-bio">Tên đầy đủ</div> --> */}
        </div>
      </div>
      <div className="new-post">
        <i className="fa-solid fa-plus"></i>
      </div>
      <div className="tabs">
        <div className="tab"><i className="fa-solid fa-grid p-1" 
        onClick={hienPosts}
        >Posts</i></div>
        <div className="tab"><i className="fa-solid fa-grid p-1" onClick={hienReels} >Reels</i> </div>
      </div>
      <PostIndividual/>
      <ReelIndividual/>
      {/* <!-- người theo dõi --> */}
      <Flower/>
      {/* <!-- dang theo dõi --> */}
      <DangTheoDoi/>
          </main>
        </>
    )
}