import { useState } from 'react';

export default function TextArea(Props) {
    const Handle_Change = (Event) => {
        SetText(Event.target.value);
        console.log("Value Changed");
    }

    const Handle_Change_UpperCase = () => {
        console.log("Value Changed to UpperCase");
        const New_Text = Text.toUpperCase();
        SetText(New_Text);
        Props.Set_Alert("Value is changed to upper case", "Success");
    }
    
    const Handle_Change_LowerCase = () => {
        console.log("Value Changed to LowerCase");
        const New_Text = Text.toLowerCase();
        SetText(New_Text);
        Props.Set_Alert("Value is changed to lower case", "Success");
    }
    
    const Handle_Change_Clear = () => {
        console.log("Cleared");
        const New_Text = "";
        SetText(New_Text);
        Props.Set_Alert("Text field is clear now", "Danger");
    }
    
    const Handle_Change_Capital_Case = () => {
        console.log("Value changed to Capital case");
        let Arr = Text.split(" ");
        Arr = Arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        SetText(Arr.join(" "));
        Props.Set_Alert("Value us changed to capital case", "Success");
    }
    
    const Handle_Change_Altering_Case = () => {
        let Arr = Text.split(" ");
        for (let i = 0; i < Arr.length; i++) {
            let Splited_Arr = Arr[i].split('');
            let Flag = true;
            for (let j = 0; j < Arr[i].length; j++) {
                if (Flag) {
                    Splited_Arr[j] = Splited_Arr[j].toUpperCase();
                }
                else {
                    Splited_Arr[j] = Splited_Arr[j].toLowerCase();
                }
                Flag = !Flag;
            }
            Arr[i] = Splited_Arr.join("");
        }
        
        SetText(Arr.join(" "));
        Props.Set_Alert("Value us changed to Alter case", "Success");
    }
    const [Text, SetText] = useState("");
    return (
        <div  className='relative mt-[4rem]'>

            <label for="message"  className={`block mb-2 text-sm font-medium ${Props.Mode}`}>Your message</label>
            <textarea id="message" rows="4" value={Text} onChange={Handle_Change} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
            <button className='bg-blue-800 m-2 p-3 rounded-md text-white cursor-pointer hover:underline' onClick={Handle_Change_LowerCase}>Convert to lower case</button>
            <button className='bg-blue-800 m-2 p-3 rounded-md text-white cursor-pointer hover:underline' onClick={Handle_Change_UpperCase}>Convert to upper case</button>
            <button className='bg-blue-800 m-2 p-3 rounded-md text-white cursor-pointer hover:underline' onClick={Handle_Change_Capital_Case}>Convert to capital case</button>
            <button className='bg-blue-800 m-2 p-3 rounded-md text-white cursor-pointer hover:underline' onClick={Handle_Change_Altering_Case}>Convert to altering case</button>
            <button className='bg-blue-800 m-2 p-3 rounded-md text-white cursor-pointer hover:underline' onClick={Handle_Change_Clear}>Clear</button>

        </div>
    );
}   