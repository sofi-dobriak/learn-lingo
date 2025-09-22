import { useState } from 'react';
import s from './TeachersList.module.css';
import { useAppSelector } from '../../../redux/hooks';
import { selectTeachers } from '../../../redux/teachers/teachersSelectors';

const TeachersList = () => {
  const teachers = useAppSelector(selectTeachers);
  const [isReviewVisible, setIsReviewsVisible] = useState(false);
  const [isReadMoreButtonVisible, setIsReadMoreButtonVisible] = useState(true);
  const [expandedTeacherIds, setExpandedTeacherIds] = useState<Set<string>>(new Set());

  const handleToggleReviews = (teacherId: string) => {
    setIsReviewsVisible(true);
    setIsReadMoreButtonVisible(false);

    setExpandedTeacherIds(prevIds => {
      const newIds = new Set(prevIds);

      if (newIds.has(teacherId)) {
        newIds.delete(teacherId);
      } else {
        newIds.add(teacherId);
      }

      return newIds;
    });
  };

  return (
    <ul className={s.teachersList}>
      {teachers.map(teacher => {
        const isExpanded = expandedTeacherIds.has(teacher.id);

        return (
          <li key={teacher.id} className={s.teacherCard}>
            <img src={teacher.avatar_url} alt="A teacher's avatar" width={120} height={120} />

            <div className={s.teacherCardTextContainer}>
              {/* name */}
              <div className={s.languagesNameInfoFavContainer}>
                <div>
                  <p className={s.languages}>Languages</p>
                  <h3 className={s.teacherName}>
                    {teacher.name} {teacher.surname}
                  </h3>
                </div>

                {/* info & fav */}
                <div className={s.teachersInfoFavContainer}>
                  <ul className={s.teacherInfoList}>
                    <li className={s.infoItem}>
                      <svg width={16} height={16} className={s.lessonIcon}>
                        <use href='/images/icons.svg#icon-book-open'></use>
                      </svg>
                      <p>Lessons online</p>
                    </li>
                    <li className={s.infoItem}>
                      <p>Lessons done: {teacher.lessons_done}</p>
                    </li>
                    <li className={s.infoItem}>
                      <svg width={18} height={18} className={s.starIcon}>
                        <use href='/images/icons.svg#icon-star'></use>
                      </svg>
                      <p>Rating: {teacher.rating}</p>
                    </li>
                    <li className={s.infoItem}>
                      <p>
                        Price / 1 hour: <span>{teacher.price_per_hour}$</span>
                      </p>
                    </li>
                  </ul>

                  <button
                    type='button'
                    aria-label="Button for add a teacher's card to the favorites list"
                    className={s.favButton}
                  >
                    <svg width={26} height={26} className={s.favIcon}>
                      <use href='/images/icons.svg#icon-heart'></use>
                    </svg>
                  </button>
                </div>
              </div>

              {/* speaks, conditions & lesson info */}
              <ul className={s.speaksConditionsInfoList}>
                <li className={s.speaksConditionsInfoItem}>
                  <p>
                    <span>Speaks:</span>
                  </p>
                  <ul className={s.speaksList}>
                    {teacher.languages.map((language, index) => (
                      <li key={index}>
                        <p>{language}</p>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className={s.speaksConditionsInfoItem}>
                  <p>
                    <span>Lesson Info:</span> {teacher.lesson_info}.
                  </p>
                </li>
                <li className={s.speaksConditionsInfoItem}>
                  <p>
                    <span>Conditions:</span>
                  </p>
                  <ul className={s.conditionsList}>
                    {teacher.conditions.map((condition, index) => (
                      <li key={index}>
                        <p>{condition}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>

              {/* read more button */}

              <button
                onClick={() => handleToggleReviews(teacher.id)}
                type='button'
                aria-label='Button for open more information about the teachers (review and booking button)'
                className={s.readMoreButton}
              >
                {isExpanded ? 'Read less' : 'Read more'}
              </button>

              {/* reviews */}
              {isExpanded && (
                <>
                  <p className={s.aboutTeacherText}>{teacher.experience}</p>

                  <ul className={s.reviewsList}>
                    {teacher.reviews.map((review, index) => (
                      <li key={index} className={s.reviewItem}>
                        <div className={s.reviewAvatarNameRateContainer}>
                          <p className={s.reviewsAvatar}>{review.reviewer_name[0].toUpperCase()}</p>
                          <div className={s.reviewNameRateContainer}>
                            <p className={s.reviewName}>{review.reviewer_name}</p>
                            <div className={s.reviewRateIconTextContainer}>
                              <svg width={18} height={18} className={s.reviewStar}>
                                <use href='/images/icons.svg#icon-star'></use>
                              </svg>
                              <p className={s.reviewRate}>{review.reviewer_rating.toFixed(1)}</p>
                            </div>
                          </div>
                        </div>
                        <p className={s.reviewText}>{review.comment}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* labels */}
              <ul className={s.labelsList}>
                {teacher.levels.map((level, index) => (
                  <li key={index} className={s.labelsItem}>
                    <p className={s.labelsText}>{level}</p>
                  </li>
                ))}
              </ul>

              {/* booking button */}
              {isExpanded && (
                <button
                  type='button'
                  aria-label='Button for booking a trial lesson'
                  className={s.bookTrialLessonButton}
                >
                  Book trial lesson
                </button>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TeachersList;
