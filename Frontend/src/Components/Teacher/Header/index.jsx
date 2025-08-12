import { useHeading } from "../../../Hooks"
import '../../../App.css'

function Header() {
    const { heading, subHeading } = useHeading();

    return (
        <nav className='custom-header border-b top-0 sticky p-2 flex flex-col justify-center bg-white z-100'>
            <div className="text-2xl font-bold">{heading}</div>
            {subHeading && <div className="text-sm text-gray-500">{subHeading}</div>}
        </nav>
    )
}

export default Header
