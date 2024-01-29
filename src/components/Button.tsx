interface Props {
    btnText: string;
    handleClick: (name: string) => void;
}

export default function Button({btnText, handleClick}: Props) {
    return <button onClick={() => handleClick("Button geklickt!")}>{btnText}</button>
}
