import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import './SearchBox.css';
import { ReactComponent as SendIcon } from '../../assets/icons/SendIcon.svg';
import { ReactComponent as CrossBtn } from '../../assets/icons/CrossBtn.svg';
import { ReactComponent as ResetIcon } from '../../assets/icons/ResetBtn.svg';
import { ReactComponent as QuestionMark } from '../../assets/icons/QuestionMark.svg';
const TextField = React.lazy(() => import('@mui/material/TextField'));
const InputAdornment = React.lazy(() => import('@mui/material/InputAdornment'));

interface SearchBoxProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSearch: () => void;
  ShowResetBtn: boolean;
  handleReset: () => void;
  ShowHelpText: boolean;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  value,
  onChange,
  handleSearch,
  ShowResetBtn,
  handleReset,
  ShowHelpText,
}) => {
  const theme = useTheme();
  const isScreenMD = useMediaQuery(theme.breakpoints.up('md'));

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
            {ShowResetBtn && <ResetIcon onClick={handleReset} />}
          </div>
        )}
        {ShowResetBtn && !isScreenMD && <ResetIcon onClick={handleReset} />}
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
                    <CrossBtn
                      className="cursor_pointer"
                      onClick={handleCross}
                    />
                    <SendIcon
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
              ? 'Ask your sustainability or business problem question'
              : 'Ask your sustainability question'
          }
          multiline
          maxRows={5}
        />
      </div>
      {ShowHelpText && (
        <span className="help_text_span">
          Data caveat here to remind users this is an AI, not advice lorem ipsum
          dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna <QuestionMark />
        </span>
      )}
    </div>
  );
};

export default SearchBox;
