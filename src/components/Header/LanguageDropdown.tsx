import React, { forwardRef } from 'react';
import i18n, { LANGUAGE_CODES, LanguageCode } from '../../language/i18n';
import * as S from './LanguageDropdown.styles';

interface LanguageOption {
  code: LanguageCode;
  label: string;
}

const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: LANGUAGE_CODES.KOREAN, label: '한국어' },
  { code: LANGUAGE_CODES.ENGLISH, label: 'English' },
  { code: LANGUAGE_CODES.CHINESE, label: '中文' },
];

const LanguageDropdown = forwardRef<HTMLDivElement>((props, ref) => {
  const changeLanguage = (lang: LanguageCode) => {
    i18n.changeLanguage(lang);
  };

  return (
    <S.Dropdown ref={ref}>
      {LANGUAGE_OPTIONS.map(({ code, label }) => (
        <S.DropdownItem key={code} onClick={() => changeLanguage(code)}>
          {label}
        </S.DropdownItem>
      ))}
    </S.Dropdown>
  );
});

export default LanguageDropdown;
