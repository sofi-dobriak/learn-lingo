import Select from 'react-select';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  fetchAllLanguages,
  fetchAllLevels,
  fetchAllPrices,
} from '../../../redux/teachers/teachersOperations';
import { useEffect } from 'react';
import {
  selectLanguages,
  selectLevels,
  selectPrices,
} from '../../../redux/teachers/teachersSelectors';

const SelectBlock = () => {
  const dispatch = useAppDispatch();
  const languages = useAppSelector(selectLanguages);
  const levels = useAppSelector(selectLevels);
  const prices = useAppSelector(selectPrices);

  useEffect(() => {
    dispatch(fetchAllLanguages());
    dispatch(fetchAllLevels());
    dispatch(fetchAllPrices());
  }, [dispatch]);

  return (
    <div>
      <Select options={languages} />
      <Select options={levels} />
      <Select options={prices} />
    </div>
  );
};

export default SelectBlock;
