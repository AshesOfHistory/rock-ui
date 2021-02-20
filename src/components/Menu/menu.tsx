import React, {createContext, useState} from 'react';
import classnames from 'classnames';

type SelectCallback = (selectedIndex: number) => void

type MenuMode = 'horizontal' | 'vertical'
export interface MenuProps {
  style?: React.CSSProperties,
  mode?: MenuMode,
  className?: string,
  defaultIndex?: number,
  onSelect?: SelectCallback
}

interface IMenuContext {
  index: number,
  onSelect?: SelectCallback
}

export const MenuContext = createContext<IMenuContext>({index: 0})
const Menu: React.FC<MenuProps>= (props) => {
  const {style, mode, className, defaultIndex, children, onSelect} = props
  const [currentActive, setActive] = useState(defaultIndex)
  let classes = classnames('rock-menu', className, {
    'menu-vertical': mode === 'vertical'
  })
  const handleClick = (index: number) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
  }
  return (
    <ul style={style} className={classes} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  )
}
Menu.defaultProps = {
  mode: 'horizontal',
  defaultIndex: 0
}

export default Menu