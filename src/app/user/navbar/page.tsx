import '../navbar/nav.css'
import Link from 'next/link'
import Search from '../search/page'
export default function Nav(){
    function ClickSearch(){
        let navconhien = document.getElementById('ulnavcon') as HTMLElement;
        if (navconhien.style.display === 'block') { //điều hiện nếu nó hiện
            navconhien.style.display = 'none'; // click dô thì nó ẩn
        } else {
            navconhien.style.display = 'block'; // ngược lại nếu nó ẩn thì click dô nó hiện
        }
    }
    return(
        <>
          <nav>
        <i className="iconlogo">R</i><h2>Renet</h2>
        <div className="container_ul">
          <ul>
              <li><Link href="/user/homePage"><i className="bi bi-house-door"></i><span>Trang chủ</span></Link></li>
              <li>
              <a href="#" id="searchButton" onClick={ClickSearch}>
                <i className="bi bi-search"></i>
                <span>Tìm kiếm</span>
              </a>
                  <Search/>
              </li>
              <li className="tinnhan">
                <Link href="/user/mesagePage"><i className="bi bi-chat-dots"></i><span>Nhắn tin</span></Link>
                </li>
              <li>
                <Link href="/user/reelPage"><i className="bi bi-camera-video"></i><span>Reels</span></Link>
              </li>
              <li>
                <Link href="/user/postORreel"><i className="bi bi-plus-circle"></i><span>Đăng bài</span></Link>
                </li>
              <li><Link href="/user/notificationPage">
              <i className="bi bi-bell"></i><span>Thông báo</span>
              </Link></li>
              <li><Link href="/user/profilePage"><i className="bi bi-person"></i><span>Hồ sơ</span></Link></li>
              <li><a href="quanlyaccount.html"><i className="bi bi-list"></i><span>Quản lí người dùng</span></a></li>
          </ul>
      </div>
        </nav>
        </>
    )
}