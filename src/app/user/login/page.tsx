import '../login/login.css';
import Link from 'next/link';
export default function Login(){
    return(
        <>
        <div className="container" id="loginPage">
      <div className="container_con d-flex">
        <div className="container_left">
          <div className="my-3">
            <h2>Xin chào bạn đã đến với renet</h2>
          </div>
          <div className="img">
            <img src="../img/khungdienthoai.jpg" alt="" />
            <div className="con">
              <div className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="/img/screenshot1.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item .imgcon">
                    <img
                      src="/img/screenshot2.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item .imgcon">
                    <img
                      src="/img/screenshot3.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item .imgcon">
                    <img
                      src="/img/screenshot4.png"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 container_right p-0">
          <div className="item-1 m-auto">
            <h2 className="text-center my-4">Renet</h2>
            <div className="mb-2 m-auto">
              <label>Gmail</label>
              <input
                type="text"
                id="gmail"
                placeholder="Vui lòng nhập gmail..."
              />
              <span className="text-danger d-none">Vui lòng nhập đúng để đăng nhập!</span>
            </div>
            <div className="mb-3 m-auto">
              <label>Mật khẩu</label>
              <input
                type="text"
                id="password"
                placeholder="Vui lòng nhập mật khẩu..."
              />
              <span className="text-danger d-none">Vui lòng nhập đúng để đăng nhập!</span>
            </div>

            <div className="quenmatkhau m-auto">
              <a href="#/" className="text-decoration-none">Quên mật khẩu?</a>
            </div>
            <div className="text-center btnLogin">
              <button type="submit">
                <Link href="/user/homePage" className="text-decoration-none">Đăng Nhập</Link>
              </button>
            </div>
          </div>
          <div className="item-2 my-4 row">
            <div className="col-4"></div>
            <div className="col-1 p-0 text-center">OR</div>
            <div className="col-4"></div>
          </div>
          <div className="my-3 item-3">
            <button>
              Bạn có tài khoản chưa?
                <Link href='/user/register' className="text-decoration-none">Đăng ký</Link>
            </button>
          </div>
          <div className="my-3 item-4">
            <button className="">
              <div className="img">
                <img src="../img/facebook.avif" alt="" />
              </div>
              <a href="#">Đăng nhập bằng Facebook</a>
            </button>
          </div>
          <div className="my-3 item-5">
            <button>
              <div className="img">
                <img src="../img/google.png" alt="" />
              </div>
              <a href="#">Đăng nhập bằng Google</a>
            </button>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}