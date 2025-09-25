import s from './Booking.module.css';

import { useAppSelector } from '../../redux/hooks';
import { selectTeacherId } from '../../redux/modals/modalSelectors';
import { selectTeachers } from '../../redux/teachers/teachersSelectors';
import BookingForm from '../common/BookingForm/BookingForm';

const Booking = () => {
  const teachers = useAppSelector(selectTeachers);
  const teacherId = useAppSelector(selectTeacherId);

  const teacher = teachers.find(t => t.id === teacherId);

  return (
    <>
      <h2 className={s.bookingTitle}>Book trial lesson</h2>
      <p className={s.bookingDescription}>
        Our experienced tutor will assess your current language level, discuss your learning goals,
        and tailor the lesson to your specific needs.
      </p>

      <div className={s.bookingTeacherContainer}>
        <img
          src={teacher?.avatar_url}
          alt={`${teacher?.name}'s avatar`}
          width={44}
          height={44}
          className={s.bookingTeacherImage}
        />
        <div className={s.bookingTeacherTextContainer}>
          <p className={s.bookingTeacherLabel}>Your teacher</p>
          <h3 className={s.bookingTeacherName}>
            {teacher?.name} {teacher?.surname}
          </h3>
        </div>
      </div>

      <BookingForm />
    </>
  );
};

export default Booking;
