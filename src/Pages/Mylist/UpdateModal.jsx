import axios from 'axios';
import { MdCancel } from 'react-icons/md';
import Swal from 'sweetalert2';

const UpdateModal = ({ isOpen, onClose, item, onUpdate }) => {
    if (!isOpen) return null;

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();

        // Collect data from the form
        const updatedData = {
            spotsname: e.target.spotsname.value,
            country: e.target.country.value,
            vacancy: e.target.vacancy.value,
            cost: e.target.cost.value,
            location: e.target.location.value,
            year: e.target.year.value,
            time: e.target.time.value,
            details: e.target.details.value,
        };

        console.log("Updated data being sent:", updatedData); // Log to see the updated data
        console.log("Item ID:", item._id); // Log the item ID

        try {
            // Send PUT request to the server to update the data
            const response = await axios.put(
                `http://localhost:5000/AddSpots/${item._id}`,
                updatedData
            );

            console.log("Server response:", response.data); // Log server response for more insight

            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    text: 'Successfully Updated',
                });
                onUpdate(item._id, updatedData); 
                onClose(); 
            } else {
                alert('Failed to update data.');
            }
        } catch (error) {
            console.error('Error updating data:', error);
            alert('An error occurred while updating the data.');
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-xl w-[400px] max-h-[90vh] overflow-auto">
                <div className="flex justify-between">
                    <h2 className="text-md font-bold mb-4">Update Your Data</h2>
                    <MdCancel
                        onClick={onClose}
                        className="text-2xl hover:text-red-600 cursor-pointer"
                    />
                </div>
                <form onSubmit={handleUpdateSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Place Name</label>
                        <input
                            type="text"
                            name="spotsname"
                            defaultValue={item?.spotsname}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Country</label>
                        <input
                            type="text"
                            name="country"
                            defaultValue={item?.country}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Vacancy</label>
                        <input
                            type="text"
                            name="vacancy"
                            defaultValue={item?.vacancy}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Cost</label>
                        <input
                            type="text"
                            name="cost"
                            defaultValue={item?.cost}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Location</label>
                        <input
                            type="text"
                            name="location"
                            defaultValue={item?.location}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Year</label>
                        <input
                            type="text"
                            name="year"
                            defaultValue={item?.year}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Time</label>
                        <input
                            type="text"
                            name="time"
                            defaultValue={item?.time}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Details</label>
                        <textarea
                            name="details"
                            defaultValue={item?.details}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-5 w-full py-2 bg-[#FB8E26] text-white rounded-lg shadow-md"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateModal;
