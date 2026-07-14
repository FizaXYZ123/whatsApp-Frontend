import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/auth";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await signup(form);

      if (res.data.message === "user registered successfully") {
        const goLogin = window.confirm(
          "Signup successful!\n\nDo you want to login now?"
        );

        if (goLogin) {
          navigate("/login");
        }
      }
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <form
        onSubmit={handleSignup}
        className="bg-slate-800 p-8 rounded-lg w-96 space-y-4"
      >
        <h1 className="text-3xl text-white font-bold text-center">
          Signup
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full"
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary w-full">
          Signup
        </button>

        <p className="text-center text-white">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-500 cursor-pointer"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Signup;