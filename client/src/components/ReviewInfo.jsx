import { useNavigate } from 'react-router-dom';

export default function ReviewInfo({ _id, title, message, rating, author }) {
  const nav = useNavigate();
  return (
    <div key={_id} className="review-container">
      <div className="review-header">
        <h2 className="author">
          <img src={author.profilePicture} alt="Profile Picture" />
          {author.username}
        </h2>
        <h3 className="review-title">{title}</h3>
        <h3 className='review-rating'>Rating: {rating} / 10</h3>
      </div>
      <div className="review-message">
        <p>{message}</p>
      </div>

      <button onClick={() => nav(`/reviews/${_id}`)} className="details-button">
        See Details
      </button>
    </div>
  );
}
