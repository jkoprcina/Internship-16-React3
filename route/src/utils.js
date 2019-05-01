export const fetchPets = pet =>
  fetch(`http://localhost:3000/${pet}`).then(response => response.json());

export const fetchPet = (pet, id) =>
  fetch(`http://localhost:3000/${pet}/${id}`).then(response => response.json());

export const savePet = (pet, name, description) =>
  fetch(`http://localhost:3000/${pet}`, {
    method: "POST",
    body: JSON.stringify({ name: name, description: description }),
    header: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());

export const updatePet = (pet, id, name, description) =>
  fetch(`http://localhost:3000/${pet}/${id}`, {
    method: "PUT",
    body: JSON.stringify({ id: id, name: name, description: description }),
    header: {
      "Content-Type": "application/json"
    }
  }).then(response => response.json());
