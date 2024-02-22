import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu';
import s from './header.module.scss'


export const Header = () => {
    return (
        <div>
            <DropdownMenuRadix.Root>
                <DropdownMenuRadix.Trigger>
                    <button className={s.buttonWon}>Won</button>
                </DropdownMenuRadix.Trigger>
            </DropdownMenuRadix.Root>
            <button className={s.buttonLose}>Lose</button>
        </div>
    )
}