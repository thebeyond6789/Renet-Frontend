import React, { useEffect, useState } from 'react';
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
  const [Accounts, setAccount] = useState<any>([])
  useEffect(() => {

    const FetchFriend = async () => {
      const Res = await fetch("http://localhost:4000/account/allAccount")
      const data = await Res.json();
      setAccount(data);

    }
    FetchFriend();
  });
  return (
    <>
      <div className="d-flex align-items-center justify-content-center" id="theChaFriend">
        <a className="prevFriendBtn bi bi-caret-left" id="btn"></a>
        <div className="containerFriend">
          {
            Accounts.map((acc:any)=> (
              <div className="itemFriend">
            <div className="img">
              <img src={`../img/${acc.avata}`} alt="" />
              <div className="trangthai"></div>
            </div>
            <a href="#">{acc.lastName}</a>
          </div>
            ))
          }
        </div>
        <a className="nextFriendBtn bi bi-caret-right" id="btn"></a>
      </div>
    </>
  );
};

export default Friend;
