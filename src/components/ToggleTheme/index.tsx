import { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { IoIosSunny, IoIosMoon } from 'react-icons/io';

import { SwitchContainer } from './styles';

interface ToogleThemeProps {
  toggleTheme(): void;
}

const ToggleTheme = ({ toggleTheme }: ToogleThemeProps) => {
  const { title } = useContext(ThemeContext);

  return (
    <SwitchContainer>
      <Switch
        onChange={() => {
          toggleTheme();
        }}
        checked={title === 'dark' ? true : false}
        checkedIcon={
          <IoIosMoon color={'#232423'} style={{ width: 30, height: 30 }} />
        }
        uncheckedIcon={
          <IoIosSunny
            color={'#fff'}
            style={{ width: 30, height: 30, marginLeft: 3 }}
          />
        }
        height={30}
        width={60}
        handleDiameter={25}
        offColor={'#232423'}
        onHandleColor={'#232423'}
        offHandleColor={'#fff'}
        onColor={'#fff'}
      />
    </SwitchContainer>
  );
};
export default ToggleTheme;
