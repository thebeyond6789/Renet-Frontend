import React, { useEffect } from 'react';
import '../friend/friend.css';

const Friend: React.FC = () => {
  useEffect(() => {
    const containerFriend = document.querySelector('.containerFriend') as HTMLElement;
    const nextFriendBtn = document.querySelector('.nextFriendBtn') as HTMLAnchorElement;
    const prevFriendBtn = document.querySelector('.prevFriendBtn') as HTMLAnchorElement;
    const scrollAmount = 180; // Độ dài di chuyển (có thể điều chỉnh)
    if (nextFriendBtn) {
      nextFriendBtn.addEventListener('click', () => {
        containerFriend.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      });
    }
    if (prevFriendBtn) {
      prevFriendBtn.addEventListener('click', () => {
        containerFriend.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      });
    }
    // Cleanup the event listeners on component unmount
    return () => {
      if (nextFriendBtn) {
        nextFriendBtn.removeEventListener('click', () => {
          containerFriend.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
      }
      if (prevFriendBtn) {
        prevFriendBtn.removeEventListener('click', () => {
          containerFriend.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
      }
    };
  }, []);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center" id="theChaFriend">
        <a className="prevFriendBtn bi bi-caret-left" id="btn"></a>
        <div className="containerFriend">
          <div className="itemFriend">
            <div className="img">
              <img src="../img/hoangton1.jpg" alt="" />
              <div className="trangthai"></div>
            </div>
            <a href="#">Hoàng</a>
          </div>
          <div className="itemFriend">
            <div className="img">
              <img src="../img/hoangton.jpg" alt="" />
              <div className="trangthai"></div>
            </div>
            <a href="#">Hoàng</a>
          </div>
          <div className="itemFriend">
            <div className="img">
              <img src="../img/hoangton2.jpg" alt="" />
              <div className="trangthai"></div>
            </div>
            <a href="#">Hoàng</a>
          </div>
          <div className="itemFriend">
            <div className="img">
              <img src="../img/hoangton3.jpg" alt="" />
              <div className="trangthai"></div>
            </div>
            <a href="#">Hoàng</a>
          </div>
          <div className="itemFriend">
            <div className="img">
              <img src="../img/hoangton4.jpg" alt="" />
              <div className="trangthai"></div>
            </div>
            <a href="#">Hoàng</a>
          </div>
          <div className="itemFriend">
            <div className="img">
              <img src="../img/hoangton3.jpg" alt="" />
              <div className="trangthai"></div>
            </div>
            <a href="#">Hoàng</a>
          </div>
          <div className="itemFriend">
            <div className="img">
              <img src="../img/hoangton2.jpg" alt="" />
              <div className="trangthai"></div>
            </div>
            <a href="#">Hoàng</a>
          </div>
          <div className="itemFriend">
            <div className="img">
              <img src="../img/hoangton1.jpg" alt="" />
              <div className="trangthai"></div>
            </div>
            <a href="#">Hoàng</a>
          </div>
          <div className="itemFriend">
            <div className="img">
              <img src="../img/hoangton.jpg" alt="" />
              <div className="trangthai"></div>
            </div>
            <a href="#">Hoàng</a>
          </div>
          <div className="itemFriend">
            <div className="img">
              <img src="../img/hoangton4.jpg" alt="" />
              <div className="trangthai"></div>
            </div>
            <a href="#">Hoàng</a>
          </div>
          <div className="itemFriend">
            <div className="img">
              <img src="../img/hoangton1.jpg" alt="" />
              <div className="trangthai"></div>
            </div>
            <a href="#">Hoàng</a>
          </div>
          <div className="itemFriend">
            <div className="img">
              <img src="../img/hoangton1.jpg" alt="" />
              <div className="trangthai"></div>
            </div>
            <a href="#">Hoàng</a>
          </div>
        </div>
        <a className="nextFriendBtn bi bi-caret-right" id="btn"></a>
      </div>
    </>
  );
};

export default Friend;
