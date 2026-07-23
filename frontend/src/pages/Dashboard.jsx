import Navbar from "../components/Navbar";
import PredictionForm from "../components/PredictionForm";
import PredictionResult from "../components/PredictionResult";

import usePrediction from "../hooks/usePrediction";

function Dashboard() {

    const {

        prediction,
        loading,
        error,
        predict

    } = usePrediction();

    return (

        <div className="min-h-screen bg-slate-900">

            <Navbar />

            <div className="max-w-7xl mx-auto p-10">

                <PredictionForm
                    onPredict={predict}
                    loading={loading}
                />

                <PredictionResult
                    prediction={prediction}
                    error={error}
                />

            </div>

        </div>

    );

}

export default Dashboard;