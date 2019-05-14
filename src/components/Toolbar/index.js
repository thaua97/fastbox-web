import React from 'react'

import { Bar, ToolbarList, ToolbarItem } from './styles'
import { MdMenu, MdNotifications } from 'react-icons/md'

const Toolbar = () => (
    <Bar>
        <ToolbarList>
            <ToolbarItem><MdNotifications size="25"/></ToolbarItem>
            <ToolbarItem><MdMenu size="25"/></ToolbarItem>
        </ToolbarList>
    </Bar>
)

export default Toolbar
