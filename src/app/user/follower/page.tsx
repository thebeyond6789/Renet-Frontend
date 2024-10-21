import React, { useEffect, useState } from 'react';
import '../follower/flower.css';
interface Follower {
  _id: string;
  name: string;
  image: string;
}
export default function Flower() {
  const [followers, setFollowers] = useState<Follower[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(true); 
  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await fetch('http://localhost:4000/followers');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Follower[] = await response.json();
        setFollowers(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFollowers();
  }, []);

  const closeNguoiTheoDoi = (): void => {
    setIsVisible(false); 
  };
  const filteredFollowers = followers.filter(follower =>
    follower.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const followUser = async (followerId: string): Promise<void> => {
    try {
      const response = await fetch(`http://localhost:4000/followers/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: followerId }),
      });

      if (!response.ok) {
        throw new Error('Failed to follow user');
      }

      const newFollower = await response.json();
      setFollowers(prevFollowers => [...prevFollowers, newFollower]);
    } catch (error: any) {
      console.error("Error following user:", error);
      setError(error.message); 
    }
  };
  if (!isVisible) return null; 

  return (
    <div id="containernguoitheodoi">
      <div className="childnguoitheodoi">
        <div className="header_content">
          <h5>Người theo dõi</h5>
          <i className="bi bi-x-lg" onClick={closeNguoiTheoDoi}></i>
        </div>
        <hr />
        <input
          type="text"
          placeholder="Tìm kiếm"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <div className="content">
          {loading && <p>Loading...</p>}
          {error && <p>Error fetching followers: {error}</p>}
          {filteredFollowers.length === 0 && !loading && !error && (
            <p>No followers found.</p>
          )}
          {filteredFollowers.map(follower => (
            <div className="item" key={follower._id}>
              <div className="account">
                <img src={follower.image} alt={follower.name} />
                <a href="#">{follower.name}</a>
              </div>
              <div>
                <button onClick={() => followUser(follower._id)}>
                  Theo dõi
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
