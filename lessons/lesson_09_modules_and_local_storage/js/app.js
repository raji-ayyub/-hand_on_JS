import { createResource, getSavedResources, saveResources } from "./storage.js";
import { clearMessage, renderResources, showMessage } from "./ui.js";

const resourceForm = document.querySelector("#resourceForm");
const message = document.querySelector("#message");
const resourceList = document.querySelector("#resourceList");

let resources = getSavedResources();

function validateResource(resourceValues) {
  if (resourceValues.title.length < 3) {
    return "Please enter a title with at least 3 characters.";
  }

  if (!resourceValues.url.startsWith("http")) {
    return "Please enter a full URL that starts with http.";
  }

  if (!resourceValues.category) {
    return "Please choose a category.";
  }

  return "";
}

function collectFormValues() {
  const formData = new FormData(resourceForm);

  return {
    title: formData.get("title").trim(),
    url: formData.get("url").trim(),
    category: formData.get("category").trim()
  };
}

function rerender() {
  renderResources(resources, resourceList);
}

resourceForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const resourceValues = collectFormValues();
  const validationMessage = validateResource(resourceValues);

  if (validationMessage) {
    showMessage(message, validationMessage, "error");
    return;
  }

  const newResource = createResource(resourceValues);
  resources = [newResource, ...resources];
  saveResources(resources);
  rerender();
  showMessage(message, "Resource saved to local storage.", "success");
  resourceForm.reset();
});

resourceList.addEventListener("click", (event) => {
  const deleteButton = event.target.closest("[data-delete-id]");

  if (!deleteButton) {
    return;
  }

  const resourceId = deleteButton.dataset.deleteId;
  resources = resources.filter((resource) => resource.id !== resourceId);
  saveResources(resources);
  rerender();

  if (resources.length === 0) {
    showMessage(message, "All resources removed. Add another one to continue practicing.", "info");
    return;
  }

  clearMessage(message);
});

rerender();
