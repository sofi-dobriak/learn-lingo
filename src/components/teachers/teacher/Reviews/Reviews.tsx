import type { Review } from '../../../../types/teachers';
import s from './Reviews.module.css';

interface ReviewsProps {
  reviews: Review[];
}

const Reviews = ({ reviews }: ReviewsProps) => {
  return (
    <ul className={s.reviewsList}>
      {reviews &&
        reviews.map((review, index) => {
          const avatarFirstLetter = review.reviewer_name[0].toUpperCase();
          const rating = review.reviewer_rating.toFixed(1);

          return (
            <li key={index} className={s.reviewItem}>
              <div className={s.reviewAvatarNameRateContainer}>
                <p className={s.reviewsAvatar}>{avatarFirstLetter}</p>

                <div className={s.reviewNameRateContainer}>
                  <p className={s.reviewName}>{review.reviewer_name}</p>

                  <div className={s.reviewRateIconTextContainer}>
                    <svg width={18} height={18} className={s.reviewStar}>
                      <use href='/images/icons.svg#icon-star'></use>
                    </svg>

                    <p className={s.reviewRate}>{rating}</p>
                  </div>
                </div>
              </div>

              <p className={s.reviewText}>{review.comment}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Reviews;
