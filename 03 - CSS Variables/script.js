const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
    console.log(`--${this.name}`, this.value + suffix);
}

// inputs.forEach(input => input.addEventListener('change', handleUpdate)); //instead of change I used input
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
inputs.forEach(input => input.addEventListener('input', handleUpdate));