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
import { resetFilters, setFilters } from '../../../redux/filters/filterSlice';
import type { SelectOption } from '../../../redux/teachers/teachersSlice';
import type { SingleValue } from 'react-select';
import Button from '../Button/Button';

const SelectBlock = () => {
  const dispatch = useAppDispatch();

  const languages = useAppSelector(selectLanguages);
  const levels = useAppSelector(selectLevels);
  const prices = useAppSelector(selectPrices);

  const selectedLanguage = useAppSelector(state => state.filters.selectedLanguage);
  const selectedLevel = useAppSelector(state => state.filters.selectedLevel);
  const selectedPrice = useAppSelector(state => state.filters.selectedPrice);

  useEffect(() => {
    dispatch(fetchAllLanguages());
    dispatch(fetchAllLevels());
    dispatch(fetchAllPrices());
  }, [dispatch]);

  const handleLanguageChange = (selectedOption: SingleValue<SelectOption>) => {
    dispatch(
      setFilters({ filterType: 'language', value: selectedOption ? selectedOption.value : null })
    );
  };

  const handleLevelChange = (selectedOption: SingleValue<SelectOption>) => {
    dispatch(
      setFilters({ filterType: 'level', value: selectedOption ? selectedOption.value : null })
    );
  };

  const handlePriceChange = (selectedOption: SingleValue<SelectOption>) => {
    dispatch(
      setFilters({ filterType: 'price', value: selectedOption ? selectedOption.value : null })
    );
  };

  return (
    <div className={s.selectsContainer}>
      <label htmlFor='languages' className={s.selectLabel}>
        Languages
        <Select
          options={languages}
          id='languages'
          defaultValue={languages[0]}
          value={languages.find(opt => opt.value === selectedLanguage) || null}
          onChange={handleLanguageChange}
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
          value={levels.find(opt => opt.value === selectedLevel) || null}
          onChange={handleLevelChange}
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
          value={prices.find(opt => opt.value === selectedPrice) || null}
          onChange={handlePriceChange}
          classNames={{
            container: () => s.selectWrapper,
            control: () => s.selectControl,
            dropdownIndicator: () => s.selectDropdownIndicator,
            menu: () => s.selectMenu,
            option: () => s.selectOption,
          }}
        />
      </label>

      <Button onClick={() => dispatch(resetFilters())}>Reset</Button>
    </div>
  );
};

export default SelectBlock;
