import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faLock, faFingerprint, faEye, faCircle, faPeopleGroup, faShield, faClock, faMobile } from "@fortawesome/free-solid-svg-icons";

export default function CardSolucao({icone, text}){
    return(
        <div className="bg-white p-2 rounded-lg shadow-md border-2 border-brand-gray-light text-center flex flex-col justify-center max-w-56">
            <div className="text-black mb-3">
                <FontAwesomeIcon icon={icone} className="text-4xl bg-brand-gray-light text-white border-2 px-2 py-3 rounded-2xl"/>
            </div>
            <h3 className="text-xl font-semibold text-black mb-2 max-w-sm">{text}</h3>
        </div>
    )
}