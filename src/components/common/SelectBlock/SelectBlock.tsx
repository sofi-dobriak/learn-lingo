import s from './SelectBlock.module.css';
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
    <div className={s.selectsContainer}>
      <label htmlFor='languages' className={s.selectLabel}>
        Languages
        <Select
          options={languages}
          id='languages'
          defaultValue={languages[0]}
          classNames={{
            container: () => s.selectWrapper,
            control: () => s.selectControl,
            dropdownIndicator: () => s.selectDropdownIndicator,
            menu: () => s.selectMenu,
            option: () => s.selectOption,
          }}
        />
      </label>

      <label htmlFor='levels' className={s.selectLabel}>
        Level of knowledge
        <Select
          options={levels}
          id='levels'
          defaultValue={levels[0]}
          classNames={{
            container: () => s.selectWrapper,
            control: () => s.selectControl,
            dropdownIndicator: () => s.selectDropdownIndicator,
            menu: () => s.selectMenu,
            option: () => s.selectOption,
          }}
        />
      </label>

      <label htmlFor='prices' className={s.selectLabel}>
        Price ($)
        <Select
          options={prices}
          id='prices'
          defaultValue={prices[0]}
          classNames={{
            container: () => s.selectWrapper,
            control: () => s.selectControl,
            dropdownIndicator: () => s.selectDropdownIndicator,
            menu: () => s.selectMenu,
            option: () => s.selectOption,
          }}
        />
      </label>
    </div>
  );
};

export default SelectBlock;
