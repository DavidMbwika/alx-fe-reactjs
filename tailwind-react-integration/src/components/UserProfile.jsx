function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-10 sm:my-20 rounded-lg shadow-lg text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="rounded-full w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 mx-auto"
        />
        <h1 className="text-lg sm:text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
        <p className="text-sm sm:text-base md:text-base text-gray-600">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;
  