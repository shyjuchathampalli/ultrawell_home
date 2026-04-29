export default function EnquireForm() {
  return (
    <div className="space-y-5">
      <p className="text-sm text-gray-500">
        We’re here to help you take the first step
      </p>

      {/* Why Dropdown */}
      <div>
        <label className="text-sm text-gray-600">How can we help?</label>
        <select
          className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200
          text-gray-700 bg-white appearance-none
          focus:border-primary focus:ring-2 focus:ring-primary/20
          outline-none transition cursor-pointer"
          defaultValue=""
        >
          <option value="" disabled className="text-gray-400">
            Select an option
          </option>
          <option className="text-gray-700">Booking a Visit</option>
          <option className="text-gray-700">Volunteer Enquiry</option>
          <option className="text-gray-700">General Enquiry</option>
          <option className="text-gray-700">Room Availability</option>
          <option className="text-gray-700">Partnerships</option>
          <option className="text-gray-700">Feedback (Google Review API)</option>
        </select>
      </div>

      {/* Name */}
      <div>
        <label className="text-sm text-gray-600">Name</label>
        <input
          type="text"
          className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 
          focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-sm text-gray-600">Email</label>
        <input
          type="email"
          className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 
          focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
        />
      </div>

      {/* Subject */}
      <div>
        <label className="text-sm text-gray-600">Subject</label>
        <input
          type="text"
          className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 
          focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
        />
      </div>

      {/* Message */}
      <div>
        <label className="text-sm text-gray-600">Message</label>
        <textarea
          rows="4"
          className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-200 
          focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        className="w-full mt-4 py-3 rounded-xl 
        bg-gradient-to-r from-[#c12e5a] to-[#f59e0b] 
        text-white font-medium hover:opacity-90 transition"
      >
        Send Message
      </button>
    </div>
  );
}