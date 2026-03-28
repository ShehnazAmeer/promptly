import { HiOutlineMenu } from 'react-icons/hi';
import Menus from './Menus';
import NavLinkBtn from './NavLinkBtn';

export default function Menubar() {
    return (
        <Menus>
            <Menus.Menu>
                <Menus.ToggleButton id='header-menu'>
                    <HiOutlineMenu className='w-5 h-5 '/>
                </Menus.ToggleButton >
                <Menus.List id={'header-menu'} >
                    <Menus.ListButton>
                        <NavLinkBtn to='/login'>Login</NavLinkBtn>
                    </Menus.ListButton>
                    <Menus.ListButton>
                        <NavLinkBtn to='/signup'>Signup</NavLinkBtn>
                    </Menus.ListButton>
                    <Menus.ListButton>
                        <NavLinkBtn to='/settings'>Settings</NavLinkBtn>
                    </Menus.ListButton>
                    <Menus.ListButton>
                        <NavLinkBtn to='/notes'>Notes</NavLinkBtn>
                        
                    </Menus.ListButton>
                    <Menus.ListButton>
                        <NavLinkBtn to='/home'>Home</NavLinkBtn>
                        
                    </Menus.ListButton>
                </Menus.List>
            </Menus.Menu>
        </Menus>
    )
}