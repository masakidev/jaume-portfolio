const $formContainer = document.getElementById('form__container')
const $form = document.getElementById('form');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'aplication/json'
        }
    })

    if (response.ok) {
        this.reset();
        $formContainer.innerHTML = `
            <h1 class="form__title form__title--center">
                Gracias por contactarme, te escribiré pronto.
            </h1>
        `
    }
}