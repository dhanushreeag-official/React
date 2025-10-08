import '../Styles/Register.css'

export default function EachInput({type, displayName, value, onChange}){
    return(
        <>
            <div className="Spacing">
                <label className="Label">{displayName}</label>
                <input 
                    type={type}
                    placeholder={`Enter your ${displayName}`} 
                    value={value}
                    onChange={onChange}
                    className="InputBox"
                />
            </div>
        </>
    )
}