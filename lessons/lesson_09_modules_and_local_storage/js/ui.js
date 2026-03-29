export function showMessage(element, message, type = "info") {
  element.className = `message message--${type}`;
  element.textContent = message;
}

export function clearMessage(element) {
  element.className = "message";
  element.textContent = "";
}

export function renderResources(resources, element) {
  if (resources.length === 0) {
    element.innerHTML = `
      <article class="resource-card">
        <h2>No resources saved yet</h2>
        <p>Add your first resource with the form above.</p>
      </article>
    `;
    return;
  }

  element.innerHTML = resources
    .map((resource) => {
      return `
        <article class="resource-card">
          <div class="resource-card__top">
            <div>
              <p>${resource.category.toUpperCase()}</p>
              <h2>${resource.title}</h2>
            </div>
            <button type="button" data-delete-id="${resource.id}">Delete</button>
          </div>
          <p><a href="${resource.url}" target="_blank" rel="noreferrer">Open resource</a></p>
        </article>
      `;
    })
    .join("");
}
