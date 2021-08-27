import React, { useState } from "react";
import Spinner from "../../components/ui/Spinner";
import { useAuth } from "../../context/providers/AuthContext";
import { Link } from "react-router-dom";

const Signup = ({ history }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signin, isLoading, errorMessage } = useAuth();

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userResponse = await signin(user);
      if (userResponse) {
        history.push(`/`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="row h-100">
      <div className="col-md-4 offset-md-4 p-2 my-auto">
        {errorMessage && (
          <div
            className="alert alert-danger text-center rounded-0"
            role="alert"
          >
            {errorMessage}
          </div>
        )}

        <div className="card card-body shadow">
          <h1>Login</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                className="form-control rounded-0"
                placeholder="youremail@company.com"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="form-control rounded-0"
                name="password"
                placeholder="Write your passwoord"
                onChange={handleChange}
              />
            </div>

            <button
              className="btn btn-primary rounded-0"
              disabled={!user.email || !user.password || isLoading}
            >
              {isLoading ? (
                <>
                  <Spinner />
                  <span>Loading...</span>
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <p className="mt-4">
            Don't Have an Account?{" "}
            <Link to="/auth/signup">Create your Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
