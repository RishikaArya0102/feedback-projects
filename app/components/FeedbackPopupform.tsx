import { MouseEvent, useState } from "react";
import axios from 'axios';

export default function FeedbackitemsPopupForm({setShowPopup}) {
    const [value, setValue] = useState('');
    const [txtValue, setTxtValue] = useState('');

    const handleSubmit = (ev: any) => {
        debugger
        ev.preventDefault();
        axios.post('/api/feedback', {value, txtValue}).then((res) => {
            console.log("res", res)
        })
    }
    return (
        <div className="fixed inset-0 flex top-[10%] w-[300px] left-[20%] h-[400px] bg-amber-400">
            <div className="items-start">
                <button onClick={() => setShowPopup(false)}>Close</button>
                <div>This is popup contain</div>
                <form>
                <input type="text" placeholder="enter input" onChange={(e) => setValue(e.target.value)}/>
                <textarea placeholder="Here is the textarea" onChange={(e) => setTxtValue(e.target.value)}/>
                <button>Attach Files</button>
                <button  onClick={(e) => handleSubmit(e)}>Create post</button>
                </form>
            </div>
        </div>
    )
}