const API_URL = "https://jsonplaceholder.typicode.com/users";

const fallbackUsers = [
  {
    id: 1,
    name: "Amina Bello",
    email: "amina@example.com",
    phone: "0803-555-0141",
    company: { name: "Launchpad Studio" },
    address: { city: "Lagos" }
  },
  {
    id: 2,
    name: "Tobi Adeyemi",
    email: "tobi@example.com",
    phone: "0803-555-0142",
    company: { name: "Bright Pixel" },
    address: { city: "Abuja" }
  },
  {
    id: 3,
    name: "Maryam Yusuf",
    email: "maryam@example.com",
    phone: "0803-555-0143",
    company: { name: "Launchpad Studio" },
    address: { city: "Kano" }
  },
  {
    id: 4,
    name: "David Okafor",
    email: "david@example.com",
    phone: "0803-555-0144",
    company: { name: "Ocean Labs" },
    address: { city: "Port Harcourt" }
  },
  {
    id: 5,
    name: "Zainab Garba",
    email: "zainab@example.com",
    phone: "0803-555-0145",
    company: { name: "Bright Pixel" },
    address: { city: "Kaduna" }
  }
];

export async function fetchUsers() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Unable to load the API users.");
    }

    const users = await response.json();
    return {
      users,
      source: "api"
    };
  } catch (error) {
    return {
      users: fallbackUsers,
      source: "fallback"
    };
  }
}
