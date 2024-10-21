'use client'
import { useEffect, useState } from 'react';
import "../../detailPost/detail.css"
import Link from 'next/link';

export default function DetailPost({ params }: { params: { id: string } }) {
  const [detailPost, setDetailPost] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Xử lý sự kiện nhấn nút Next/Prev và cập nhật trạng thái
  const handleNextImage = (imagesLength: number) => {
    setCurrentImageIndex(prev => (prev + 1) % imagesLength);
  };
  
  const handlePrevImage = (imagesLength: number) => {
    setCurrentImageIndex(prev => (prev - 1 + imagesLength) % imagesLength);
  };

  useEffect(() => {
    const showDetail = async () => {
      try {
        const res = await fetch(`http://localhost:4000/post/postByID/${params.id}`);
        const data = await res.json();
        setDetailPost(data);
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };
    showDetail();
  }, [params.id]);

  // Nếu chưa có dữ liệu thì hiển thị loading
  if (!detailPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detailPost" id="detailPost">
      <Link href="/user/homePage"><i id="closeCart" className="bi bi-x-lg"></i></Link>
      <div className="childdetailPost">
        {/* Hiển thị chi tiết bài viết khi dữ liệu đã được load */}
        <div className="detailRight">
          <div className="item">
            <div className="post-images">
              {detailPost.post && detailPost.post.length > 0 && (
                <>
                  <img
                    src={detailPost.post[currentImageIndex]}
                    alt="Post Image"
                    className="active"
                  />
                  <div className="image-indicators">
                    {detailPost.post.map((_: any, imgIndex: number) => (
                      <span
                        key={imgIndex}
                        className={`image-indicator ${imgIndex === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(imgIndex)}
                      ></span>
                    ))}
                  </div>
                  <div className="post-navigation">
                    <a
                      className="carousel-control-prev-icon prev-btn"
                      onClick={() => handlePrevImage(detailPost.post.length)}
                    ></a>
                    <a
                      className="carousel-control-next-icon next-btn"
                      onClick={() => handleNextImage(detailPost.post.length)}
                    ></a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Phần bình luận */}
        <div className="detailLeft">
          <div className="avatarPost">
            <img src="../../img/hoangton1.jpg" alt="" />
            <a href="#">Hoangton1210</a>
          </div>
          <div className="containerComment">
            {[...Array(7)].map((_, index) => (
              <div className="commentdetail" key={index}>
                <div className="avatarUser">
                  <div className="img">
                    <img src="../../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <a href="#">Hoàng Tôn</a>
                    <label>đẹp trai quá</label>
                  </div>
                </div>
                <div className="repComment">
                  <span>1 tuần</span>
                  <a href="#">Trả lời</a>
                </div>
              </div>
            ))}
          </div>
          <div className="containerIcon">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-comment"></i>
            <i className="fa-regular fa-paper-plane"></i>
            <span className="d-block">1000 lượt thích </span>
          </div>
          <div className="inPutThemBL">
            <div className="d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Thêm bình luận..."
              />
              <i className="fa-solid fa-face-smile"></i>
              <button type="submit"><a href="#">Đăng</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
