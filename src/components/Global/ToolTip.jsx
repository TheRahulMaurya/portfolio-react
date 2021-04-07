import './ToolTip.css';

const ToolTip = ({className, tip}) => {

    return(
        <div className={className}>
            <span className="tool-tip">{tip}</span>
        </div>
    )
}

export default ToolTip;