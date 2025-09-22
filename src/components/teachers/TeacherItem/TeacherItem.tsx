import type { Teacher } from '../../../types/teachers';
import Button from '../../common/Button/Button';
import Conditions from '../teacher/Conditions/Conditions';
import ExpandButton from '../teacher/ExpandButton/ExpandButton';
import FavoriteButton from '../teacher/FavoriteButton/FavoriteButton';
import InfoList from '../teacher/InfoList/InfoList';
import Levels from '../teacher/Levels/Levels';
import Reviews from '../teacher/Reviews/Reviews';
import TeacherName from '../teacher/TeacherName/TeacherName';
import s from './TeacherItem.module.css';

interface TeacherItemProps {
  teacher: Teacher;
  isExpanded: boolean;
  handleToggleReviews: (id: string) => void;
}

const TeacherItem = ({ teacher, isExpanded, handleToggleReviews }: TeacherItemProps) => {
  return (
    <>
      <div className={s.teacherAvatarContainer}>
        <img src={teacher.avatar_url} alt="A teacher's avatar" width={120} height={120} />
      </div>

      <div className={s.teacherCardTextContainer}>
        <div className={s.languagesNameInfoFavContainer}>
          <TeacherName name={teacher.name} surname={teacher.surname} />

          <div className={s.teachersInfoFavContainer}>
            <InfoList
              lessons_done={teacher.lessons_done}
              rating={teacher.rating}
              price_per_hour={teacher.price_per_hour}
            />

            <FavoriteButton />
          </div>
        </div>

        <Conditions
          languages={teacher.languages}
          lesson_info={teacher.lesson_info}
          conditions={teacher.conditions}
        />

        <ExpandButton
          id={teacher.id}
          isExpanded={isExpanded}
          handleToggleReviews={handleToggleReviews}
        />

        {isExpanded && (
          <>
            <p className={s.aboutTeacherText}>{teacher.experience}</p>
            <Reviews reviews={teacher.reviews} />
          </>
        )}

        <Levels levels={teacher.levels} />

        {isExpanded && (
          <Button
            aria-label='Button for booking a trial lesson'
            className={s.bookTrialLessonButton}
          >
            Book trial lesson
          </Button>
        )}
      </div>
    </>
  );
};

export default TeacherItem;
