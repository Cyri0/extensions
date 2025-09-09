import ToggleSwitch from "./ToggleSwitch";

export type ExtensionCardType = {
    icon: string,
    title: string,
    description: string
}

function ExtensionCard(props: ExtensionCardType){

    return(
        <div className="extensionCard">
            <div className="content">
                <div className="icon">{props.icon}</div>
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="buttons">
                <button>Remove</button>
                <ToggleSwitch/>
            </div>
        </div>
    )
}

export default ExtensionCard