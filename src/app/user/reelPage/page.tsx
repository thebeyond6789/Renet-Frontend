'use client'
import '../reelPage/reel.css'
import Nav from '../navbar/page'
export default function Reel(){
    function showComment(){
        let comment = (document.getElementById('comment')as HTMLElement)
        comment.style.display = 'block'
    }
    function closeComment(){
        let comment = (document.getElementById('comment')as HTMLElement)
        comment.style.display = 'none'
    }
    return(
        <>
        <Nav/>
        <div className="containerReels">
      <div className="main-content">
        <div className="video-container">
          <div className="video-item">
            <div className="video-content">
              <div className="video-wrapper">
                <video src="../img/video1.mp4" controls loop autoPlay muted></video>
                <div className="video-info">
                  <div className="user-info">
                    <div className="avatar">

                    </div>
                    <div className="username">Hoàng Tôn</div>
                    <button className="follow-button">Theo dõi</button>
                  </div>
                  <div className="caption">Caption dài</div>
                </div>
              </div>
              <div className="action-buttons">
               
                <button className="action-button">
                  <i className="fa-regular fa-heart"></i>
                </button>
                <button onClick={showComment} className="action-button comment-btn">
                  <i className="fa-regular fa-comment"></i>
                </button>
                <button className="action-button">
                  <i className="fa-regular fa-paper-plane"></i>
                </button>
              </div>
            </div>
            <div className="comment-section" id='comment'>
              <div className="title">
                <h5>Bình luận</h5>
                <i className="close-btn" onClick={closeComment}>&times;</i>
              </div>
              <div className="commentChild">
                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <span className="comment-username">user123</span>
                    <p className="comment-text">Great video! Love the content.</p>
                    <div className="comment-info">
                      <span className="likes">24 likes</span>
                      <span className="replies">Reply</span>
                      <button className="like-btn">❤️</button>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <span className="comment-username">viewer456</span>
                    <p className="comment-text">Can't wait for the next one!</p>
                    <div className="comment-info">
                      <span className="likes">12 likes</span>
                      <span className="replies">Reply</span>
                      <button className="like-btn">❤️</button>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <span className="comment-username">viewer456</span>
                    <p className="comment-text">Can't wait for the next one!</p>
                    <div className="comment-info">
                      <span className="likes">12 likes</span>
                      <span className="replies">Reply</span>
                      <button className="like-btn">❤️</button>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <span className="comment-username">viewer456</span>
                    <p className="comment-text">Can't wait for the next one!</p>
                    <div className="comment-info">
                      <span className="likes">12 likes</span>
                      <span className="replies">Reply</span>
                      <button className="like-btn">❤️</button>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <span className="comment-username">viewer456</span>
                    <p className="comment-text">Can't wait for the next one!</p>
                    <div className="comment-info">
                      <span className="likes">12 likes</span>
                      <span className="replies">Reply</span>
                      <button className="like-btn">❤️</button>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <span className="comment-username">viewer456</span>
                    <p className="comment-text">Can't wait for the next one!</p>
                    <div className="comment-info">
                      <span className="likes">12 likes</span>
                      <span className="replies">Reply</span>
                      <button className="like-btn">❤️</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-comment">
                <input type="text" placeholder="Add a comment..." />
                <button>Post</button>
              </div>
            </div>
          </div>
          <div className="video-item">
            <div className="video-content">
              <div className="video-wrapper">
                <video src="../img/video1.mp4" controls loop autoPlay muted></video>
                <div className="video-info">
                  <div className="user-info">
                    <div className="avatar">

                    </div>
                    <div className="username">Hoàng Tôn</div>
                    <button className="follow-button">Theo dõi</button>
                  </div>
                  <div className="caption">Caption dài</div>
                </div>
              </div>
              <div className="action-buttons">
               
                <button className="action-button">
                  <i className="fa-regular fa-heart"></i>
                </button>
                <button onClick={showComment} className="action-button comment-btn">
                  <i className="fa-regular fa-comment"></i>
                </button>
                <button className="action-button">
                  <i className="fa-regular fa-paper-plane"></i>
                </button>
              </div>
            </div>
            <div className="comment-section" id='comment'>
              <div className="title">
                <h5>Bình luận</h5>
                <i className="close-btn" onClick={closeComment}>&times;</i>
              </div>
              <div className="commentChild">
                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <span className="comment-username">user123</span>
                    <p className="comment-text">Great video! Love the content.</p>
                    <div className="comment-info">
                      <span className="likes">24 likes</span>
                      <span className="replies">Reply</span>
                      <button className="like-btn">❤️</button>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <span className="comment-username">viewer456</span>
                    <p className="comment-text">Can't wait for the next one!</p>
                    <div className="comment-info">
                      <span className="likes">12 likes</span>
                      <span className="replies">Reply</span>
                      <button className="like-btn">❤️</button>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <span className="comment-username">viewer456</span>
                    <p className="comment-text">Can't wait for the next one!</p>
                    <div className="comment-info">
                      <span className="likes">12 likes</span>
                      <span className="replies">Reply</span>
                      <button className="like-btn">❤️</button>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <span className="comment-username">viewer456</span>
                    <p className="comment-text">Can't wait for the next one!</p>
                    <div className="comment-info">
                      <span className="likes">12 likes</span>
                      <span className="replies">Reply</span>
                      <button className="like-btn">❤️</button>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <span className="comment-username">viewer456</span>
                    <p className="comment-text">Can't wait for the next one!</p>
                    <div className="comment-info">
                      <span className="likes">12 likes</span>
                      <span className="replies">Reply</span>
                      <button className="like-btn">❤️</button>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <span className="comment-username">viewer456</span>
                    <p className="comment-text">Can't wait for the next one!</p>
                    <div className="comment-info">
                      <span className="likes">12 likes</span>
                      <span className="replies">Reply</span>
                      <button className="like-btn">❤️</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-comment">
                <input type="text" placeholder="Add a comment..." />
                <button>Post</button>
              </div>
            </div>
          </div>
          <div className="video-item">
            <div className="video-content">
              <div className="video-wrapper">
                <video src="../img/video1.mp4" controls loop autoPlay muted></video>
                <div className="video-info">
                  <div className="user-info">
                    <div className="avatar">

                    </div>
                    <div className="username">Hoàng Tôn</div>
                    <button className="follow-button">Theo dõi</button>
                  </div>
                  <div className="caption">Caption dài</div>
                </div>
              </div>
              <div className="action-buttons">
               
                <button className="action-button">
                  <i className="fa-regular fa-heart"></i>
                </button>
                <button onClick={showComment} className="action-button comment-btn">
                  <i className="fa-regular fa-comment"></i>
                </button>
                <button className="action-button">
                  <i className="fa-regular fa-paper-plane"></i>
                </button>
              </div>
            </div>
            <div className="comment-section" id='comment'>
              <div className="title">
                <h5>Bình luận</h5>
                <i className="close-btn" onClick={closeComment}>&times;</i>
              </div>
              <div className="commentChild">
                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <span className="comment-username">user123</span>
                    <p className="comment-text">Great video! Love the content.</p>
                    <div className="comment-info">
                      <span className="likes">24 likes</span>
                      <span className="replies">Reply</span>
                      <button className="like-btn">❤️</button>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <span className="comment-username">viewer456</span>
                    <p className="comment-text">Can't wait for the next one!</p>
                    <div className="comment-info">
                      <span className="likes">12 likes</span>
                      <span className="replies">Reply</span>
                      <button className="like-btn">❤️</button>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <span className="comment-username">viewer456</span>
                    <p className="comment-text">Can't wait for the next one!</p>
                    <div className="comment-info">
                      <span className="likes">12 likes</span>
                      <span className="replies">Reply</span>
                      <button className="like-btn">❤️</button>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <span className="comment-username">viewer456</span>
                    <p className="comment-text">Can't wait for the next one!</p>
                    <div className="comment-info">
                      <span className="likes">12 likes</span>
                      <span className="replies">Reply</span>
                      <button className="like-btn">❤️</button>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <span className="comment-username">viewer456</span>
                    <p className="comment-text">Can't wait for the next one!</p>
                    <div className="comment-info">
                      <span className="likes">12 likes</span>
                      <span className="replies">Reply</span>
                      <button className="like-btn">❤️</button>
                    </div>
                  </div>
                </div>
                <div className="comment">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <span className="comment-username">viewer456</span>
                    <p className="comment-text">Can't wait for the next one!</p>
                    <div className="comment-info">
                      <span className="likes">12 likes</span>
                      <span className="replies">Reply</span>
                      <button className="like-btn">❤️</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-comment">
                <input type="text" placeholder="Add a comment..." />
                <button>Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="comment-modal">
        <div className="modal-content">
          <button className="close-modal">&times;</button>
          <div className="comment-section">
            <button className="close-btn">&times;</button>
            <div className="comment">
              <div className="comment-avatar"></div>
              <div className="comment-content">
                <span className="comment-username">user123</span>
                <p className="comment-text">Great video! Love the content.</p>
                <div className="comment-info">
                  <span className="likes">24 likes</span>
                  <span className="replies">Reply</span>
                  <button className="like-btn">❤️</button>
                </div>
              </div>
            </div>
            <div className="comment">
              <div className="comment-avatar"></div>
              <div className="comment-content">
                <span className="comment-username">viewer456</span>
                <p className="comment-text">Can't wait for the next one!</p>
                <div className="comment-info">
                  <span className="likes">12 likes</span>
                  <span className="replies">Reply</span>
                  <button className="like-btn">❤️</button>
                </div>
              </div>
            </div>
            <div className="add-comment">
              <input type="text" placeholder="Add a comment..." />
              <button>Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}