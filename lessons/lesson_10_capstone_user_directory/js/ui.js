const status = document.querySelector("#status");
const stats = document.querySelector("#stats");
const userList = document.querySelector("#userList");
const companyFilter = document.querySelector("#companyFilter");

export function showStatus(message, type = "info") {
  status.className = `status status--${type}`;
  status.textContent = message;
}

export function clearStatus() {
  status.className = "status";
  status.textContent = "";
}

export function renderStats(totalUsers, visibleUsers) {
  stats.innerHTML = `
    <article class="stat-card">
      <p>Total users loaded</p>
      <h2>${totalUsers}</h2>
    </article>
    <article class="stat-card">
      <p>Users currently shown</p>
      <h2>${visibleUsers}</h2>
    </article>
  `;
}

export function renderCompanyOptions(companies) {
  companyFilter.innerHTML = `
    <option value="all">All companies</option>
    ${companies
      .map((company) => `<option value="${company}">${company}</option>`)
      .join("")}
  `;
}

export function renderUsers(users) {
  if (users.length === 0) {
    userList.innerHTML = `
      <article class="empty-state">
        <h2>No users found</h2>
        <p>Try a different search term or company filter.</p>
      </article>
    `;
    return;
  }

  userList.innerHTML = users
    .map((user) => {
      return `
        <article class="user-card">
          <h2>${user.name}</h2>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>City:</strong> ${user.address.city}</p>
          <span class="company">${user.company.name}</span>
        </article>
      `;
    })
    .join("");
}
