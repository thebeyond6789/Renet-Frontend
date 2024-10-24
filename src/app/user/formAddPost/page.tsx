'use client'
import { useState } from 'react';

const UploadPost = () => {
    const [title, setTitle] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        if (file) {
            formData.append('avatar', file);
        }

        try {
            const response = await fetch('http://localhost:3000/api/add', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || 'Đã xảy ra lỗi');
            }

            alert(data.message);
            setTitle('');
            setFile(null);
        } catch (error) {
            console.error('Error uploading post:', error);
            alert('Đã xảy ra lỗi khi upload bài viết');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Tiêu đề:</label>
                <input 
                    type="text" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Chọn ảnh:</label>
                <input 
                    type="file" 
                    onChange={handleFileChange} 
                    required 
                />
            </div>
            <button type="submit">Tải lên bài viết</button>
        </form>
    );
};

export default UploadPost;
