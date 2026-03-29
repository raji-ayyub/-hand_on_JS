import { fetchUsers } from "./api.js";
import {
  clearStatus,
  renderCompanyOptions,
  renderStats,
  renderUsers,
  showStatus
} from "./ui.js";

const searchInput = document.querySelector("#searchInput");
const companyFilter = document.querySelector("#companyFilter");

const state = {
  users: [],
  searchTerm: "",
  selectedCompany: "all",
  source: "api"
};

function getUniqueCompanies(users) {
  return [...new Set(users.map((user) => user.company.name))].sort((a, b) =>
    a.localeCompare(b)
  );
}

function getFilteredUsers() {
  return state.users
    .filter((user) =>
      user.name.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
    .filter((user) =>
      state.selectedCompany === "all" ? true : user.company.name === state.selectedCompany
    )
    .sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name));
}

function renderApp() {
  const filteredUsers = getFilteredUsers();

  renderStats(state.users.length, filteredUsers.length);
  renderUsers(filteredUsers);

  if (filteredUsers.length === 0) {
    showStatus("No users match the current filters.", "info");
    return;
  }

  if (state.source === "fallback") {
    showStatus("API unavailable, so the app is showing built-in fallback users.", "info");
    return;
  }

  clearStatus();
}

async function init() {
  showStatus("Loading users...", "info");

  const { users, source } = await fetchUsers();
  state.users = users;
  state.source = source;

  renderCompanyOptions(getUniqueCompanies(users));
  renderApp();
}

searchInput.addEventListener("input", (event) => {
  state.searchTerm = event.target.value;
  renderApp();
});

companyFilter.addEventListener("change", (event) => {
  state.selectedCompany = event.target.value;
  renderApp();
});

init();
