import s from './InfoSuccessBooking.module.css';

const InfoSuccessBooking = () => {
  return (
    <>
      <h2 className={s.successInfoTitle}>Form successfully submitted</h2>
      <p className={s.successInfoText}>Thank you for filling out the form!</p>
      <p className={s.successInfoText}> We will contact you within a day!</p>
    </>
  );
};

export default InfoSuccessBooking;
