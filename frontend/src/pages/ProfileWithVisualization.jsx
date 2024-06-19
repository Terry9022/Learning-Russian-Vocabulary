import Header from "../components/Header";
import VocabularyLevelChart from "../chart/VocabularyLevelChart";
import QuizScoreChart from "../chart/QuizScoreChart";

const ProfileWithVisualization = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    level: "2",
  };

  return (
    <div>
      <div className="body">
        <Header />
        <div className="max-w-md mx-auto mt-8">
          <h2 className="text-2xl font-bold mb-4">User Profile</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={user.name}
              readOnly
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
              value={user.email}
              readOnly
              className="text-base font-normal text-gray-700 rounded h-10 w-80 box-border block border-2 border-solid border-gray-300 px-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="level" className="block mb-2">
              Level
            </label>
            <input
              type="text"
              id="level"
              value={user.level}
              readOnly
              className="text-base font-normal text-gray-700 rounded h-10 w-80 box-border block border-2 border-solid border-gray-300 px-2"
            />
          </div>
          <button
            type="submit"
            className="bg-slate-400 text-white px-4 py-2 rounded-md hover:bg-red-700 "
          >
            Update
          </button>
          <button className="bg-slate-400 text-white px-4 py-2 rounded-md mt-4 hover:bg-red-700 ">
            Add Word
          </button>
        </div>
        <div className=" mt-8">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Data Visualization
          </h2>
          <div
            style={{
              width: "70%",
              height: "auto",
              margin: "auto",
              marginBottom: "40px",
            }}
          >
            <VocabularyLevelChart />
            <div className="mt-8"></div>
            <QuizScoreChart />
          </div>
        </div>
      </div>
      <footer>
        <div>
          <span>Хорошего дня</span>
        </div>
      </footer>
    </div>
  );
};

export default ProfileWithVisualization;
