export default function EnquireForm() {
  return (
    <div className="space-y-5">

      <p className="text-sm text-gray-500">
        We’re here to help you take the first step
      </p>

      {["First name", "Last name", "Phone", "Email", "Address"].map((label, i) => (
        <div key={i}>
          <label className="text-sm text-gray-600">{label}</label>
          <input
            className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 
            focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
          />
        </div>
      ))}

      <button className="w-full mt-4 py-3 rounded-xl 
        bg-gradient-to-r from-[#c12e5a] to-[#f59e0b] 
        text-white font-medium hover:opacity-90 transition">
        Contact Us Today
      </button>
    </div>
  );
}