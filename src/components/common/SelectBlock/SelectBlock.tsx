import s from './SelectBlock.module.css';
import Select from 'react-select';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  fetchAllLanguages,
  fetchAllLevels,
  fetchAllPrices,
} from '../../../redux/teachers/teachersOperations';
import { useEffect, useId } from 'react';
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
  const languageID = useId();
  const levelID = useId();
  const priceID = useId();

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
    <div className={s.selectInputsButtonContainer}>
      <div className={s.selectsContainer}>
        <label htmlFor={languageID} className={s.selectLabel}>
          Languages
          <Select
            placeholder='French'
            options={languages}
            id={languageID}
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

        <label htmlFor={levelID} className={s.selectLabel}>
          Level of knowledge
          <Select
            placeholder='A1 Beginner'
            options={levels}
            id={levelID}
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

        <label htmlFor={priceID} className={s.selectLabel}>
          Price ($)
          <Select
            placeholder='30$'
            options={prices}
            id={priceID}
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
      </div>

      <Button
        onClick={() => dispatch(resetFilters())}
        variant='secondary'
        className={s.resetButton}
      >
        Reset
      </Button>
    </div>
  );
};

export default SelectBlock;
