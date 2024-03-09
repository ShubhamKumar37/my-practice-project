

export default function Alert(Props) {
    return (
        Props.Message && <div className={`absolute p-4 mb-4 text-sm rounded-lg ${Props.Message.TYP === 'Success' ? 'text-green-800 bg-green-300' : 'text-red-800 bg-red-300'}`} role="alert">
            <span className="font-medium">{Props.Message.TYP}!! </span>{Props.Message.MSG}
        </div>


    );
}