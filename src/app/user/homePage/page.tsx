'use client'

import { useEffect, useState } from "react";
import Nav from "../navbar/page";
import Suggestion from "../suggestion/page";
import '../homePage/home.css';
import Friend from "../friend/page";
import DetailPost from "../detailPost/[id]/page";
import Link from "next/link";
export default function HomePage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState<number[]>([]);

  // Fetch data từ API khi component mount
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('http://localhost:4000/post/allpost');
      const dataPosts = await res.json();
      setPosts(dataPosts);
      setCurrentImageIndex(new Array(dataPosts.length).fill(0)); // Khởi tạo chỉ số hình ảnh hiện tại cho từng bài viết
    };
    fetchPosts();
  }, []);

  // Xử lý sự kiện nhấn nút Next/Prev và cập nhật trạng thái
  const handleNextImage = (postIndex: number, imagesLength: number) => {
    setCurrentImageIndex(prev => {
      const updatedIndexes = [...prev];
      updatedIndexes[postIndex] = (updatedIndexes[postIndex] + 1) % imagesLength;
      return updatedIndexes;
    });
  };

  const handlePrevImage = (postIndex: number, imagesLength: number) => {
    setCurrentImageIndex(prev => {
      const updatedIndexes = [...prev];
      updatedIndexes[postIndex] = (updatedIndexes[postIndex] - 1 + imagesLength) % imagesLength;
      return updatedIndexes;
    });
  };

  return (
    <>
      <Nav />
      <div className="containerPost">
        <div className="postLeft">
          <Friend />
          {/* Bài viết */}
          <div id="Post">
            {posts.map((post: any, postIndex: number) => (
              <div className="item" key={post._id}>
                <div className="d-flex">
                  <div className="img">
                    <img src="../img/hoangton.jpg" alt="Hoàng Tôn" />
                  </div>
                  <div className="content d-flex">
                    <a href="profilePage.html">Hoàng Tôn</a>
                    <span>{post.datePost}</span>
                  </div>
                </div>

                <div className="post-images">
                  {post.post.map((img: any, imgIndex: number) => (
                    <img
                      key={imgIndex}
                      src={img}
                      alt={`Post Image ${imgIndex + 1}`}
                      className={imgIndex === currentImageIndex[postIndex] ? 'active' : ''}
                      // style={{ display: imgIndex === currentImageIndex[postIndex] ? 'block' : 'none' }}
                    />
                  ))}
                  {/* Chỉ báo hình ảnh */}
                  <div className="image-indicators">
                    {post.post.map((_: any, imgIndex: number) => (
                      <span
                        key={imgIndex}
                        className={`image-indicator ${imgIndex === currentImageIndex[postIndex] ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(prev => {
                          const updatedIndexes = [...prev];
                          updatedIndexes[postIndex] = imgIndex;
                          return updatedIndexes;
                        })}
                      ></span>
                    ))}
                  </div>

                  {/* Nút điều hướng */}
                  <div className="post-navigation">
                    <a
                      className="carousel-control-prev-icon prev-btn"
                      onClick={() => handlePrevImage(postIndex, post.post.length)}
                    ></a>
                    <a
                      className="carousel-control-next-icon next-btn"
                      onClick={() => handleNextImage(postIndex, post.post.length)}
                    ></a>
                  </div>
                </div>
                <div className="containerIcon">
                  <i className="fa-regular fa-heart"></i>
                  <Link href={`/user/detailPost/${post._id}`}><i className="fa-regular fa-comment"></i></Link>
                  <i className="fa-regular fa-paper-plane"></i>
                </div>

                <div className="contentTitle">
                  <a
                    className="luotThich d-block text-decoration-none text-black"
                    href="#"
                  >
                    2 lượt thích
                  </a>
                  <a className="titlePost" href="#">
                    <label style={{marginRight:"5px"}}>Hoàng Tôn</label>{post.title}
                  </a>
                </div>

                <div className="inPutThemBL">
                  <div className="d-flex">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Thêm bình luận..."
                    />
                    <button type="submit"><a href="#">Đăng</a></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Suggestion />
      </div>
      {/* <DetailPost /> */}
    </>
  );
}
