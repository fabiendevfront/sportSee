const CustomizedTooltip = ({ active, payload }) => {
    if (active && payload) {
        return (
            <div className={`customized-tooltip ${payload[0].name === "sessionLength" ? "customized-tooltip customized-tooltip--white" : "customized-tooltip"}`}>
                {payload[0] ? (<span className="customized-tooltip__label">{`${payload[0].value}${payload[0].unit}`}</span>) : ""}
                {payload[1] ? (<span className="customized-tooltip__label">{`${payload[1].value}${payload[1].unit}`}</span>) : ""}
            </div>
        );
    }
    return null;
};

export default CustomizedTooltip;