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
import type { GroupBase, SingleValue } from 'react-select';
import Button from '../Button/Button';
import type { StylesConfig } from 'react-select';
import { closeModal } from '../../../redux/modals/modalSlice';
import { useMediaQueryView } from '../../../hooks/useMediaQueryView';

const getCustomStyles = (): StylesConfig<SelectOption, false, GroupBase<SelectOption>> => ({
  control: provided => ({
    ...provided,
    borderRadius: '14px',
    border: '1px solid transparent',
    boxShadow: '0 20px 69px 0 rgba(0, 0, 0, 0.07)',
    padding: '14px',
    width: '100%',
    minWidth: '220px',
    minHeight: '48px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    '&:hover': {
      borderColor: '#f4c550',
      color: '#121417',
    },
  }),

  valueContainer: provided => ({
    ...provided,
    padding: '0',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  dropdownIndicator: provided => ({
    ...provided,
    color: '#121417',
    padding: '0',
  }),

  menu: provided => ({
    ...provided,
    borderRadius: '14px',
    overflow: 'hidden',
    boxShadow: '0 20px 69px 0 rgba(0, 0, 0, 0.07)',
    border: 'none',
    zIndex: 2000,
  }),

  menuList: provided => ({
    ...provided,
    padding: '0',
  }),

  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#121417' : state.isFocused ? '#121417' : '#8a8a89',
    padding: '10px 12px',
    backgroundColor: state.isSelected ? '#ddd' : 'transparent',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'transparent',
      color: '#121417',
    },
  }),

  singleValue: provided => ({
    ...provided,
    color: '#121417',
    fontWeight: '500',
    margin: '0',
  }),

  placeholder: provided => ({
    ...provided,
    color: '#8a8a89',
    margin: '0',
  }),
});

const SelectBlock = () => {
  const { isDesktop } = useMediaQueryView();

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

  const handleResetFilters = () => {
    dispatch(resetFilters());
    dispatch(closeModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
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
            styles={getCustomStyles()}
            className={s.selectWrapper}
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
            styles={getCustomStyles()}
            className={s.selectWrapper}
          />
        </label>

        <label htmlFor={priceID} className={s.selectLabel}>
          Price ($)
          <Select
            placeholder='30$'
            options={prices}
            id={priceID}
            styles={getCustomStyles()}
            value={prices.find(opt => opt.value === selectedPrice) || null}
            onChange={handlePriceChange}
            className={s.selectWrapper}
          />
        </label>
      </div>

      <Button
        onClick={isDesktop ? handleResetFilters : handleCloseModal}
        variant='secondary'
        className={s.resetButton}
      >
        {isDesktop ? 'Reset' : 'Apply'}
      </Button>
    </div>
  );
};

export default SelectBlock;
