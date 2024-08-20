import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import './AtlasSearchBox.css';
import styled from '@emotion/styled';
import SendIcon from '../../assets/icons/SendIcon.svg';
import CrossBtn from '../../assets/icons/CrossBtn.svg';
import ResetIcon from '../../assets/icons/ResetBtn.svg';
import QuestionMark from '../../assets/icons/QuestionMark.svg';
const TextField = React.lazy(() => import('@mui/material/TextField'));
const InputAdornment = React.lazy(() => import('@mui/material/InputAdornment'));
import { useTranslation } from 'react-i18next';

interface AtlasSearchBoxProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSearch: () => void;
  ShowResetBtn: boolean;
  handleReset: () => void;
  ShowHelpText: boolean;
}

const StyledIcons = styled.img`
  height: auto;
  width: auto;
`;

const AtlasSearchBox: React.FC<AtlasSearchBoxProps> = ({
  value,
  onChange,
  handleSearch,
  ShowResetBtn,
  handleReset,
  ShowHelpText,
}) => {
  const theme = useTheme();
  const isScreenMD = useMediaQuery(theme.breakpoints.up('md'));
  const { t } = useTranslation();

  const handleCross = () => {
    onChange({
      target: { value: '' },
    } as React.ChangeEvent<HTMLTextAreaElement>);
  };
  return (
    <div className="main_div">
      <div className="search_box_div">
        {isScreenMD && (
          <div className="reset_div">
            {ShowResetBtn && (
              <StyledIcons src={ResetIcon} onClick={handleReset} />
            )}
          </div>
        )}
        {ShowResetBtn && !isScreenMD && (
          <StyledIcons src={ResetIcon} onClick={handleReset} />
        )}
        <TextField
          variant="standard"
          value={value}
          onChange={onChange}
          fullWidth
          className="search_box"
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                {value != '' && (
                  <div className="icon_div">
                    <StyledIcons
                      src={CrossBtn}
                      className="cursor_pointer"
                      onClick={handleCross}
                    />
                    <StyledIcons
                      src={SendIcon}
                      className="cursor_pointer"
                      onClick={handleSearch}
                    />
                  </div>
                )}
              </InputAdornment>
            ),
          }}
          placeholder={
            isScreenMD
              ? t("searchPlaceholde_lg")
              : t("searchPlaceholde_md")
          }
          multiline
          maxRows={5}
        />
      </div>
      {ShowHelpText && (
        <span className="help_text_span">
          {t("searchHelperText")}
          <StyledIcons src={QuestionMark} />
        </span>
      )}
    </div>
  );
};

export default AtlasSearchBox;
