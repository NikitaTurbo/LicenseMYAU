const license = document.querySelector('input');
const licenseLabel = document.querySelector('label');
const succes = document.querySelector('div div');
const licensesName = ['4fBa0oAcd883zW-129', '83xVwOA0fd127-05', 'A012fdcWx135x-202', 'b0fhgT57-45tBA-202C'];

const search = (value) => {
    if (licensesName.indexOf(value) >= 0) {
        license.style.display = 'none';
        licenseLabel.style.display = 'none';
        succes.style.display = 'block';
    }
}
