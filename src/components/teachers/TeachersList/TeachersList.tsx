import { useState } from 'react';
import s from './TeachersList.module.css';
import TeacherItem from '../TeacherItem/TeacherItem';
import type { Teacher } from '../../../types/teachers';

interface TeachersListProps {
  teachers: Teacher[];
}

const TeachersList = ({ teachers }: TeachersListProps) => {
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
