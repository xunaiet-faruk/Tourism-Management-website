import { useState } from "react";
import Useaxios from "../../Hooks/Useaxios";
import Swal from "sweetalert2";
import { FaRightLong } from "react-icons/fa6";

// ImgBB API URL with the API key
const image_hoisting = import.meta.env.VITE_OISTING_KEY;  // API Key
const image_url_key = `https://api.imgbb.com/1/upload?key=${image_hoisting}`;

const AddPlaces = () => {
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const axiosPublice = Useaxios();
    const [showName, setShowName] = useState({});

    const handleForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const location = form.location.value;
        const year = form.year.value;
        const time = form.time.value;
        const cost = form.cost.value;
        const spotsname = form.spotsname.value;
        const country = form.country.value;
        const vacancy = form.vacancy.value;
        const details = form.details.value;

        if (imageFile) {
            // Step 1: Upload Image to ImgBB
            const formData = new FormData();
            formData.append("image", imageFile);

            try {
                const imgRes = await fetch(image_url_key, {
                    method: "POST",
                    body: formData,
                });

                const imgData = await imgRes.json();

                if (imgData.success) {
                    // Step 2: Get the image URL from ImgBB
                    const imageUrl = imgData.data.url;

                    // Step 3: Send the form data including image URL to your database
                    const formDataToSend = {
                        email,
                        name,
                        location,
                        year,
                        time,
                        cost,
                        spotsname,
                        country,
                        vacancy,
                        details,
                        image: imageUrl,  // Send the ImgBB image URL
                    };

                    // Send to server-side to store data in the database
                    const response = await axiosPublice.post("/AddSpots", formDataToSend);

                    if (response.data.insertedId) {
                        Swal.fire({
                            icon: "success",
                            text: "Successfully Added Spot with Image",
                        });
                    } else {
                        Swal.fire({
                            icon: "error",
                            text: "Failed to add spot",
                        });
                    }
                } else {
                    Swal.fire({
                        icon: "error",
                        text: "Failed to upload image to ImgBB",
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    text: "An error occurred while uploading the image",
                });
            }
        } else {
            Swal.fire({
                icon: "error",
                text: "Please select an image",
            });
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
            setImageFile(file);
        }
    };

    return (
        <div>
            <section
                className="relative bg-cover bg-center h-[400px] flex "
                style={{
                    backgroundImage: "url('https://i.ibb.co/bXdCpm1/DALL-E-2024-12-08-11-32-30-A-realistic-and-vibrant-full-width-banner-image-for-a-tour-management-web.webp')",
                }}
            >
                {/* Black Opacity Layer */}
                <div className="absolute inset-0 bg-black opacity-60"></div>

                {/* Content on Top of the Banner */}
                <div className="relative z-10 text-white text-center flex gap-2 my-56 px-12">
                    <h1 className="text-md font-bold mb-4">Add Tourist Spot</h1>
                    <FaRightLong className="mt-1" />
                    <a href="/">  <h1 className="text-md font-bold mb-4 text-[#FB8E26] ">Home</h1></a>
                </div>
            </section>

            <div className="shadow-xl w-[900px] h-[700px] mx-auto mt-12 rounded-md mb-32">
                <form onSubmit={handleForm} className="space-y-7">
                    {/* Input Fields */}
                    <div className="flex justify-center items-center gap-4 pt-12">
                        <div>
                            <input
                                type="email"
                                name="email"
                                className="w-[400px] border-b-2 border-[#FB8E26] rounded-xl h-10 px-5"
                                placeholder="Enter Email"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="name"
                                className="w-[400px] border-b-2 border-[#FB8E26] rounded-xl h-10 px-5"
                                placeholder="Enter Name"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-4">
                        <div className="">
                            <input type="text" name="location" className="w-[400px] border-b-2 border-[#FB8E26] rounded-xl  h-10 px-5" placeholder="Enter Location" />
                        </div>
                        <div className="">
                            <input type="number" name="cost" className="w-[400px] border-b-2 border-[#FB8E26] rounded-xl  h-10 px-5" placeholder="Enter Average_cost" />
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-4">
                        <div className="">
                            <input type="number" name="year" className="w-[400px] border-b-2 border-[#FB8E26] rounded-xl  h-10 px-5" placeholder="Enter TotaVisitorsPerYear" />
                        </div>
                        <div className="">
                            <input type="number" name="time" className="w-[400px] border-b-2 border-[#FB8E26] rounded-xl  h-10 px-5" placeholder="Enter Days " />
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-4">
                        <div className="">
                            <input type="text" name="spotsname" className="w-[400px] border-b-2 border-[#FB8E26] rounded-xl  h-10  px-5" placeholder="Enter Tourists_spot_name" />
                        </div>
                        <div className="">
                            <input type="text" name="country" className="w-[400px] border-b-2 border-[#FB8E26] rounded-xl  h-10 px-5" placeholder="Enter Country Name " />
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-4 px-10">
                        <select name="vacancy" id="" className="px-6 w-1/2 border-b-2 border-[#FB8E26] rounded-xl  h-10 ">
                            <option value="Summer">Summer</option>
                            <option value="Winter">Winter</option>
                            <option value="Monsoon">Monsoon</option>
                            <option value="Festive Season">Festive Season</option>
                            <option value="Rainy Season">Rainy Season</option>
                        </select>
                        <div className="">
                            <textarea name="details" type="text" className="w-[400px] border-b-2 border-[#FB8E26] rounded-xl  h-10 px-5 py-2" placeholder="Enter Short Description " />
                        </div>
                    </div>

                    {/* Image Field (No design change, only functionality update) */}
                    <div className="w-full  space-y-2">
                        <input
                            type="file"
                            onChange={handleImageChange}
                            name="image"
                            accept="image/*"
                            className="border-2 border-dashed border-[#FB8E26] w-[810px] ml-12 rounded-md py-2 px-3  "
                        />
                    </div>

                    {imagePreview && (
                        <div className="mx-auto flex w-[830px] items-center gap-x-6 rounded-lg  bg-white">
                            <img
                                className="w-full max-w-[150px] rounded-lg object-cover ml-4"
                                src={imagePreview}
                                alt="Image Preview"
                            />
                        </div>
                    )}

                    

                    <button type="submit" className="relative ml-12 font-serif inline-block h-10 w-40 overflow-hidden border-sky-500 px-5 py-2 text- shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-[#FB8E26] before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-[#FB8E26] after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0">Add Spots</button>

                </form>
            </div>
        </div>
    );
};

export default AddPlaces;
