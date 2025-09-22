import s from './TeacherName.module.css';

interface TeacherNameProps {
  name: string;
  surname: string;
}

const TeacherName = ({ name, surname }: TeacherNameProps) => {
  return (
    <div>
      <p className={s.languages}>Languages</p>
      <h3 className={s.teacherName}>
        {name} {surname}
      </h3>
    </div>
  );
};

export default TeacherName;
