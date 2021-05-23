import {useFormikContext} from 'formik';

export const KFormikState = (props: any) => {
    const formik = useFormikContext();
    return (
        <div style={{margin: "1rem 0"}}>
            <h3 style={{fontFamily: "monospace"}}/>
            <pre
                style={{
                    background: "#f6f8fa",
                    fontSize: ".65rem",
                    padding: ".5rem",
                }}
            >
            <strong>props</strong> ={" "}
                {JSON.stringify(formik.values, null, 2)}
        </pre>
        </div>
    )
}

