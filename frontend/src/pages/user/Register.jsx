import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerschema } from "../../components/formschema/registerschema";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerschema)
  });

  const onSubmit = (data) => {
    alert("Registration successful!");
    navigate("/login", { state: data });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-50 to-teal-100 px-4 py-10">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-teal-700">ReTechLoop</h1>
          <p className="text-sm text-gray-500 mt-2">Smart Electronics Repair & E-Waste Management</p>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">Create Account</h2>
        <p className="text-gray-500 text-sm mt-2 mb-7">Join ReTechLoop and get started.</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input {...register("name")} placeholder="Enter your full name" className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500" />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input {...register("email")} type="email" placeholder="Enter your email" className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500" />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input {...register("password")} type="password" placeholder="Create a password" className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500" />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
            <input {...register("age")} type="number" placeholder="Enter your age" className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-teal-500" />
            {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>}
          </div>

          <button type="submit" className="w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md">Create Account</button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-7">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="text-teal-700 font-semibold cursor-pointer hover:underline">Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
