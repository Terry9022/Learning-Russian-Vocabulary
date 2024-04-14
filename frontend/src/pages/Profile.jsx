import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";

function Profile() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [level, setLevel] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userId = localStorage.getItem("userId");

        const response = await axios.get(
          `http://localhost:5555/api/user/${userId}`
        );
        const userData = response.data;
        console.log(userData);
        setUser(userData);
        setName(userData.name);
        setEmail(userData.email);
        setLevel(userData.level);
      } catch (error) {
        console.error(error);
        alert("Error fetching user profile");
      }
    };

    fetchUserProfile();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem("userId");
      await axios.put(`http://localhost:5555/api/user/update/${userId}`, {
        name,
        email,
        level,
      });
      alert("User information updated successfully");
    } catch (error) {
      console.error(error);
      alert("Error updating user information");
    }
  };

  const handleAddWord = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.get(
        `http://localhost:5555/api/user/add_word/${userId}`
      );
      const updatedUser = response.data;
      console.log(updatedUser);
      console.log(updatedUser.vocabulary_received);
      alert("Word added successfully");
    } catch (error) {
      console.error(error);
      alert("Error adding word");
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="body">
        <Header />
        <div className="max-w-md mx-auto mt-8">
          <h2 className="text-2xl font-bold mb-4">User Profile</h2>
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-base font-normal text-gray-700 rounded h-10 w-80 box-border block border-2 border-solid border-gray-300 px-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-base font-normal text-gray-700 rounded h-10 w-80 box-border block border-2 border-solid border-gray-300 px-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="level" className="block mb-2">
                Level
              </label>
              <select
                id="level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="text-base font-normal text-gray-700 rounded h-10 w-80 box-border block border-2 border-solid border-gray-300 px-2"
                required
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-slate-400 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Update
            </button>
          </form>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-700"
            onClick={handleAddWord}
          >
            Add Word
          </button>
        </div>
      </div>
      <footer>
        <div>
          <span>Хорошего дня</span>
        </div>
      </footer>
    </div>
  );
}

export default Profile;
