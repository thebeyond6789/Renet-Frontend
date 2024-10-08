import '../register/register.css'
import Link from 'next/link'
export default function Register(){
    return(
        <>
         <div className="container" id="registerPage">
      <div className="container_con m-auto">
        <div className="formregister p-0">
          <div className="item-1 m-auto">
            <h2 className="text-center my-4">Renet</h2>
            <div className="mb-3 m-auto">
              <input type="text" id="gmail" placeholder="Vui lòng nhập họ..." />
              <span className="text-danger d-none">Vui lòng nhập đúng để đăng nhập!</span>
            </div>
            <div className="mb-3 m-auto">
              <input
                type="text"
                id="gmail"
                placeholder="Vui lòng nhập tên..."
              />
              <span className="text-danger d-none">Vui lòng nhập đúng để đăng nhập!</span>
            </div>
            <div className="mb-3 m-auto">
              <input
                type="text"
                id="gmail"
                placeholder="Vui lòng nhập số điện thoại..."
              />
              <span className="text-danger d-none">Vui lòng nhập đúng để đăng nhập!</span>
            </div>
            <div className="mb-3 m-auto">
              <input
                type="text"
                id="password"
                placeholder="Vui lòng nhập gmail..."
              />
              <span className="text-danger d-none">Vui lòng nhập đúng để đăng nhập!</span>
            </div>
            <div className="mb-3 m-auto">
              <input
                type="text"
                id="password"
                placeholder="Vui lòng nhập mật khẩu..."/>
              <span className="text-danger d-none"/>
            </div>
            <div className="text-center btnLogin">
              <button type="submit">
                <a href="#/" className="text-decoration-none">Đăng Ký</a>
              </button>
            </div>
          </div>
          <div className="item-2 row">
            <div className="col-4"></div>
            <div className="col-1 p-0 text-center">OR</div>
            <div className="col-4"></div>
          </div>
          <div className="mb-3 item-3">
            <button>
              Bạn đã có tài khoản?<Link
                href="/user/login"
                className="text-decoration-none">Đăng Nhập</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}