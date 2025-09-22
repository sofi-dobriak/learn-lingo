import s from './ExpandButton.module.css';

interface ExpandButtonProps {
  id: string;
  isExpanded: boolean;
  handleToggleReviews: (id: string) => void;
}

const ExpandButton = ({ id, isExpanded, handleToggleReviews }: ExpandButtonProps) => {
  return (
    <button
      onClick={() => handleToggleReviews(id)}
      type='button'
      aria-label='Button for open more information about the teachers (review and booking button)'
      className={s.readMoreButton}
    >
      {isExpanded ? 'Read less' : 'Read more'}
    </button>
  );
};

export default ExpandButton;
