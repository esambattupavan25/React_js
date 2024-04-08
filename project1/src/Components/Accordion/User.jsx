import React, { useState } from 'react'
import data from '../../data';
import "../style.css"
export const Accordian = () => {
    const [selected, setselected] = useState(null);
    const [enableMultiselection, setenableMultiselection] = useState(false);
    const [Multiple, setMultiple] = useState([]);

    function handlesingleselection(getcurrentid) {
        setselected(getcurrentid === selected ? null : getcurrentid)

    }
    function handleMultiselection(getcurrentid) {
        let cpyMultiple = [...Multiple];
        const findIndexofCurrentId = cpyMultiple.indexOf(getcurrentid)

        console.log(findIndexofCurrentId);
        if (findIndexofCurrentId === -1) cpyMultiple.push(getcurrentid)
        else cpyMultiple.splice(findIndexofCurrentId, 1)

        setMultiple(cpyMultiple)

    }
    console.log(selected, Multiple)
    return (
        <div className='Wrapper'>
            <button onClick={() => setenableMultiselection(!enableMultiselection)}>Enable Mutli selection</button>
            <div className='accordion'>
                {

                    data && data.length > 0 ?
                        data.map((dataItem) => <div className='item'>
                            <div onClick={enableMultiselection 
                                ? () => handleMultiselection(dataItem.id) 
                                : () => handlesingleselection(dataItem.id)
                                } 
                                className='tittle'>
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMultiselection ?
                                Multiple.indexOf(dataItem.id) !== -1 &&
                                <div className='content'>{dataItem.answer}</div>:
                                selected === dataItem.id && <div className='content'>{dataItem.answer}</div>

                            }
                                {/* {selected === dataItem.id ||
                                    Multiple.indexOf(dataItem.id) !== -1 ? (
                                    <div className='content'>{dataItem.answer}</div>
                                ) : null} */}

                        </div>
                        ):(
                        <div>No data found !</div>
                )   }

            </div>

        </div>
    )
}
