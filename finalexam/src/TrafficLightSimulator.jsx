import { useState, useEffect } from "react";

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
    lightOn: {
        red: {
            backgroundColor: "red",
            boxShadow: "0 0 25px 5px rgba(255, 0, 0, 0.8)",
        },
        yellow: {
            backgroundColor: "yellow",
            boxShadow: "0 0 25px 5px rgba(255, 255, 0, 0.8)",
        },
        green: {
            backgroundColor: "limegreen",
            boxShadow: "0 0 25px 5px rgba(0, 255, 0, 0.8)",
        },
    },
};

const TrafficLightSimulator = () => {

    const [currentLight, setCurrentLight] = useState("red");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLight((prev) =>
                prev === "red" ? "yellow" : prev === "yellow" ? "green" : "red"
            );
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const getLightStyle = (color) => ({
        ...styles.light,
        ...(currentLight === color ? styles.lightOn[color] : {}),
    });

    return (
        <div style={styles.maincontainer}>
            <h2 style={styles.title}>Traffic Light Simulator</h2>
            <div style={styles.trafficLightbody}>
                <div style={getLightStyle("red")} />
                <div style={getLightStyle("yellow")} />
                <div style={getLightStyle("green")} />
            </div>
        </div>
    );
};


export default TrafficLightSimulator;