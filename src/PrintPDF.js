import React from 'react';
import Pdf from 'react-to-pdf';

const ref = React.createRef();

const PrintPDF = (props) => {
    return(
        <>
        <div ref={ref}>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.phone}</p>
        </div>
        <Pdf targetRef={ref} filename= 'post.pdf'>
            {({toPdf}) => <button onClick={toPdf}>Capture as PDF</button>}
        </Pdf>
        </>
    )
}
export default PrintPDF