import '../currentlyMonitoring/current.css'
export default function DangTheoDoi(){
    function closeDangTheoDoi(){
        let dangtheodoi = (document.getElementById('containerdangtheodoi')as HTMLElement)
        dangtheodoi.style.display = 'none'
    }
    return(
        <>
        <div id="containerdangtheodoi">
        <div className="childdangtheodoi">
          <div  className="header_content">
            <h5>Đang theo dõi</h5>
            <i className="bi bi-x-lg" 
            onClick={closeDangTheoDoi}
            ></i>
          </div>
          <hr/>
          <input type="text" placeholder="Tìm kiếm" name="" id=""/>
          <div className="content">
            <div className="item">
              <div className="account">
                <img src="../img/avata.jpg" alt=""/>
                <a href="#">Hoangton</a>
              </div>
              <div>
                <button><a href="#">Bỏ theo dõi</a></button>
              </div>
            </div>
            <div className="item">
              <div className="account">
                <img src="../img/avata.jpg" alt=""/>
                <a href="#">Hoangton</a>
              </div>
              <div>
                <button><a href="#">Bỏ theo dõi</a></button>
              </div>
            </div>
            <div className="item">
              <div className="account">
                <img src="../img/avata.jpg" alt=""/>
                <a href="#">Hoangton</a>
              </div>
              <div>
                <button><a href="#">Bỏ theo dõi</a></button>
              </div>
            </div>
            <div className="item">
              <div className="account">
                <img src="../img/avata.jpg" alt=""/>
                <a href="#">Hoangton</a>
              </div>
              <div>
                <button><a href="#">Bỏ theo dõi</a></button>
              </div>
            </div>
            <div className="item">
              <div className="account">
                <img src="../img/avata.jpg" alt=""/>
                <a href="#">Hoangton</a>
              </div>
              <div>
                <button><a href="#">Bỏ theo dõi</a></button>
              </div>
            </div>
            <div className="item">
              <div className="account">
                <img src="../img/avata.jpg" alt=""/>
                <a href="#">Hoangton</a>
              </div>
              <div>
                <button><a href="#">Bỏ theo dõi</a></button>
              </div>
            </div>
            <div className="item">
              <div className="account">
                <img src="../img/avata.jpg" alt=""/>
                <a href="#">Hoangton</a>
              </div>
              <div>
                <button><a href="#">Bỏ theo dõi</a></button>
              </div>
            </div>
            <div className="item">
              <div className="account">
                <img src="../img/avata.jpg" alt=""/>
                <a href="#">Hoangton</a>
              </div>
              <div>
                <button><a href="#">Bỏ theo dõi</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}