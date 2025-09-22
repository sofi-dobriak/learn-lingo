import { useState } from 'react';
import s from './TeachersList.module.css';
import { useAppSelector } from '../../../redux/hooks';
import { selectTeachers } from '../../../redux/teachers/teachersSelectors';
import TeacherItem from '../TeacherItem/TeacherItem';

const TeachersList = () => {
  const teachers = useAppSelector(selectTeachers);
  const [expandedTeacherIds, setExpandedTeacherIds] = useState<Set<string>>(new Set());

  const handleToggleReviews = (teacherId: string) => {
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
            <TeacherItem
              teacher={teacher}
              isExpanded={isExpanded}
              handleToggleReviews={handleToggleReviews}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TeachersList;
