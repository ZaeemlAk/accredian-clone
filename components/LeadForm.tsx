export default function LeadForm() {
  return (
    <form className="mt-6 flex flex-col items-center gap-4">
      <input className="p-2 text-black" placeholder="Name" />
      <input className="p-2 text-black" placeholder="Email" />
      <button className="bg-white text-blue-600 px-4 py-2">
        Submit
      </button>
    </form>
  );
}