const styles = {
    maincontainer: {
        backgroundColor: "#1e1e1e",
        color: "white",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
    },
    title: {
        marginBottom: "20px",
        fontSize: "24px",
    },
    trafficLightbody: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "#2e2e2e",
        padding: "30px 20px",
        borderRadius: "20px",
        width: "100px",
        boxShadow: "0 0 10px rgb(0, 0, 0)",
    },
    light: {
        width: "70px",
        height: "70px",
        backgroundColor: "#505050",
        borderRadius: "50%",
        transition: "all 0.5s ease",
        marginBottom: "5px",
        marginTop: "5px",
    },
};

const TrafficLightSimulator = () => {
    return (
        <div style={styles.maincontainer}>
            <h2 style={styles.title}>Traffic Light Simulator</h2>
            <div style={styles.trafficLightbody}>
                <div style={styles.light} />
                <div style={styles.light} />
                <div style={styles.light} />
            </div>
        </div>
    );
};


export default TrafficLightSimulator;