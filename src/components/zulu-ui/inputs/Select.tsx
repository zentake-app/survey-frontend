import * as React from 'react'
import Select, {SelectProps} from '@material-ui/core/Select'
import MenuItem, {MenuItemProps} from '@material-ui/core/MenuItem'

export interface ZuluSelectProps extends SelectProps {}

const ZuluSelect = ({children, ...rest}: ZuluSelectProps) => {
  return (
    <Select {...rest}>
      {children}
    </Select>
  )
}

export interface ZuluSelectItemProps extends MenuItemProps {}

ZuluSelect.Item = ({...rest}:ZuluSelectItemProps ) => {
  return (
    <MenuItem {...rest} button={true}>
    </MenuItem>
  )
}

export {ZuluSelect}
