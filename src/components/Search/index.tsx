import React, { useState } from 'react';
import styles from './Search.module.scss';
import clearSvg from './svg_icons/clear_icon.svg';
import debounce from 'lodash.debounce';
import { setSearchValue } from '../../Redux/slices/filter/filterSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Redux/store';

const Search:React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  const { searchValue } = useSelector((state:RootState) => state.filter);

  const clearInput = () => {
    dispatch(setSearchValue(''));
    setValue('');
    if(inputRef.current){
      inputRef.current.focus();
    }
  };


  const debounceSearch = React.useCallback(
    debounce((str:string) => {
      dispatch(setSearchValue(str));
    }, 1000),
    [],
  );

  const onChangeValue = (event:React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    debounceSearch(event.target.value);
  };

  return (
    <div className={styles.items}>
      <svg
        className={styles.icon_search}
        height="32px"
        version="1.1"
        viewBox="0 0 32 32"
        width="32px"
        xmlns="http://www.w3.org/2000/svg">
        <title />
        <desc />
        <defs />
        <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
          <g fill="#929292" id="icon-111-search">
            <path
              d="M19.4271164,21.4271164 C18.0372495,22.4174803 16.3366522,23 14.5,23 C9.80557939,23 6,19.1944206 6,14.5 C6,9.80557939 9.80557939,6 14.5,6 C19.1944206,6 23,9.80557939 23,14.5 C23,16.3366522 22.4174803,18.0372495 21.4271164,19.4271164 L27.0119176,25.0119176 C27.5621186,25.5621186 27.5575313,26.4424687 27.0117185,26.9882815 L26.9882815,27.0117185 C26.4438648,27.5561352 25.5576204,27.5576204 25.0119176,27.0119176 L19.4271164,21.4271164 L19.4271164,21.4271164 Z M14.5,21 C18.0898511,21 21,18.0898511 21,14.5 C21,10.9101489 18.0898511,8 14.5,8 C10.9101489,8 8,10.9101489 8,14.5 C8,18.0898511 10.9101489,21 14.5,21 L14.5,21 Z"
              id="search"
            />
          </g>
        </g>
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeValue}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <img
          className={styles.icon_clear}
          src={clearSvg}
          onClick={
            clearInput}
          alt=""
        />
      )}
    </div>
  );
};

export default Search;
