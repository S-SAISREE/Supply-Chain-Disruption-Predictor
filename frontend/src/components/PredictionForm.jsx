import { useState } from "react";

function PredictionForm({ onPredict, loading }) {
  const [formData, setFormData] = useState({
    origin_city: "",
    destination_city: "",
    route_type: "",
    transportation_mode: "",
    product_category: "",
    delivery_status: "",
    disruption_event: "",
    base_lead_time_days: 0,
    scheduled_lead_time_days: 0,
    actual_lead_time_days: 0,
    delay_days: 0,
    geopolitical_risk_index: 0,
    weather_severity_index: 0,
    inflation_rate_pct: 0,
    shipping_cost_usd: 0,
    order_weight_kg: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "number"
          ? Number(e.target.value)
          : e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    onPredict(formData);

};
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
      <h2 className="text-3xl font-bold mb-6">
        Prediction Form
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-5"
      >
        {/* We'll add the dropdowns next */}

        <button
    type="submit"
    disabled={loading}
    className="col-span-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
>

    {

        loading ?

        "Predicting..."

        :

        "Predict Mitigation"

    }

</button>
      </form>
    </div>
  );
}

export default PredictionForm;