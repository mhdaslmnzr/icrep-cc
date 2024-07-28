export default function InputForm({ formData, onChange }) {
    return (
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="admissionNo" className="block text-sm font-medium text-gray-700">Admission No.</label>
          <input
            type="text"
            id="admissionNo"
            name="admissionNo"
            value={formData.admissionNo}
            onChange={onChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="course" className="block text-sm font-medium text-gray-700">Course</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={onChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="dateFrom" className="block text-sm font-medium text-gray-700">Date From</label>
          <input
            type="date"
            id="dateFrom"
            name="dateFrom"
            value={formData.dateFrom}
            onChange={onChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="dateTo" className="block text-sm font-medium text-gray-700">Date To</label>
          <input
            type="date"
            id="dateTo"
            name="dateTo"
            value={formData.dateTo}
            onChange={onChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="conduct" className="block text-sm font-medium text-gray-700">Conduct</label>
          <input
            type="text"
            id="conduct"
            name="conduct"
            value={formData.conduct}
            onChange={onChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="place" className="block text-sm font-medium text-gray-700">Place</label>
          <input
            type="text"
            id="place"
            name="place"
            value={formData.place}
            onChange={onChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={onChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
      </form>
    );
  }