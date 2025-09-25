import { useId } from 'react';
import TextInput from '../TextInput/TextInput';
import s from './BookingForm.module.css';
import Button from '../Button/Button';
import RadioInput from '../RadioInput/RadioInput';
import { useForm } from 'react-hook-form';

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fullnameID = useId();
  const email = useId();
  const phoneNumber = useId();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <h2 className={s.bookingFormTitle}>What is your main reason for learning English?</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.radioInputsContainer}>
          <RadioInput id='career-and-business' value='Career and business' />
          <RadioInput id='lesson-for-kids' value='Lesson for kids' />
          <RadioInput id='living-abroad' value='Living abroad' />
          <RadioInput id='exams-and-coursework' value='Exams and coursework' />
          <RadioInput id='Culture-travel-hobby' value='Culture, travel or hobby' />
        </div>

        <div className={s.textInputsContainer}>
          <TextInput
            name='fullname'
            id={fullnameID}
            placeholder='Full Name'
            autoComplete='fullname'
          />

          <TextInput
            type='email'
            name='email'
            id={email}
            placeholder='Email'
            autoComplete='email'
          />

          <TextInput
            type='tel'
            name='phoneNumber'
            id={phoneNumber}
            placeholder='Phone number'
            autoComplete='phoneNumber'
          />
        </div>

        <Button variant='primary'>Book</Button>
      </form>
    </>
  );
};

export default BookingForm;
