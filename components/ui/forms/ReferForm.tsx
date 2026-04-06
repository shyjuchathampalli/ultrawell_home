export default function ReferForm() {
  return (
    <div className="space-y-5">

      <p className="text-sm text-gray-500">
        Start your referral in a few easy steps
      </p>

      {[
        "Referrer First Name",
        "Referrer Last Name",
        "Resident Name",
        "Resident Age",
        "Phone",
        "Email",
      ].map((label, i) => (
        <div key={i}>
          <label className="text-sm text-gray-600">{label}</label>
          <input
            className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 
            focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
        </div>
      ))}

      <div>
        <label className="text-sm text-gray-600">Background</label>
        <textarea className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 h-28" />
      </div>

      <button className="w-full mt-4 py-3 rounded-xl 
        bg-gradient-to-r from-[#c12e5a] to-[#f59e0b] 
        text-white font-medium hover:opacity-90 transition">
        Submit Referral
      </button>
    </div>
  );
}