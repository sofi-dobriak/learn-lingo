import Button from '../../../common/Button/Button';
import s from './ExpandButton.module.css';

interface ExpandButtonProps {
  id: string;
  isExpanded: boolean;
  handleToggleReviews: (id: string) => void;
}

const ExpandButton = ({ id, isExpanded, handleToggleReviews }: ExpandButtonProps) => {
  return (
    <Button
      className={s.readMoreButton}
      variant='secondary'
      onClick={() => handleToggleReviews(id)}
      type='button'
      aria-label='Button for open more information about the teachers (review and booking button)'
    >
      {isExpanded ? 'Read less' : 'Read more'}
    </Button>
  );
};

export default ExpandButton;
