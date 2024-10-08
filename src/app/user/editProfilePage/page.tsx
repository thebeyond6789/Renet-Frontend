'use client'
import Nav from '../navbar/page'
import '../editProfilePage/edit.css'
export default function EditProfile(){
    return(
        <>
        <Nav/>
        <div className="edit-profile">
        <h3>Hồ sơ</h3>
        <div className="profile-form">
          <div className="profile-picture">
            <div className="img">
              <img src="../img/avata.jpg" alt="Profile Picture" />
              <div className="addAvatar">
                <i className="bi bi-pencil-square"></i>
              </div>
            </div>
            <div>
              <a href="#">Tôn văn hoàng</a>
              <p>Hoangton1210@gmail.com</p>
            </div>
          </div>
          <div className="form-columns">
            <div className="profile-form-column">
              <div className="form-group">
                <label >Tên tài khoản</label>
                <div className="content">
                  <p>Tôn Văn hoàng</p>
                 <i 
                //  onclick="hienFormEdit()"
                  className="bi bi-pencil-square"></i>
                </div>
              </div>
              <div className="form-group">
                <label >Bio</label>
                <div className="content">
                  <p>hello mọi người</p>
                 <i className="bi bi-pencil-square"></i>
                </div>
              </div>
              <div className="form-group">
                <label >Ngày sinh</label>
                <div className="content">
                  <p>12/10/2024</p>
                 <i className="bi bi-pencil-square"></i>
                </div>             
               </div>
              <div className="form-group">
                <label >Giới tính</label>
                <div className="content">
                  <p>Nam</p>
                 <i className="bi bi-pencil-square"></i>
                </div>
              </div>
              <div className="form-group">
                <label >Bắt đầu chơi từ ngày</label>
                <div className="content">
                  <p>22/08/2024</p>
                </div>
              </div>
            </div>
            <div className="profile-form-column">
              <div className="form-group">
                <label >Mật khẩu</label>
                <div className="content">
                  <p>123123123</p>
                  <i className="bi bi-pencil-square"></i>
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <div className="content">
                  <p>hoangton1210@gmail.com</p>
                  <i className="bi bi-pencil-square"></i>
                </div>
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <div className="content">
                  <p>12121212</p>
                  <i className="bi bi-pencil-square"></i>
                </div>
              </div>
              <div className="form-group btn">
                <button className="btndelete">Xóa tài khoản</button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}