const pursue = document.getElementById('pursue');
const name = document.getElementById('name');
const email = document.getElementById('email');
const telephone = document.getElementById('telephone');
const submitButton = document.getElementById('submit');
const inputs = [pursue, name, email, telephone];

inputs.forEach(item => {
    item.oninput = item.onblur = ({target}) => {
        target.value ? target.classList.remove('invalid') : target.classList.add('invalid');
    }
});

submitButton.onclick = () => {
    const payload = inputs.reduce((acc, next) => {
        acc[next.id] = next.value;
        return acc;
    }, {})
    console.log(payload);
};
