import React, {useState} from 'react'

// use state is a hook that we use from the react library.
// component 2
// used JSX fragment to return only one element.

export default function TextBar(props) {

    function handleCopy() {

        const textSelect = document.querySelector('#btn-text');
        textSelect.select();
        navigator.clipboard.writeText(textSelect.value);
        props.alert('Successfully copied to clipboard', 'success');
          
    }

    
    function onclickfunc() {
        const uppercase = text.toUpperCase();
        setText(uppercase);
        props.alert('Text capitalised successfully', 'success');
    }

    function onchangestate(e) {

        const newText = e.target.value;
        const check =  newText.split(/[ ]+/gm);
        const value =  check.join(" ");
        setText(value);
    }
 

    function onclicklo() {
        const lower = text.toLowerCase();
        setText(lower);   
        props.alert('Text lowercased successfully', 'success');
    }


    function handleClear() {
       setText('');
       props.alert('Text cleared successfully', 'success');
    }


    
    function onclickCap() {

        const arr = [];

        let str = '';

        text.trim().split(/[(^\n)' ']/gm).forEach(word => {    

            const slicedLeft =  word.slice(1).toLowerCase();

            const caps  = word.slice(0, 1).toUpperCase() + slicedLeft;

            arr.push(caps);

        });

        arr.forEach(word => {
            str += `${' ' + word}`;
        })

        setText(str.trim());
        props.alert('Text capitalised successfully', 'success');
    }

    const [text, setText] = useState('Enter some text here'); // here we use destucturing.


    // JSX starts from here.

    return (

        <>

            {/*This is JSX fragment*/}


            <div className="container mt-5">

                <div>
                    
                    <div>
                        <textarea style={{backgroundColor:props.mode === 'light'? '#fff':'#212529', color:props.mode === 'light'? '#212529': '#fff'}} value={text} onChange={onchangestate} id='btn-text' className='form-control' rows={8}></textarea>
                    </div>

                    <button className="btn btn-primary mt-3" onClick={onclickfunc}>Convert to Uppercase</button>

                    <button className="btn btn-primary mt-3 mx-3" onClick={onclicklo}>Convert to Lowercase</button>

                    <button className="btn btn-primary mt-3 mx-3" onClick={onclickCap}>Capitalize</button>

                    <button className="btn btn-primary mt-3 mx-3" onClick={handleClear}>Clear Text</button>

                    <button className="btn btn-primary mt-3 mx-3" onClick={handleCopy}>Copy Text</button>

                </div>


                <div className='mt-4' style={{color:props.mode === 'light'? '#212529': '#fff'}}>

                    <p>{text.trim().length > 0 ? text.trim().split(/[(^\n)' ']/gm).length: 0} words and {text.trim().length} characters</p>
                    <p>{text.trim().length > 0 ? text.trim().split(/[(^\n)' ']/gm).length * 0.008: 0} minutes read</p>

                </div>


                <div style={{color:props.mode === 'light'? '#212529': '#fff'}}>

                    <h2>Preview</h2>

                    <p>
                        {text.length >0 ?text.substring(0,302): 'Enter something to preview here..'}
                    </p>
                
                </div>

            </div>


        </>
        
        
    )
}
