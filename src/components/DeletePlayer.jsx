const DeletePlayer = async (id) => {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-PT/players/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      alert("You have deleted the player");
      return data;
    } catch (error) {
      console.error("There was an issue deleting the player", error);
    }
  };
  
  export default DeletePlayer;