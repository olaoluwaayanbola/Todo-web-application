import Reat from 'react'
import './Card.css'
interface Props {
    setTodos: React.Dispatch<React.SetStateAction<string>>;
 
}
export const InputList: React.FC<Props> = ({ setTodos }) => {
    return (
        <div className='InputList_Container' >

        </div>
    )
}