import { useId } from 'react';
import TextInput from '../TextInput/TextInput';
import s from './BookingForm.module.css';
import Button from '../Button/Button';
import RadioInput from '../RadioInput/RadioInput';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../redux/hooks';
import { closeModal } from '../../../redux/modals/modalSlice';

export interface BookingFormInterface {
  fullname: string;
  email: string;
  phoneNumber: string;
  reason: string;
}

const BookingForm = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormInterface>();

  const fullnameID = useId();
  const email = useId();
  const phoneNumber = useId();

  const onSubmit = (data: BookingFormInterface) => {
    if (!data) return;

    console.log(data);
    dispatch(closeModal());
    reset();
  };

  return (
    <>
      <h2 className={s.bookingFormTitle}>What is your main reason for learning English?</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.radioErrorContainer}>
          <div className={s.radioInputsContainer}>
            <RadioInput
              id='career-and-business'
              value='Career and business'
              {...register('reason', { required: true })}
            />
            <RadioInput
              id='lesson-for-kids'
              value='Lesson for kids'
              {...register('reason', { required: true })}
            />
            <RadioInput
              id='living-abroad'
              value='Living abroad'
              {...register('reason', { required: true })}
            />
            <RadioInput
              id='exams-and-coursework'
              value='Exams and coursework'
              {...register('reason', { required: true })}
            />
            <RadioInput
              id='Culture-travel-hobby'
              value='Culture, travel or hobby'
              {...register('reason', { required: true })}
            />
          </div>
          {errors.reason && (
            <p className={s.errorMessage}>Please select your main reason for learning English</p>
          )}
        </div>

        <div className={s.textInputsContainer}>
          <div className={s.textErrorContainer}>
            <TextInput
              {...register('fullname', { required: true })}
              name='fullname'
              id={fullnameID}
              placeholder='Full Name'
              autoComplete='fullname'
              hasError={!!errors.fullname}
            />
            {errors.fullname && <p className={s.errorMessage}>Please enter your full name</p>}
          </div>

          <div className={s.textErrorContainer}>
            <TextInput
              {...register('email', { required: true })}
              type='email'
              name='email'
              id={email}
              placeholder='Email'
              autoComplete='email'
              hasError={!!errors.email}
            />
            {errors.email && <p className={s.errorMessage}>Please enter your email address</p>}
          </div>

          <div className={s.textErrorContainer}>
            <TextInput
              {...register('phoneNumber', { required: true })}
              type='tel'
              name='phoneNumber'
              id={phoneNumber}
              placeholder='Phone number'
              autoComplete='phoneNumber'
              hasError={!!errors.phoneNumber}
            />
            {errors.phoneNumber && <p className={s.errorMessage}>Please enter your phone number</p>}
          </div>
        </div>

        <Button variant='primary' type='submit'>
          Book
        </Button>
      </form>
    </>
  );
};

export default BookingForm;
