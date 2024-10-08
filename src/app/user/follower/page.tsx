import '../follower/flower.css'
export default function Flower(){
    function closeNguoiTheoDoi(){
        let nguoitheodoi = (document.getElementById('containernguoitheodoi')as HTMLElement)
        nguoitheodoi.style.display = 'none'
    }
    return(
        <>
        <div id="containernguoitheodoi">
        <div className="childnguoitheodoi">
          <div  className="header_content">
            <h5>Người theo dõi</h5>
            <i className="bi bi-x-lg" 
            onClick={closeNguoiTheoDoi}
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
                <button><a href="#">Theo dõi</a></button>
              </div>
            </div>
            <div className="item">
              <div className="account">
                <img src="../img/avata.jpg" alt=""/>
                <a href="#">Hoangton</a>
              </div>
              <div>
                <button><a href="#">Theo dõi</a></button>
              </div>
            </div>
            <div className="item">
              <div className="account">
                <img src="../img/avata.jpg" alt=""/>
                <a href="#">Hoangton</a>
              </div>
              <div>
                <button><a href="#">Theo dõi</a></button>
              </div>
            </div>
            <div className="item">
              <div className="account">
                <img src="../img/avata.jpg" alt=""/>
                <a href="#">Hoangton</a>
              </div>
              <div>
                <button><a href="#">Theo dõi</a></button>
              </div>
            </div>
            <div className="item">
              <div className="account">
                <img src="../img/avata.jpg" alt=""/>
                <a href="#">Hoangton</a>
              </div>
              <div>
                <button><a href="#">Theo dõi</a></button>
              </div>
            </div>
            <div className="item">
              <div className="account">
                <img src="../img/avata.jpg" alt=""/>
                <a href="#">Hoangton</a>
              </div>
              <div>
                <button><a href="#">Theo dõi</a></button>
              </div>
            </div>
            <div className="item">
              <div className="account">
                <img src="../img/avata.jpg" alt=""/>
                <a href="#">Hoangton</a>
              </div>
              <div>
                <button><a href="#">Theo dõi</a></button>
              </div>
            </div>
            <div className="item">
              <div className="account">
                <img src="../img/avata.jpg" alt=""/>
                <a href="#">Hoangton</a>
              </div>
              <div>
                <button><a href="#">Theo dõi</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}