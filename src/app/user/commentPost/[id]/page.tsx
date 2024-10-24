import { METHODS } from "http";
import React, { useEffect, useState } from "react"

export default function CommentPost({params}:{params:{id:string}}){
    const [comments,setComments] = useState<any>([])
    const [comment,setComment] = useState('');
        const fetchComment = async ()=>{
            const res = await fetch(`http://localhost:4000/comment/commentByPost/${params.id}`)
            const data = await res.json()
            setComments(data)
        }
    const addComment = async (e:React.FormEvent)=>{
      e.preventDefault();
      const newComment = {
      comment,
      idPost:params.id,
      idAccount:"667ce3c68887c8429589e93f"
    }
    const res = await fetch("http://localhost:4000/comment/addpost",{
    method:"POST",
    headers:{
    "content-Type":"application/json"
    },
    body:JSON.stringify(newComment)
    });
    if(res.ok){
      setComment('')
    }else{
      alert('Bình luận thất bại!')
    }
    fetchComment()
  }
    useEffect(()=>{
      fetchComment()
    })
    return(
        <>
        {/* Phần bình luận */}
        <div className="detailLeft">
          <div className="avatarPost">
            <img src="../../img/hoangton1.jpg" alt="" />
            <a href="#">Hoangton1210</a>
          </div>
          <div className="containerComment">
          {
            comments.map((cmt:any)=>(
              <div className="commentdetail">
                <div className="avatarUser">
                  <div className="img">
                    <img src="../../img/hoangton1.jpg" alt="" />
                  </div>
                  <div className="content">
                    <a href="#">Hoàng Tôn</a>
                    <label>{cmt.comment}</label>
                  </div>
                </div>
                <div className="repComment">
                  <span>{cmt.dateComment}</span>
                  <a href="#">Trả lời</a>
                </div>
              </div>
            ))
          }
             </div>
          <div className="containerIcon">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-regular fa-comment"></i>
            <i className="fa-regular fa-paper-plane"></i>
            <span className="d-block">1000 lượt thích </span>
          </div>
          <div className="inPutThemBL">
            <div className="d-flex">
              <input onChange={(e)=>setComment(e.target.value)}
                type="text"
                className="form-control"
                placeholder="Thêm bình luận..."

              />
              <i className="fa-solid fa-face-smile"></i>
              <button type="submit" onClick={addComment}><a href="#">Đăng</a></button>
            </div>
          </div>
        </div>
        </>
    )
}