"use strict";
let createTask = document.querySelector("#create");
let formInput = document.querySelector("#crud_input");
let submitBtn = document.querySelector("#submit");
let theadbody = document.querySelector("tbody");
let form = document.querySelector(".form");
formInput.value = "";

// createTask.addEventListener("click", createCrud);
createTask.addEventListener("click", function () {
  if (submitBtn.textContent == "submit") {
    createCrud();
  } else {
    updateCrud(tr);
  }
});

function createCrud() {
  form.classList.remove("form");
  submitBtn.addEventListener("click", function () {
    let taskName = document.createElement("tr");
    taskName.innerHTML = `<td>${formInput.value} </td>
      <td>
      <button class="readCrud">View</button>
      <button class="updateCrud">Update</button>
      <button class="deleteCrud">Delete</button>
      </td>`;
    theadbody.appendChild(taskName);
    formInput.value = "";
    form.classList.add("form");
    console.log(formInput.value);
    taskName
      .querySelector(".updateCrud")
      .addEventListener("click", function () {
        updateCrud(taskName);
      });
    taskName
      .querySelector(".deleteCrud")
      .addEventListener("click", function () {
        deleteCrud(taskName);
      });
  });
}

function updateCrud(tr) {
  form.classList.remove("form");
  tr.remove();
  submitBtn.textContent = "Update";
  formInput.value = tr.querySelector("td").innerHTML;
  submitBtn.addEventListener("click", function () {
    tr.querySelector("td").innerText = formInput.value;
  });
}

function deleteCrud(tr) {
  tr.remove();
}



