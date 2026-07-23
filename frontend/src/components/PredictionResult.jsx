function PredictionResult({ prediction, error }) {

    return (

        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

            <h2 className="text-2xl font-bold mb-6">

                Prediction Result

            </h2>

            {

                error && (

                    <div className="text-red-500">

                        {error}

                    </div>

                )

            }

            {

                prediction ? (

                    <div>

                        <h1 className="text-4xl font-bold text-green-600">

                            ✅ {prediction}

                        </h1>

                    </div>

                ) : (

                    <div className="text-gray-500">

                        Submit the form to get a prediction.

                    </div>

                )

            }

        </div>

    );

}

export default PredictionResult;