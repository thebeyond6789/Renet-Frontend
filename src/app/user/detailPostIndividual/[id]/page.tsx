'use client'
import { useEffect, useState } from "react"
import "../../detailPostIndividual/cssdetail.css"
import Link from "next/link";
export default function DetailpostIndividual({ params }: { params: { id: string } }) {
  const [detailPost, setPost] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // Sử dụng biến duy nhất để quản lý chỉ số ảnh

  useEffect(() => {
    const detailPost = async () => {
      const res = await fetch(`http://localhost:4000/post/postByID/${params.id}`);
      const data = await res.json();
      setPost(data);
      console.log(data);
    }
    detailPost();
  },[params.id]);

  const handleNextImage = (imagesLength: number) => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesLength);
  };

  const handlePrevImage = (imagesLength: number) => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imagesLength) % imagesLength);
  };

  return (
      <div className="detailPostIndividual" id="detailPost">
        <Link href={`/user/profilePage`}>
        <i id="closeCart" className="bi bi-x-lg"></i>
        </Link>
        <div className="postLeft">
          {
            detailPost && (
              <div className="item">
                <div className="d-flex">
                  <div className="img">
                    <img src="../../img/hoangton.jpg" alt="" />
                  </div>
                  <div className="content d-flex">
                    <a href="profilePage.html">Hoàng Tôn</a>
                    <span>6 ngày</span>
                  </div>
                </div>
                <div className="post-images">
                  <img
                    src={detailPost.post[currentImageIndex]}
                    alt={`Post Image ${currentImageIndex + 1}`}
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
                </div>

                <div className="containerIcon">
                  <i className="fa-regular fa-heart"></i>
                  <Link href={`/user/detailPost/${detailPost._id}`}><i className="fa-regular fa-comment"></i></Link>
                  <i className="fa-regular fa-paper-plane"></i>
                </div>

                <div className="contentTitle">
                  <a className="luotThich d-block text-decoration-none text-black" href="#">
                    2 lượt thích
                  </a>
                  <a className="titlePost" href="#">
                    <label>Hoàng Tôn</label> {detailPost.title}
                  </a>
                </div>

                <div className="inPutThemBL">
                  <div className="d-flex">
                    <input type="text" className="form-control" placeholder="Thêm bình luận..." />
                    <button type="submit"><a href="#">Đăng</a></button>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
  );
}
