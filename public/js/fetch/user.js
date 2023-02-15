const User = {
  create: async function (name) {

    const response = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //req.sess
      body: JSON.stringify({
        name: name,
        progress: 0,
        journey_id: 1,
        user_id: 1
      }),
    });

    if (response.ok) {
      const data = await response.json();
      this.id = data.id;
      console.log("User added successfully:", data);
    } else {
      console.error("Error adding User:", response.statusText);
    }
  },

  update: async function(id, param) {
    const response = await fetch(`/api/user/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({param}),
    });
  
    if (response.ok) {
      const data = await response.json();
      console.log("User progress update successful:", data);
    } else {
      console.error("Error updating comment:", response.statusText);
    }
  },

  delete: async function (id) {
    const response = await fetch(`/api/user/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      console.log(`User with ID ${id} deleted successfully`);
    } else {
      console.error(
        `Error deleting User with ID ${id}:`,
        response.statusText
      );
    }
  },
};