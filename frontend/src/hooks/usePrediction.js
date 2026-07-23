import { useState } from "react";
import { predictSupplyChain } from "../services/api";

export default function usePrediction() {

    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const predict = async (formData) => {

        try {

            setLoading(true);
            setError("");

            const response = await predictSupplyChain(formData);

            setPrediction(response.data.predicted_mitigation_action);

        } catch (err) {

            console.error(err);

            setError("Prediction failed.");

        } finally {

            setLoading(false);

        }

    };

    return {

        prediction,
        loading,
        error,
        predict

    };

}